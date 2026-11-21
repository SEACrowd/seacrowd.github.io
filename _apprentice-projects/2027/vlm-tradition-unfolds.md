---
batch: 2027
order: 2
title: "Do VLMs Follow a Tradition as It Unfolds?"
summary: "Do VLMs know, see, and locate where a Southeast Asian tradition is in a video? A diagnostic question set on top of the Cultural Moment Benchmark."
timezone: "UTC-5 / UTC+8"
tags:
  - "Multimodal"
  - "Culture"
  - "Evaluation & benchmarks"
mentors:
  - name: "Burak Satar"
  - name: "Hitesh Laxmichand Patel"
activities:
  - "Write one documented fact per tradition with a native annotator, and mark two moments in the clip: before and after the answer changes."
  - "At each moment, write a main question and three helpers (knowing, seeing, locating)."
  - "Run VLMs with and without hints; score the short answers with an LLM judge."
  - "Label failures (knowing, seeing, locating, combining), count frozen answers, and run controls."
requirements:
  - "**Basic:** Python, running video models through Hugging Face or an API, careful annotation work"
  - "**Helpful:** native knowledge of a Southeast Asian wedding or celebration, LLM-as-judge evaluation, agreement statistics, paired tests"
publications:
  - title: "Seeing Culture Benchmark"
    url: "https://aclanthology.org/2025.emnlp-main.1131/"
  - title: "Cultural Moment Benchmark: Evaluating Video Cultural Reasoning and Grounding in Southeast Asia (CMB)"
    url: "https://arxiv.org/abs/2608.23065"
  - title: "CulturalVQA"
    url: "https://aclanthology.org/2024.emnlp-main.329"
  - title: "Seeing the Arrow of Time in Large Multimodal Models"
    url: "https://arxiv.org/abs/2506.03340"
  - title: "Once Correct, Still Wrong: Counterfactual Hallucination in Multilingual Vision-Language Models (M2CQA)"
    url: "https://aclanthology.org/2026.findings-acl.234/"
---

In many Malay Muslim weddings, the bride waits in another room while her guardian (wali) and the groom complete the marriage contract (ijab kabul), and joins once it is sealed. To answer “where is the bride?” during the contract, a model must know this fact, see who is in the room, and know where the video is in the ceremony. A model that only reads the picture points at the nearest woman. Existing benchmarks ask about what is visible, what a concept means, or the order of everyday events, so none can tell which of these a model lacks. We add a small question set to CMB’s videos. For each tradition, a native annotator writes one documented fact about one step and marks two moments in the clip: before and after the answer changes. At each moment, we ask a main question and three helpers: a knowing question with no video, a seeing question about what is visible, and a locating question on the clip so far. Two hinted versions, giving the model either the step or the fact, show which missing piece actually fixes the answer. Models answer in a few words, and a judge scores them. We ask which of knowing, seeing and locating fails first, and whether answers stay frozen when the moment changes.
