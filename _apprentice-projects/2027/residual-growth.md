---
batch: 2027
order: 8
title: "Residual Growth: Boosting LLMs to Their Limit with Hard Learnable Samples"
summary: "Boosting-inspired residual learning: grow an LLM by training new parameters on what it has not yet learned, and merge them back."
timezone: "UTC+0 / UTC+8"
tags:
  - "Training"
mentors:
  - name: "Adhiguna Kuncoro"
  - name: "Patomporn Payoungkhamdee"
  - name: "Pume Tuchinda"
---

Residual learning and continual pretraining. In this project, we borrow the key insights from boosting, which performs very well in tabular domains and Kaggle. The key idea is really simple: We "grow" a model by looking at what the previous collection of LLMs has _not_ yet learnt well. We then train new parameters, either by "forking" a copy of the current model parameters and doing full model fine-tuning on these still-difficult examples, or by doing PEFT methods like LoRA. Two key research questions: (i) How do we identify _difficult but learnable_ data points? Relying on high loss alone might steer us to focus on difficult but _unlearnable_ examples. (ii) How do we "merge back" these different parameters / PEFT weights back into a single model? To that end, we could do souping / model merging in parameter space, or alternatively, we could use a router, or we could distill this boosting model into a single MoE student model.
