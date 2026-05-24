---
title: '数据结构导论'
layout: ../../../layouts/MarkdownPostLayout.astro
pubDate: 2026-04-12
description: '数组、链表、树与哈希表的底层原理与使用场景。'
author: 'zyssnh'
tags: ["计算机", "数据结构"]
links: ["算法设计基础", "Transformer 架构解析"]
---

## 基本数据结构

### 数组 vs 链表

| 操作 | 数组 | 链表 |
|------|------|------|
| 随机访问 | $O(1)$ | $O(n)$ |
| 插入/删除 | $O(n)$ | $O(1)$ |
| 缓存友好 | 是 | 否 |

### 哈希表

哈希表通过**哈希函数**将键映射到桶：

$$\text{index} = h(\text{key}) \bmod m$$

冲突解决策略：
1. 链地址法（Chaining）
2. 开放寻址（Open Addressing）

### 树结构

二叉树、B 树和 Trie 在[[算法设计基础]]中有详细的搜索复杂度分析。

在[[Transformer 架构解析]]中，注意力矩阵的计算依赖高效的数据结构来存储和检索大规模嵌入向量。
