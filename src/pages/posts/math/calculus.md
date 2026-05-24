---
title: '微积分入门'
layout: ../../../layouts/MarkdownPostLayout.astro
pubDate: 2026-03-15
description: '极限、导数与积分的基本概念及其在优化中的应用。'
author: 'zyssnh'
tags: ["数学", "微积分"]
links: ["线性代数基础", "梯度下降优化"]
---

## 极限与连续性

函数 $f(x)$ 在 $x \to a$ 时的极限定义为：

$$\lim_{x \to a} f(x) = L$$

如果对任意 $\epsilon > 0$，存在 $\delta > 0$ 使得 $0 < |x-a| < \delta$ 蕴含 $|f(x) - L| < \epsilon$。

### 导数

导数是函数变化率的度量：

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

### 在机器学习中的应用

[[梯度下降优化]] 算法直接依赖偏导数计算损失函数的梯度。多元函数的梯度向量由偏导数组成：

$$\nabla f = \left[ \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \ldots, \frac{\partial f}{\partial x_n} \right]^T$$

[[线性代数基础]] 中的矩阵运算为高效计算大规模梯度提供了工具。
