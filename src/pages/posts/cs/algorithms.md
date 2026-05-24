---
title: '算法设计基础'
layout: ../../../layouts/MarkdownPostLayout.astro
pubDate: 2026-04-05
description: '排序、搜索与动态规划等经典算法思想。'
author: 'zyssnh'
tags: ["计算机", "算法"]
links: ["数据结构导论", "机器学习概述"]
---

## 复杂度分析

算法效率用大 $O$ 符号表示：

| 复杂度 | 示例 | 说明 |
|--------|------|------|
| $O(1)$ | 哈希查找 | 常量时间 |
| $O(n \log n)$ | 归并排序 | 线性对数 |
| $O(n^2)$ | 冒泡排序 | 平方时间 |
| $O(2^n)$ | 穷举搜索 | 指数时间 |

### 动态规划

动态规划通过**子问题重用**避免重复计算：

```python
def fibonacci(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]
```

动态规划思想在[[机器学习概述]]中的强化学习领域广泛应用（Bellman 方程）。

[[数据结构导论]]为算法提供了高效的数据组织方式。
