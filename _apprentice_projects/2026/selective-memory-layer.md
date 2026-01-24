---
batch: 2026
order: 4
title: "Selective Memory Layer Finetuning"
summary: "Explore memory-layer finetuning strategies to improve continual learning without catastrophic forgetting."
---

We tackle continual learning from an architectural perspective. Instead of LoRA, whose parameters grow with the number of tasks or languages, we explore memory layers where the model can store or learn context by injecting key-value information during inference.

A major issue is brittleness against gradient collapse or catastrophic forgetting during key-value injection. Recent work explores sparse finetuning for memory layers, but it is still unclear which memory-layer components should be tuned to mitigate forgetting.

We will test this empirically by systematically finetuning different components to improve stability and retention. The goal is to make memory-based continual learning both efficient and robust.

**Relevant publications:**

- Empirical Study on Updating Key-Value Memories in Transformer Feed-Forward Layers
- Memory Layers at Scale | Research - AI at Meta
- Continual Learning via Sparse Memory Finetuning
