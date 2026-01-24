---
layout: post
title: "Growing SEA-Native AI Research Talent: Retrospective on the SEACrowd Apprentice Program 2024–25"
date: 2025-12-03
description: "What we learned from running the first SEACrowd Apprentice Program cohort, and how we're improving for Batch 2026."
tags: [apprenticeship, restropection]
featured: true
authors: [Samuel Cahyawijaya]
thumbnail: retrospective-review.png
projects:
  - title: "Project 1: Language Surgery in Multilingual Large Language Models"
    content: |
      👥 **Mentees:** Joanito Agili Lopo, Muhammad Ravi Shulthan Habibi, Tack Hwa Wong

      → [Read paper, published at MRL 2025](https://aclanthology.org/2025.mrl-main.30/)

      #### The problem

      Multilingual LLMs support many languages, but anyone who's tried prompting them in under-resourced languages has probably seen this:

      You prompt in one language. The model partly responds in another (often English), drifts into mixed-language output, or drops in quality compared to high-resource languages like English or Chinese.

      So, we wanted to understand:

      - How do multilingual LLMs organize languages internally?
      - Can we influence which language they "think in" or generate at inference time without retraining the model?

      #### The approach

      The team studied how multilingual LLMs organize languages in their latent space (the internal continuous representation). Specifically, they looked at how representations shift when the model handles different languages, and how those representations relate across languages.

      They developed **Inference-Time Language Control (ITLC)**, a method for nudging models to produce more consistent language outputs from cross-lingual prompts, _without_ retraining.

      #### Why this matters

      Low-resource languages often get 1) less stable outputs, 2) higher rates of language switching, and 3) lower average quality.

      ITLC offers a way to get more stable behavior in underrepresented languages using existing models where retraining is expensive or impractical. It also helps us understand how languages are arranged inside these models.
  - title: "Project 2: Entropy2Vec — Crosslingual Language Modeling Entropy"
    content: |
      👥 **Mentees:** Patrick Amadeus Irawan, Ryandito Diandaru, Belati Jagad Bintang Syuhada, Randy Zakya Suchrady

      → [Read paper, published at MRL 2025](https://aclanthology.org/2025.mrl-main.29/)

      #### The problem

      Linguistic typology—mapping how languages relate to each other—has traditionally come from decades of manual documentation, linguistic expertise, or resources like [Ethnologue](https://www.ethnologue.com/) and [Glottolog](https://glottolog.org/)).

      Modern LLMs, meanwhile, have learned behavior across many languages through large-scale training with rich, internal knowledge about which tokens are likely in which contexts.

      Given the ability of LLMs to learn multiple languages through the large-scale training, we believe that this knowledge could provide a fine-grained representation that captures the dynamic across different languages as we know in linguistic typology. But **can the internal language knowledge of LLMs can actually reflect the linguistic typological relationships similar to those in Ethnologue and Glottolog?**

      #### The approach

      The team extracted language representations from cross-lingual language modeling **entropy** collected from a diverse set of monolingual language models (LMs). Entropy is a measure of how unexpected the next token is, according to the model; if a model shows similar prediction patterns in two languages, those languages might be structurally similar.

      They built **Entropy2Vec**, a language embedding where each language is a continuous vector in a latent space, and distances between vectors match linguistic typology relationships. Instead of understanding low-level handcrafted features like word order, syntax, or morphological complexity, they used the model's own internal knowledge (i.e., how it predicts next tokens) to recover typological structure.

      #### Why this matters

      The learned language vectors mimic typological structure (i.e., languages that are close in the typology tree end up close in the embedding space) and can regularize fine-tuning to improve adaptability to unseen languages.

      For multilingual research in SEA, where many languages are under-documented, this line of work opens the door to:

      - reusing existing models to infer structural relationships
      - inform better transfer learning strategies
      - helping models generalize better to languages with very little data
  - title: "Project 3: SEADialogues — Culturally Grounded Dialogue Dataset"
    content: |
      👥 **Mentees:** Muhammad Dehan Al Kautsar, Aswin Candra, Muhammad Alif Al Hakim, Maxalmina Satria Kahfi

      → [View dataset on HuggingFace](https://huggingface.co/datasets/SEACrowd/SEADialogues) && [Read paper](https://arxiv.org/abs/2508.07069)

      #### The problem

      Even as LLMs improve, underrepresented languages perform worse and frequently fail to align with local norms, values, and expectations in multi-turn conversations.

      #### The approach

      The team built a culturally grounded, multi-turn dialogue dataset for SEA languages. They collected, curated, and annotated conversations that reflect real cultural practices—local forms of politeness, family structures, community dynamics. The resulting dataset is suitable for both training and evaluating value-aware conversational models.

      #### Why this matters

      SEADialogues provides a targeted resource for improving conversational AI in SEA languages, a benchmark for evaluating value alignment in culturally rich settings, and a starting point for future work on dialogue safety and social norms in SEA contexts.
---

I'm Samuel Cahyawijaya, a Member of Technical Staff at [Cohere](https://cohere.com/) and one of the initiators of [SEACrowd](/about).

Over 2024-2025, I served as a lead mentor for the **[SEACrowd Apprentice Program](/apprenticeship)**. I watched early-career researchers across SEA go from "I'm curious about AI research" to co-authoring papers and releasing a multilingual, culturally grounded dialogue dataset.

This post shares what we built, what was hard, what we're changing, and how you can [join Batch 2026](/apprenticeship).

TLDR;

- We ran our first SEACrowd Apprentice Program cohort focused on real research.
- Along the way, we hit hard problems: uneven commitment, skill gaps inside teams, mentor bandwidth issues, and losing momentum over a long timeline.
- We're changing the structure for **[Batch 2026](/apprenticeship)** with clearer selection, midterm and end-term milestones, external evaluations, and better-matched teams.
- [Application is open](/apprenticeship) until Dec 17, 2025 11:59PM UTC-12. Go to our page for more details.

## About SEACrowd

SEACrowd is a community-run initiative focused on AI research and development for Southeast Asia. Rather than just debating SEA's lack of representation, we [build models and datasets](/resources), and [do research](/publications) that center SEA languages, cultures, and realities.

For this, we bring together researchers, students, and practitioners who care about SEA languages and communities. Read more about us [here](/about).

## Why We Started the SEACrowd Apprentice Program

As SEACrowd grew, we kept bumping into the same problem:

> Many talented people in Southeast Asia _want_ to do AI research but don't see a clear path from "interested" to "actually doing research that gets published."

The gaps are recurring:

1. **Lack of mentorship.** It's hard to get regular feedback from experienced researchers who understand both the technical side _and_ the regional context.
2. **No structured, low-barrier entry point.** Many people in the region see research and postgraduate study as distant or already out of reach, especially when pitted against peers from better-resourced countries and institutions.
3. **Limited exposure to full projects.** Many only see pieces of the workflow (e.g., coding, reading papers), not the entire journey from idea → experiments → writing → submission.

These issues motivated us to create a program that would:

1. Design around real, scoped, publishable projects
2. Pair experienced researchers with early-career talent across Southeast Asia for hands-on learning

We wanted this to go far beyond a reading group or workshop: to meaningfully upgrade mentees' research skills and strengthen their chances for PhD applications and AI research careers. And all of this concretized in our first **SEACrowd Apprentice Program** cohort in 2024-25.

## What We Accomplished in Batch 2024–25

Looking back at the first cohort, I'm genuinely proud of what the teams pulled off. In one cycle, mentees contributed to:

1. A new technique for controlling language use in multilingual LLMs
   → [_Language Surgery in Multilingual Large Language Models_](https://aclanthology.org/2025.mrl-main.30/), published at [Multilingual Representation Learning (MRL) Workshop @ EMNLP 2025](https://sigtyp.github.io/ws2025-mrl.html)
2. A way to recover linguistic typology from language model behavior
   → [_Entropy2Vec: Crosslingual Language Modeling Entropy as End-to-End Learnable Language Representations_](https://aclanthology.org/2025.mrl-main.29/) at [MRL 2025](https://sigtyp.github.io/ws2025-mrl.html)
3. A culturally grounded dialogue dataset & benchmark for SEA languages
   → [_SEADialogues: A Multilingual Culturally Grounded Multi-turn Dialogue Dataset on Southeast Asian Languages_](https://arxiv.org/abs/2508.07069)

Click on each project below to have a closer look!

{% include faq.html id="projects-accordion" items=page.projects %}

## What We Learned (and What We're Changing)

Running the first cohort was encouraging and humbling. Other than the successes, we hit challenges around time, skill differences, mentor bandwidth, and sustaining momentum. Here's what observed and how we're changing:

### 1. Commitment and Time Constraints

Mentees juggled full-time obligations, different experience levels, and life events. Even when motivation was high, sustained commitment across several months on a full research project proved challenging.

**So we're changing with**:

- Refined selection criteria assessing prior exposure to coding and machine learning (ML), time availability, and clarity of motivation.
- Clearer upfront communication about timeline and commitment expectations, especially where the heavy lifts are, and what level of commitment is realistic.

### 2. Skill Gaps Within Teams

Mentees had varying experience: some with prior NLP research, others new but determined. Diversity is a strength, but when one or two people carry most of the technical load, they burn out. When others feel they're slowing the team, they disengage.

**So we're changing with:**

- More thoughtful team formation with shared baselines and lead mentees for task distribution.
- Projects structured so that different contributions matter—design, implementation, analysis, writing. The goal is to make it easier for mentees with different strengths to stay engaged and grow while still involved in most of the steps.

### 3. Mentor Availability and Consistency

Mentors are busy professionals or researchers volunteering their time for SEA talent training.

We also faced challenges with scheduling across time zones, supporting mentees when mentors got busy, and ensuring consistent feedback and guidance when a team had more than one mentor.

**So we're changing with**:

- More explicit mentor roles within each team
- Coordinated mentor expectations to avoid conflicting directions
- Built-in redundancy so teams aren't stranded if one mentor gets overloaded
- Shared guidelines for mentors about program goals and balancing ambition with feasibility

We hope to make the mentee experience more coherent, regardless of which team they're on.

### 4. Long Project Timeline and Momentum

Initially, we planned for the program to end whenever the write-up was ready for submission, but that open-ended timeline ended up hurting motivation and discipline.

On top of that, progress naturally came in waves—exciting starts, dragging middles, intense finals. Keeping everyone motivated through the uncertain middle was one of the toughest parts, especially when early experiments failed or teams weren't sure their direction was still viable.

**So we're changing with**:

- Fixed four-month window with clear checkpoints.
- Midterm presentations where teams present their progress to a broader group, get feedback from other mentors and can adjust scope and direction if needed.
- Clear end-of-term assessment with cross-team evaluation considering both research quality and team process.

## So Was It Worth It?

The first SEACrowd Apprentice Program started as an experiment:

> Could we meaningfully support early-career SEA researchers to produce real, impactful work in a relatively short time, across countries and time zones, online?

The answer is: **Yes, absolutely!**

Batch 2024-25 delivered two accepted workshop papers at MRL 2025, one new multilingual dialogue dataset, and a group of mentees who now have hands-on research experience, co-authorship in respected venues, and a stronger network across SEA and beyond.

We're making structural changes for Batch 2026 because we now have a clearer picture of where early-career SEA researchers struggle, what support is most valuable, and how to design a program that respects constraints while demanding real work.

## How to Join Batch 2026

If you've read this far, there's a good chance you want to try this. Consider applying to the **[SEACrowd 2026 Apprentice Program](/apprenticeship)** if you:

- Are based in or connected to Southeast Asia
- Have basic Python coding and AI/ML/NLP familiarity
- Can commit consistent time over several months
- Are curious about research beyond using APIs or off-the-shelf models
- Want a path toward PhD programs or AI research roles

We can't guarantee a paper for every team, but we offer a structured environment, mentors who care about your growth, and an honest path from "I'm curious about AI research" to "I've actually done it."

- 🗓️ Mentee application deadline: Dec 17, 2025 (UTC-12).
- 🌐 Full details, requirements, and the application form, see our [Apprentice Program page](/apprenticeship).

If you’d like to help empower the next generation of SEA researchers with SEACrowd, you can support us at [this link](/donate).
