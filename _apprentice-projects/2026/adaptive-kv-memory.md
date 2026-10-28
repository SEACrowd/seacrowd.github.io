---
batch: 2026
order: 4
title: "Adaptive KV Memory for Continual Learning and Long Reasoning"
venue: "CBW @ COLM 2026"
summary: "Two workstreams on adaptive KV cache memory: gating compressed memories for continual learning, and online KV cache compaction for long reasoning."
mentors:
  - name: "Alham Fikri Aji"
  - name: "Farid Adilazuarda"
  - name: "M. Reza Qorib"
mentees:
  - name: "Faeyza Rishad Ardi"
  - name: "Izaaz Inhar"
  - name: "Phudish Prateepamornkul"
  - name: "Quang Minh Nguyen"
  - name: "Tri Q. Vo"
---

Long-context inference and long reasoning are expensive because the key-value (KV) cache grows with sequence length. This project studies how to keep KV memory small while it stays useful, in two workstreams. Both papers were accepted at the COLM 2026 Workshop on Context Beyond the Window.

## Workstream 1: Gating compressed KV memory

Compressed memories such as Cartridges distill a long context into a small, trainable KV cache. Real deployments, however, see new corpora arrive continually, and a memory with a fixed budget must absorb each one while retaining what it already holds.

This workstream studies gating mechanisms that govern what enters a compressed memory and where it is stored: a statistical TF-IDF gate that updates only the slots a new corpus attends to, and a learned mixture-of-experts gate that routes each query to a small subset of expert sub-caches. Gated memories improve both forgetting and acquisition over a dense baseline of equal capacity, and routing helps mainly by limiting which parts of the cache can change during an update.

**Team:** Quang Minh Nguyen, Phudish Prateepamornkul, Tri Q. Vo.

## Workstream 2: Adaptive online KV cache compaction

Long Chain-of-Thought reasoning makes KV cache growth a severe memory and latency bottleneck, and existing learnable cache compressions are typically offline with rigid, uniform compression ratios.

This workstream proposes an online compaction method that combines token merging with learnable token dropping. It extends the STILL compactor with Gumbel-Sigmoid gating to prune unimportant latent tokens from a dense, merged initialization, which allows heterogeneous cache allocation across layers and heads. On Qwen3-1.7B it outperforms vanilla STILL and DMS on AIME 26 and HMMT-Feb 26, reduces peak KV payload by about 83%, and improves throughput by more than 22% over vanilla STILL.

**Team:** Izaaz Inhar, Faeyza Rishad Ardi.

**Relevant publications:**

- Empirical Study on Updating Key-Value Memories in Transformer Feed-Forward Layers
- [Memory Layers at Scale](https://arxiv.org/abs/2412.09764)
- Continual Learning via Sparse Memory Finetuning
