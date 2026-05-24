---
title: 'Transformer 架构解析'
layout: ../../../layouts/MarkdownPostLayout.astro
pubDate: 2026-05-20
description: '深入理解 Self-Attention、Multi-Head Attention 与位置编码。'
author: 'zyssnh'
tags: ["语言模型", "深度学习"]
links: ["机器学习概述", "线性代数基础", "概率论基础"]
---

## Self-Attention 机制

Transformer 的核心是**缩放点积注意力**：

$$\text{Attention}(Q, K, V) = \text{softmax}\left( \frac{QK^T}{\sqrt{d_k}} \right) V$$

### Multi-Head Attention

多头注意力将查询、键、值投影到 $h$ 个子空间：

$$\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \ldots, \text{head}_h) W^O$$

其中 $\text{head}_i = \text{Attention}(QW_i^Q, KW_i^K, VW_i^V)$

```python
import torch.nn as nn

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, n_heads):
        super().__init__()
        self.d_k = d_model // n_heads
        self.n_heads = n_heads
        self.q_linear = nn.Linear(d_model, d_model)
        self.k_linear = nn.Linear(d_model, d_model)
        self.v_linear = nn.Linear(d_model, d_model)
        self.out = nn.Linear(d_model, d_model)
```

### 位置编码

Transformer 使用正弦位置编码注入序列信息：

$$PE_{(pos, 2i)} = \sin\left( \frac{pos}{10000^{2i/d_{model}}} \right)$$
$$PE_{(pos, 2i+1)} = \cos\left( \frac{pos}{10000^{2i/d_{model}}} \right)$$

理解 Self-Attention 需要[[线性代数基础]]中的矩阵乘法知识。[[概率论基础]]支撑了 softmax 归一化的理论基础。

Transformer 是[[机器学习概述]]中深度学习范式的里程碑式架构。
