---
title: '节点 Gamma'
layout: ../../layouts/MarkdownPostLayout.astro
pubDate: 2026-05-23
description: '双链网络的 Gamma 节点 —— 存储层。'
tags: ["双链", "存储"]
links: ["中枢节点", "节点 Alpha", "节点 Delta"]
---

## 节点 Gamma — 存储层

Gamma 是网络的**持久化存储**，保存所有状态和数据。

### 存储架构

| 类型 | 延迟 | 用途 |
|------|------|------|
| 内存缓存 | < 1ms | 热数据 |
| SSD | ~0.1ms | 温数据 |
| 归档 | > 10ms | 冷数据 |

### 数据流

[[节点 Alpha]] 写入 → Gamma 持久化 → [[节点 Delta]] 读取

与 [[节点 Beta]] 不同，Gamma 专注于 **I/O 吞吐量**而非计算密度。

回到[[中枢节点]]查看完整拓扑。
