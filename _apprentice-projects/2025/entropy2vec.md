---
batch: 2025
order: 2
title: "Entropy2Vec: Crosslingual Language Modeling Entropy as End-to-End Learnable Language Representations"
summary: "Learning language embeddings from model entropy to recover typological structure."
mentees:
  - name: "Patrick Amadeus Irawan"
  - name: "Ryandito Diandaru"
  - name: "Belati Jagad Bintang Syuhada"
  - name: "Randy Zakya Suchrady"
mentors:
  - name: "Alham Fikri Aji"
  - name: "Genta Indra Winata"
  - name: "Fajri Koto"
  - name: "Samuel Cahyawijaya"
links:
  - label: "Read paper (MRL 2025)"
    url: "https://aclanthology.org/2025.mrl-main.29/"
  - label: "MRL 2025 workshop"
    url: "https://sigtyp.github.io/ws2025-mrl.html"
---

#### The problem

Linguistic typology is traditionally built from manual documentation and expert analysis.

LLMs, however, learn language behavior at scale. We asked whether internal language knowledge in LLMs can reflect typological relationships similar to those in resources like Ethnologue and Glottolog.

#### The approach

The team extracted language representations from cross-lingual language modeling entropy across monolingual language models.

They built Entropy2Vec, a language embedding space where distances between vectors align with typological structure, using model prediction patterns rather than handcrafted linguistic features.

#### Why this matters

The learned embeddings can recover typological structure and help regularize fine-tuning to improve transfer to unseen languages.

For SEA languages, this opens opportunities to reuse existing models to infer structure and improve generalization with limited data.
