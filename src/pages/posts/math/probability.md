---
title: '概率论基础'
layout: ../../../layouts/MarkdownPostLayout.astro
pubDate: 2026-05-25
description: '概率分布、贝叶斯定理与信息论基础。'
author: 'zyssnh'
tags: ["数学", "概率"]
links: ["线性代数基础", "机器学习概述", "Transformer 架构解析"]
---

## 概率公理

1. 非负性：$P(A) \geq 0$
2. 规范性：$P(\Omega) = 1$
3. 可列可加性：互斥事件的概率可加

### 贝叶斯定理

$$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$

这是整个贝叶斯机器学习的**基石**。

### 信息论

- **熵**：$H(X) = -\sum_x P(x) \log P(x)$
- **交叉熵**：$H(P, Q) = -\sum_x P(x) \log Q(x)$
- **KL 散度**：$D_{KL}(P \| Q) = \sum_x P(x) \log \frac{P(x)}{Q(x)}$

这些概念在[[机器学习概述]]的损失函数设计中至关重要。

在[[Transformer 架构解析]]中，softmax 函数的输出可解释为概率分布，其训练目标通常是最小化交叉熵损失。

[[线性代数基础]] 提供了处理多维概率分布所需的矩阵工具。
