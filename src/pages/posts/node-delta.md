---
title: '节点 Delta'
layout: ../../layouts/MarkdownPostLayout.astro
pubDate: 2026-05-24
description: '双链网络的 Delta 节点 —— 输出终端。'
tags: ["双链", "输出"]
links: ["中枢节点", "节点 Beta", "节点 Gamma"]
---

## 节点 Delta — 输出终端

Delta 是网络的**最终输出层**，将计算结果呈现给用户。

### 输出格式

- **JSON** — API 响应
- **HTML** — 渲染页面
- **二进制** — 文件下载

### 输入来源

Delta 接收来自两个方向的数据：
- [[节点 Beta]] 的计算结果
- [[节点 Gamma]] 的存储数据

> "Delta 不做计算，只做呈现。" — 网络设计原则

最后，回到[[中枢节点]]查看网络的完整面貌。
