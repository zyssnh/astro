---
title: '节点 Alpha'
layout: ../../layouts/MarkdownPostLayout.astro
pubDate: 2026-05-21
description: '双链网络的 Alpha 节点 —— 入口网关。'
tags: ["双链", "入口"]
links: ["中枢节点", "节点 Beta", "节点 Gamma"]
---

## 节点 Alpha — 入口网关

Alpha 是网络的**第一道入口**，负责将流量分发到下游节点。

### 职责

- 接收外部请求
- 验证数据完整性
- 分发到 [[节点 Beta]] 或 [[节点 Gamma]]

### 连接

Alpha 不直接连接 [[节点 Delta]]，必须通过 Beta 或 Gamma 中转。

回到[[中枢节点]]查看完整拓扑。
