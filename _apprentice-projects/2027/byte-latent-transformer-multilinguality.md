---
batch: 2027
order: 3
title: "How is language/multilinguality represented in Byte Latent Transformer?"
summary: "Probing what latent patches in Byte Latent Transformers encode, and whether byte-level models build more language-agnostic linguistic hierarchies."
timezone: "UTC-5 / UTC+8"
tags:
  - "Mechanistic interpretability"
  - "Multilingual NLP"
mentors:
  - name: "Ruochen Zhang"
  - name: "Frederikus Hudi"
activities:
  - "Understand how Byte Latent Transformers work"
  - "Learn interpretability techniques, from early ones like probes to recent mechanistic interpretability techniques like patching"
  - "Some linguistics knowledge is good to have"
requirements:
  - "Python and PyTorch, comfort with linear algebra"
  - "Some prior interpretability knowledge or tinkering with LLM architecture is a plus"
  - "Interest in linguistics"
publications:
  - title: "Byte Latent Transformer: Patches Scale Better Than Tokens"
    url: "https://arxiv.org/abs/2412.09871"
  - title: "Equity with Efficiency: An Empirical Study of Tokenizers for Multilingual Large Language Models"
    url: "https://arxiv.org/abs/2606.15044"
  - title: "MrT5: Dynamic Token Merging for Efficient Byte-level Language Models"
    url: "https://arxiv.org/abs/2410.20771"
---

Most language models rely on tokenizers that often represent low-resource languages with many rare or poorly trained subword tokens. Byte-level models such as the Byte Latent Transformer instead operate on bytes and dynamically group them into latent patches, avoiding a fixed vocabulary and potentially providing more uniform multilingual representations.

This project asks how linguistic structure emerges without predefined token boundaries. We first study what patch representations encode,whether they correspond to characters, morphemes, words, or other units; and then trace whether this is higher-level linguistic abstractions such as syntax and semantics emerge across layers. Ultimately, we aim to understand whether byte-level models reconstruct token-like representations internally or develop a different, potentially more language-agnostic hierarchy of linguistic representations.
