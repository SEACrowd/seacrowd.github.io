---
batch: 2027
order: 9
title: "What is your language model thinking right before it says the wrong thing?"
summary: "Finding and intervening on the internal circuits behind safety, honorific, and honesty behaviors with probes, steering, and activation patching."
timezone: "UTC-8 / UTC+7 / UTC+8"
tags:
  - "Mechanistic interpretability"
  - "Safety & security"
  - "Multilingual NLP"
mentors:
  - name: "Derry Wijaya"
  - name: "Burak Satar"
  - name: "David Anugraha"
activities:
  - "Find circuits responsible for certain tasks using probing, activation patching, and other mechanistic interpretability techniques"
  - "Intervene on the discovered circuits to observe the effects"
requirements:
  - "Python and PyTorch, comfort with linear algebra"
  - "Experience with TransformerLens is a plus"
  - "Experience in evaluation"
publications:
  - title: "Beyond Transfer Accuracy: Mechanism-Guided Controlled Adaptation for Low-Resource Languages"
    url: "https://arxiv.org/abs/2601.08146"
  - title: "Do Language Models Track Entities Across State Changes?"
    url: "https://arxiv.org/abs/2605.30233"
  - title: "Do Language Models Understand Honorific Systems in Javanese?"
    url: "https://aclanthology.org/2025.acl-long.1296/"
  - title: "Low-Resource Safety Failures Are Action Failures, Not Representation Failures"
    url: "https://arxiv.org/abs/2606.01196"
---

Inside an LLM there is often a measurable gap between what the model internally represents and what it actually says: simple probes can detect that a request is harmful, that the model is uncertain, or that a polite register is called for: even while the output ignores all three. Our recent work on faithful circuits for low-resource adaptation showed that such internal mechanisms can be located, tested, and transferred across languages (Findings of EMNLP 2026). This project is the next step: finding the mechanism behind a behavior and intervening on it directly, using probes, steering vectors, and activation patching on open models in one of three tracks: safety, honorifics, and honesty.
