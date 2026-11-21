---
batch: 2027
order: 5
title: "Multilingual Whispers: Generating Natural Translation through Multilingual Paraphrases"
summary: "Can multilingual paraphrasing produce more natural translations than direct LLM translation? A controlled comparison with native-speaker evaluation."
timezone: "UTC+0"
tags:
  - "Machine translation"
  - "Multilingual NLP"
mentors:
  - name: "Samuel Cahyawijaya"
  - name: "Clara Vania"
activities:
  - "LLM Inference for Machine Translation & Multilingual Paraphrase"
  - "Designing and running a rigorous experiment to compare the two methods"
  - "Conduct human evaluation to ensure human alignment to the native speakers"
requirements:
  - "Basic programming"
  - "Basic knowledge about NLP / AI / LLM"
  - "Experience and passion for multilingual NLP research"
publications:
  - title: "Paraphrases as Foreign Languages in Multilingual Neural Machine Translation"
    url: "https://aclanthology.org/P19-2015.pdf"
  - title: "Multilingual Whispers: Generating Paraphrases with Translation"
    url: "https://aclanthology.org/D19-5503.pdf"
---

Machine Translation has been the go to method for transforming data into a target language. However it often leads to translationese content which does not demonstrate a good quality sentence/document in the target language. Prior works showcase that paraphrasing can be used to produces diverse multilingual translation data which improves the quality of the produced output sentences/documents. In the era of LLM, such machine translation and multilingual paraphrasing tasks can simply be accomplished through prompting, e.g., "You are a professional translator. Please translate the following sentence into language {lang} while preserving the naturalness and semantic meaning: {sentence}" and "You are a native speaker for language {lang}. Please naturally paraphrase the following sentence in your own language while preserving the meaning: {sentence}". In this work, we want to analyze and understand whether translation through multilingual paraphrasing can really be a tool for improving the translation quality.
