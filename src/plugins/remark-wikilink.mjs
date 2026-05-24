/**
 * Remark plugin: convert [[target]] and [[target|alias]] wikilinks
 * to proper Markdown links resolved against post frontmatter titles.
 *
 * Uses a resolver built from scanning the posts directory.
 */
import { visit } from 'unist-util-visit';
import { readdirSync, readFileSync, existsSync, statSync } from 'fs';
import { join, extname, relative } from 'path';
import matter from 'gray-matter';

const WIKILINK_RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

let _resolver = null;

function scanDir(dir, map, postsDir) {
  if (!existsSync(dir)) return;
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      scanDir(fullPath, map, postsDir);
    } else if (extname(entry) === '.md' || extname(entry) === '.mdx') {
      const raw = readFileSync(fullPath, 'utf-8');
      const { data } = matter(raw);
      const slug = entry.replace(/\.(md|mdx)$/, '');
      const title = data.title || slug;
      const relDir = relative(postsDir, dir);
      const urlSlug = relDir ? `${relDir}/${slug}` : slug;

      map.set(slug, urlSlug);
      map.set(slug.toLowerCase(), urlSlug);
      map.set(title, urlSlug);
      map.set(title.toLowerCase(), urlSlug);
    }
  }
}

function buildResolver(postsDir) {
  if (_resolver) return _resolver;

  const map = new Map();
  try {
    scanDir(postsDir, map, postsDir);
  } catch (_) {}


  _resolver = map;
  return map;
}

function resolveTarget(resolver, target) {
  const trimmed = target.trim();
  if (resolver.has(trimmed)) return resolver.get(trimmed);
  const lower = trimmed.toLowerCase();
  if (resolver.has(lower)) return resolver.get(lower);
  // Partial match as fallback
  for (const [key, slug] of resolver.entries()) {
    if (key.includes(trimmed) || trimmed.includes(key.replace(/[a-z]/g, ''))) {
      return slug;
    }
  }
  return null;
}

export default function remarkWikilink(options = {}) {
  // Resolve posts directory relative to project root
  const postsDir = options.postsDir || join(process.cwd(), 'src/pages/posts');

  return (tree) => {
    const resolver = buildResolver(postsDir);

    visit(tree, 'text', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;
      const { value } = node;

      const matches = [];
      let match;
      WIKILINK_RE.lastIndex = 0;
      while ((match = WIKILINK_RE.exec(value)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          target: match[1].trim(),
          alias: match[2] ? match[2].trim() : match[1].trim(),
        });
      }

      if (matches.length === 0) return;

      const children = [];
      let cursor = 0;

      for (const m of matches) {
        if (m.start > cursor) {
          children.push({ type: 'text', value: value.slice(cursor, m.start) });
        }

        const slug = resolveTarget(resolver, m.target);
        if (slug) {
          children.push({
            type: 'link',
            url: `/posts/${slug}/`,
            title: m.target,
            children: [{ type: 'text', value: m.alias }],
          });
        } else {
          children.push({
            type: 'html',
            value: `<span class="wikilink broken" title="broken link: ${m.target}">${m.alias}</span>`,
          });
        }

        cursor = m.end;
      }

      if (cursor < value.length) {
        children.push({ type: 'text', value: value.slice(cursor) });
      }

      parent.children.splice(index, 1, ...children);
    });
  };
}
