---
title: '线性代数基础'
layout: ../../../layouts/MarkdownPostLayout.astro
pubDate: 2026-03-10
description: '向量空间、矩阵运算与特征值分解的核心概念。'
author: 'zyssnh'
tags: ["数学", "线性代数"]
links: ["微积分入门", "概率论基础", "梯度下降优化"]
---

## 向量空间

向量空间是线性代数的**核心抽象**。一个向量空间 $V$ 是满足以下公理的集合：

1. 加法封闭：$\forall u, v \in V: u + v \in V$
2. 标量乘法封闭：$\forall \alpha \in \mathbb{R}, v \in V: \alpha v \in V$

### 矩阵乘法

矩阵乘法 $C = AB$ 定义为：

$$c_{ij} = \sum_{k=1}^{n} a_{ik} \cdot b_{kj}$$

```python
import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = A @ B  # 矩阵乘法
print(C)   # [[19 22] [43 50]]
```

### 特征值分解

方阵 $A$ 的特征值 $\lambda$ 和特征向量 $v$ 满足 $Av = \lambda v$。

特征值分解在[[梯度下降优化]]中用于分析 Hessian 矩阵的条件数，直接影响优化算法的收敛速度。[[微积分入门]]提供了理解梯度和导数的基础。
