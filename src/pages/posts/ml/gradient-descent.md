---
title: '梯度下降优化'
layout: ../../../layouts/MarkdownPostLayout.astro
pubDate: 2026-05-08
description: '从 SGD 到 Adam：梯度下降算法的演进与数学原理。'
author: 'zyssnh'
tags: ["机器学习", "优化"]
links: ["微积分入门", "线性代数基础", "机器学习概述"]
---

## 优化目标

机器学习训练可归结为**参数优化**问题：

$$\theta^* = \arg\min_\theta L(\theta)$$

### SGD 与变体

| 优化器 | 更新规则 | 特点 |
|--------|---------|------|
| SGD | $\theta \leftarrow \theta - \eta \nabla L$ | 基础 |
| Momentum | $v \leftarrow \beta v + \eta \nabla L$ | 加速 |
| Adam | 自适应学习率 | 最常用 |

```python
# Adam 优化器的简化实现
def adam_update(param, grad, m, v, t, lr=0.001):
    m = 0.9 * m + 0.1 * grad
    v = 0.999 * v + 0.001 * grad**2
    m_hat = m / (1 - 0.9**t)
    v_hat = v / (1 - 0.999**t)
    return param - lr * m_hat / (v_hat**0.5 + 1e-8), m, v
```

[[微积分入门]] 提供了梯度计算的数学基础。[[线性代数基础]] 在处理多维参数空间时不可或缺。

这些优化方法直接应用于[[机器学习概述]]中的各类模型训练。
