---
batch: 2025
order: 1
title: "Language Surgery in Multilingual Large Language Models"
summary: "A technique for controlling language use in multilingual LLMs without retraining."
mentees:
  - name: "Joanito Agili Lopo"
  - name: "Muhammad Ravi Shulthan Habibi"
  - name: "Tack Hwa Wong"
mentors:
  - name: "Samuel Cahyawijaya"
  - name: "Genta Indra Winata"
  - name: "Fajri Koto"
  - name: "Peerat Limkonchotiwat"
  - name: "Alham Fikri Aji"
links:
  - label: "Read paper (MRL 2025)"
    url: "https://aclanthology.org/2025.mrl-main.30/"
  - label: "MRL 2025 workshop"
    url: "https://sigtyp.github.io/ws2025-mrl.html"
---

#### The problem

Multilingual LLMs can drift into the wrong language or mix languages, especially when prompted in under-resourced languages.

We wanted to understand:

- How multilingual LLMs organize languages internally
- Whether we can steer which language the model generates without retraining

#### The approach

The team studied how multilingual LLMs organize languages in their latent space and how representations shift across languages.

They developed Inference-Time Language Control (ITLC), a method for nudging models toward more consistent language outputs without retraining.

#### Why this matters

Low-resource languages often see less stable outputs, more language switching, and lower quality.

ITLC offers a practical way to improve behavior in underrepresented languages while helping us understand how languages are arranged inside these models.
