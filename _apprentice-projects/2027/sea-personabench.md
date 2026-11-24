---
batch: 2027
order: 1
title: "SEA-PersonaBench: A Multilingual Benchmark for Human-Grounded Social Media Personas in Southeast Asia"
summary: "Benchmark whether LLM personas grounded in real Southeast Asian social media users reproduce the diversity of opinions in a community."
timezone: "UTC+8"
tags:
  - "Social media"
  - "Multilingual NLP"
  - "Evaluation & benchmarks"
mentors:
  - name: "Lynnette Hui Xian Ng"
  - name: "Peerat Limkonchotiwat"
activities:
  - "Curating, organizing and annotating multi-lingual and code-switched social media posts"
  - "Build cross-language similarity and coordination benchmarks"
  - "Analyze model errors across languages and types of coordinating evidence"
requirements:
  - "Comfort with Python"
  - "Comfort and some prior knowledge of graph networks (or network science), linguistics, and reinforcement learning"
  - "If none of these apply but you are interested, you are still welcome to apply!"
publications:
  - title: "SurveyToPersona (Survey2Persona: Rendering Survey Responses as Personas)"
    url: "https://dl.acm.org/doi/abs/10.1145/3511047.3536403"
  - title: "LAND model (Modeling Social Dynamics with an LLM-Enabled Agent Based Network-Dynamic Model)"
    url: "https://arxiv.org/abs/2608.00929"
  - title: "AuraSight: Generating Realistic Social Media Data"
    url: "https://arxiv.org/abs/2509.08927"
---

Can AI agents reproduce the diversity of opinions expressed by real social media users? We study this in Southeast Asia (SEA), where users switch languages mid-sentence, draw on local references, and split along language and community lines on shared issues such as transboundary haze.

LLM personas are usually built from hand-written or survey attributes. Evaluations check whether one agent stays in character, not whether a population preserves a real community's range of views. We propose SEA-PersonaBench, which grounds personas in observed behavior. Native-speaker annotators label posts from about 700 public users in seven language groups, in the original language, for observable traits, discussion topics, and expressed stances.

We compare four persona methods, from a frequency baseline to distribution-steered sampling, on individual fidelity against held-out posts and population fidelity against observed stance distributions. Native-speaker raters assess outputs, and we calibrate LLM judges against them, scaling only where agreement is sufficient.

We will openly release the framework, annotation guide, permitted benchmark artifacts, calibrated judges, and code. User-level records require explicit redistribution authorization.
