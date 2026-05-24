---
title: '节点 Beta'
layout: ../../layouts/MarkdownPostLayout.astro
pubDate: 2026-05-22
description: '双链网络的 Beta 节点 —— 计算引擎。'
tags: ["双链", "计算"]
links: ["中枢节点", "节点 Alpha", "节点 Delta"]
---

## 节点 Beta — 计算引擎

Beta 是网络的**核心计算单元**，执行所有数据处理任务。

### 计算流程

1. 从 [[节点 Alpha]] 接收数据
2. 执行矩阵运算
3. 结果推送到 [[节点 Delta]]

```python
# Beta 节点核心算法
def process(data):
    result = matrix_multiply(data, weights)
    return activate(result)
```

Beta 与 Alpha 和 Delta 都保持双向连接，形成冗余链路。

返回[[中枢节点]]查看网络全景。
