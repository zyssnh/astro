/** Build a link graph from all markdown posts */
export interface PostNode {
  id: string;
  title: string;
  url: string;
  tags: string[];
  links: string[];
  pubDate: string;
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: PostNode[];
  links: GraphLink[];
}

export function buildGraph(allPosts: any[]): GraphData {
  const nodes: PostNode[] = [];
  const slugToId = new Map<string, string>();

  allPosts.forEach((post: any) => {
    const fm = post.frontmatter;
    const url: string = post.url || '';
    const slug = url.split('/').filter(Boolean).pop() || url;
    const id = fm.title || slug;

    slugToId.set(slug, id);

    nodes.push({
      id,
      title: fm.title || slug,
      url,
      tags: fm.tags || [],
      links: fm.links || [],
      pubDate: fm.pubDate || '',
    });
  });

  // Resolve link targets: [[target-slug]] → node id
  const links: GraphLink[] = [];
  const nodeIds = new Set(nodes.map((n) => n.id));

  nodes.forEach((node) => {
    node.links.forEach((target) => {
      // Try to resolve by id first, then by slug
      const resolved = nodeIds.has(target)
        ? target
        : slugToId.get(target);
      if (resolved && nodeIds.has(resolved)) {
        links.push({ source: node.id, target: resolved });
      }
    });
  });

  return { nodes, links };
}

/** Find all posts that link TO the given post */
export function getBacklinks(
  graph: GraphData,
  currentNodeId: string,
): PostNode[] {
  const sourceIds = new Set(
    graph.links
      .filter((l) => l.target === currentNodeId)
      .map((l) => l.source),
  );
  return graph.nodes.filter((n) => sourceIds.has(n.id));
}
