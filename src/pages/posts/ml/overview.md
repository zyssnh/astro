---
title: '机器学习概述'
layout: ../../../layouts/MarkdownPostLayout.astro
pubDate: 2026-05-01
description: '监督学习、无监督学习与强化学习的核心范式。'
author: 'zyssnh'
tags: ["机器学习", "基础"]
links: ["梯度下降优化", "线性代数基础", "Transformer 架构解析"]
---

## 三大范式

### 监督学习

给定带标签的数据集 $\{ (x_i, y_i) \}_{i=1}^n$，学习映射 $f: X \to Y$：

$$\hat{y} = f(x; \theta)$$

损失函数衡量预测误差：$L(\theta) = \frac{1}{n} \sum_{i=1}^{n} \ell(\hat{y}_i, y_i)$

### 无监督学习

无标签数据中**发现隐藏结构**：
- 聚类（K-Means、DBSCAN）
- 降维（PCA、t-SNE）
- 密度估计

### 强化学习

智能体通过与环境交互学习最优策略 $\pi^*$。

[[梯度下降优化]] 是训练神经网络的核心优化方法。[[线性代数基础]] 为理解数据变换和模型参数提供了数学基础。

大型语言模型（见[[Transformer 架构解析]]）代表了监督学习的当前前沿。
