---
batch: 2027
order: 7
title: "Predicting LLM Performance for Cost-Aware Model Selection"
summary: "Predicting quality, latency, and cost across a model-by-task grid to route each request to the cheapest LLM that meets a quality bar."
timezone: "UTC+4"
tags:
  - "Efficiency"
  - "Evaluation & benchmarks"
  - "Multilingual NLP"
mentors:
  - name: "Fajri Koto"
  - name: "Muhammad Dehan Al Kautsar"
activities:
  - "Build an eval harness that tests 4–6 LLMs across 2–3 tasks and measures cost, latency, and quality"
  - "Build a performance-prediction and cascade-routing strategy that cuts cost while holding quality"
  - "**Extension:** repeat across 3+ languages of varying resource levels to test generalization"
requirements:
  - "Python and API basics"
  - "Intro ML/NLP (tokenization, F1/accuracy)"
  - "Some LLM prompting experience"
publications:
  - title: "FrugalGPT"
    url: "https://arxiv.org/abs/2305.05176"
  - title: "RouteLLM"
    url: "https://arxiv.org/abs/2406.18665"
  - title: "Do All Languages Cost the Same?"
    url: "https://arxiv.org/abs/2305.13707"
---

With many LLMs now available at different prices and capabilities, choosing the right model per request is a growing cost problem. Standard benchmarks report aggregate scores that don't reflect how quality and cost shift across task types, making it hard to predict which model is worth its price for a given use case. We propose a performance prediction framework that evaluates models across a (model × task) grid using small proxy sets, tracking quality, latency, and token cost. Building on this, we will develop a lightweight routing strategy that uses performance prediction to select the cheapest model meeting a quality threshold, cascading to larger models only when needed. As an extension, we will examine whether these predictions hold across languages, testing the hypothesis that multilingual cost and quality do not scale directly from English performance due to differences in tokenization overhead and language resource level. The expected outcome is a practical, cost-reducing model-selection method that generalizes across tasks and, potentially, across languages.
