---
layout: post
title: "Growing SEA-Native AI Research Talent: Retrospective on the SEACrowd Apprentice Program 2024–25"
date: 2025-12-03
description: "Brief description for SEO and social media previews (keep under 160 characters)"
tags: [apprenticeship, restropection]
featured: true
authors: [Samuel Cahyawijaya]
thumbnail: placeholder.jpg
---

I'm Samuel Cahyawijaya, working as a Member of Technical Staff at [Cohere](https://cohere.com/), and I'm one of the initiators of [SEACrowd](/about).

Over 2024-2025, I've also served as a lead mentor for the **[SEACrowd Apprentice Program](/apprenticeship)**. I had watched early-career researchers across SEA go from "I'm curious about AI research" to co-authoring papers and releasing a new multilingual, culturally grounded dialogue dataset for SEA languages.

Through this post, I want to share what we actually built, what was hard, what we're changing, and how you can [join us for Batch 2026](/apprenticeship).

TLDR;

- We ran our first SEACrowd Apprentice Program cohort focused on real research.
- Along the way, we hit hard problems: uneven commitment, skill gaps inside teams, mentor bandwidth issues, and losing momentum over a long timeline.
- We're changing the structure for **[Batch 2026](/apprenticeship)** with clearer selection, midterm and end-term milestones, external evaluations, and better-matched teams.
- [Applications are open](/apprenticeship). Go to our page for more details.

## A Little About SEACrowd

SEACrowd is a community-run initiative focused on AI research and development for Southeast Asia.

More than debating SEA's lack of representation or inclusion, we also work on models, datasets, and research that center SEA languages, cultures, norms, and realities.

For this, we bring together:

- Researchers and practitioners already working in AI,
- Students and early-career folks who want to enter research,
- Those who care about SEA languages and communities.

## Why We Started the SEACrowd Apprentice Program

As SEACrowd grew from one community project to the next, we kept bumping into the same problem:

> There are many talented people in Southeast Asia who _want_ to do AI research—especially in computational linguistics, natural language processing, and large language modeling—but they don't see a clear path from "interested" to "actually doing research that gets published."

A few recurring gaps:

1. **Lack of mentorship.** It's hard to get regular feedback from experienced researchers who understand both the technical side _and_ the regional context.

2. **No structured, low-barrier entry point.** Many people in the region see research and postgraduate study as distant or already out of reach, especially when pitted against peers from better-resourced countries and institutions.

3. **Limited exposure to full projects.** Many only see pieces of the workflow (e.g., coding, reading papers), not the entire journey from idea → experiments → writing → submission.

Therefore, our goals were very concrete:

1. Design around real, scoped, publishable projects, not open-ended "let's see what happens."

2. Pair experienced researchers with early-career or prospective researchers across and around Southeast Asia, so mentees could learn by working hands-on and side-by-side.

We wanted this to go far beyond a reading group or one-off workshop. SEACrowd Apprentice Program should meaningfully upgrade the mentees' AI research skills and track record, and strengthens their chances for PhD applications, careers, and future work in the field.

## What We Built in Batch 2024–25

Looking back at the first cohort, I'm genuinely proud of what the teams pulled off. In one cycle, mentees contributed to:

1. **A new technique for controlling language use in multilingual LLMs**
   → [_Language Surgery in Multilingual Large Language Models_](https://aclanthology.org/2025.mrl-main.30/) at [MRL 2025](https://sigtyp.github.io/ws2025-mrl.html)
2. **A way to recover linguistic typology from language model behavior**
   → [_Entropy2Vec: Crosslingual Language Modeling Entropy as End-to-End Learnable Language Representations_](https://aclanthology.org/2025.mrl-main.29/) at [MRL 2025](https://sigtyp.github.io/ws2025-mrl.html)
3. **A culturally grounded dialogue dataset & benchmark for SEA languages**
   → [_SEADialogues: A Multilingual Culturally Grounded Multi-turn Dialogue Dataset on Southeast Asian Languages_](https://arxiv.org/abs/2508.07069)

Taken together, these projects cover:

- How multilingual LLMs internally represent languages,
- How to use that behavior to recover language relationships,
- How to give models better data reflecting SEA cultures.

Here's a quick closer look at each project.

### Project 1: [Language Surgery in Multilingual Large Language Models](https://aclanthology.org/2025.mrl-main.30/)

👥 **Mentees:** Joanito Agili Lopo, Muhammad Ravi Shulthan Habibi, Tack Hwa Wong

#### Research questions

Multilingual LLMs support many languages, but anyone who's tried prompting them in under-resourced languages has probably seen this:

You prompt in one language. The model partly responds in another (often English), drifts into mixed-language output, or drops in quality compared to high-resource languages like English or Chinese.

So, we wanted to understand:

- How do multilingual LLMs organize languages internally?
- Can we influence which language they "think in" or generate at inference time without retraining the model?

#### How did we explore these?

The team studied the latent space -- the internal continuous representation -- of multilingual LLMs. Instead of just observing the outputs, they looked at:

- How representations shift when the model handles different languages.
- How those representations relate across languages.

From this, they developed Inference-Time Language Control (ITLC), which is a method for nudging multilingual LLMs to produce more consistent language outputs from cross-lingual prompts, _without_ retraining.

#### Why this matters

Low-resource languages often get: 1) less stable outputs, 2) higher rates of language switching, and 3) lower average quality.

ITLC is especially relevant where retraining is expensive or impractical. For SEA:

- It offers a way to get more stable behavior in underrepresented languages using existing models.
- More explainability. We're understanding how languages are arranged inside these models.

> Result: Paper accepted at MRL 2025.

### Project 2: [Entropy2Vec: Crosslingual Language Modeling Entropy as End-to-End Learnable Language Representations](https://aclanthology.org/2025.mrl-main.29/)

👥 **Mentees:** Patrick Amadeus Irawan, Ryandito Diandaru, Belati Jagad Bintang Syuhada, Randy Zakya Suchrady

#### Research questions

Linguistic typology—mapping how languages relate to each other—has traditionally come from: 1) Decades of language documentation, 2) Manual annotation and deep linguistic expertise. , and 3) Resources like [Ethnologue](https://www.ethnologue.com/) and [Glottolog](https://glottolog.org/).

Modern LLMs, meanwhile, have learned behavior across many languages through large-scale training with rich, internal knowledge about which tokens are likely in which contexts.

Given the ability of LLMs to learn multiple languages through the large-scale training, we believe that this knowledge could provide a fine-grained representation that captures the dynamic across different languages as we know in linguistic typology. So, in this work, we aimed to answer the question of whether **the internal language knowledge of LLMs can actually reflect the linguistic typological relationships similar to those in Ethnologue and Glottolog**.

#### How did we explore these?

To do so, we extract the language representations (vectors) from the cross-lingual language modeling **entropy** collected from a diverse set of monolingual LMs.

Entropy here is basically:

- A measure of how unexpected the next token is according to the model.
- If a model predicts text in two languages and shows similar patterns of expected/unexpected, those languages might be structurally similar in some ways.

Using the cross-lingual language modeling entropy, the team built **Entropy2Vec**, a language embedding where:

1. Each language is represented with a single continuous latent vector,
2. Consists of multiple language vectors which sit within a single vector space, and
3. The distances between language vectors match the distances of languages in the linguistic typology tree.

So instead of starting from understanding low-level handcrafted features like word order, syntax, or morphological complexity, they start from:

- The model's own internal knowledge (how it predicts next tokens),
- Turn that into language embeddings with cross-lingual language modeling entropy, and
- Showcase the alignment of those with known linguistic relationships.

#### Why this matters

Two key outcomes:

1. Typology recovery: The learned language vectors can mimic typological structure—languages that are close in the typology tree end up close in the embedding space.

2. Better multilingual generalization: These language vectors can be used to regularize fine-tuning, improving adaptability to unseen languages by incorporating typological signals.

For multilingual research in SEA, where many languages are under-documented, this line of work opens the door to:

- Reusing existing language models to infer structural relationships between languages,
- Informing transfer learning strategies,
- And helping models generalize better to languages with very little data.

> Result: Paper accepted at MRL 2025.

### Project 3: [SEADialogues: A Multilingual Culturally Grounded Multi-turn Dialogue Dataset on Southeast Asian Languages](https://arxiv.org/abs/2508.07069)

👥 **Mentees:** Muhammad Dehan Al Kautsar, Aswin Candra, Muhammad Alif Al Hakim, Maxalmina Satria Kahfi

#### Research problems

Even as LLMs improve across many tasks, two patterns remain painfully consistent where 1) underrepresented languages always perform worse, and 2) LLMs frequently fail to align with local norms, values, and expectations, especially in multi-turn conversations.

So, the team set a clear goal of **Building a culturally grounded, multi-turn dialogue dataset for SEA languages that can be used to train and evaluate value-aware conversational LLMs**.

#### How did we do these?

In this project, the team:

- Collected and annotated multi-turn dialogues in multiple SEA languages.
- Designed conversations that reflect real cultural practices and social norms in SEA. Things like: local forms of politeness, family structures, community dynamics, and everyday scenarios specific to the region.
- Ensured that the dataset is suitable for both training and evaluating conversational models through an extensive curation process.

#### Why this matters

SEADialogues offers:

- A targeted resource for improving conversational AI in SEA languages,
- A benchmark for evaluating value alignment in culturally rich settings,
- A starting point for future work on dialogue safety, politeness, and social norms in SEA contexts.

> Result: Dataset released publicly as [SEADialogues](https://huggingface.co/datasets/SEACrowd/SEADialogues).

## What We Learned (and What We're Changing)

Running the first SEACrowd Apprentice cohort was encouraging and humbling.

Alongside the successes, we ran into very real challenges around: 1) time, 2) skill differences, 3) mentor bandwidth, and 4) sustaining momentum over several months.

These are common problems in mentorship programs, but they hit differently when you're trying to do serious research on top of people's existing obligations.

Here's what we saw and how we're changing things.

### 1. Commitment and Time Constraints

We had mentees who:

- Were juggling full-time study or work,
- Had different levels of experience with research and coding,
- Hit exam seasons, job changes, personal obligations, or even unexpected life events in the middle of the program.

Even when motivation was high, sustained commitment across several months proved challenging. It's one thing to complete a short course; it's another to push a research project from idea to write-up.

#### What we're changing:

- Refined selection criteria
  To create teams where expectations and capacity are better aligned, we put more care in assessing:
  - Prior exposure to coding or ML (doesn't need to be advanced, but some baseline helps)
  - Time availability
  - Clarity of motivation

- Clear communication upfront
  We emphasize more clearly what the project timeline looks like, where the heavy lifts are, and what level of commitment is realistic.

### 2. Skill Gaps Within Teams

Mentees came from very different backgrounds:

- Some had prior NLP or ML research experience, others were new to research but curious and determined.
- Some were stronger in theory, others in implementation.

Diversity is a strength, but it also creates tension. If one or two people carry most of the technical load, they may burn out. If others feel they're "slowing the team down," they may disengage.

#### What we're changing:

- More thoughtful team formation, by grouping mentees so that:
  - Each team has at least some shared baseline.
  - Each team has a lead mentee who takes point on task distribution and day-to-day direction (with mentors guiding the overall trajectory).
  - We can better match mentors' expertise to mentee profiles.

- Scoped responsibilities and milestones
  Projects are structured so different kinds of contributions matter—from experiment design, literature review, implementation, to analysis and writing.
  The goal is to make it easier for mentees with different strengths to stay engaged and grow while still involved in all of the steps.

### 3. Mentor Availability and Consistency

Most mentors are busy professionals or researchers with full-time jobs, academic responsibilities, as well as travel and deadlines of their own—yet still voluntarily dedicate their time and effort for SEA talent regeneration.

We saw challenges around:

- Scheduling regular syncs across time zones.
- Keeping mentees supported when primary mentors got very busy.
- Making sure feedback and guidance were consistent when teams had more than one mentor.

#### What we're changing:

- Improved mentor team organization
  For Batch 2026, we're:
  - Being more explicit about mentor roles within each team.
  - Coordinating mentor expectations so mentees don't get conflicting directions.
  - Ensuring there's some redundancy, so if one mentor gets overloaded, the team isn't stranded.

- Shared guidelines and resources
  We're working toward a more unified understanding among mentors of: program goals, typical project phases, and how to balance ambition with feasibility.

This should make the mentee experience more coherent, regardless of which team they're on.

### 4. Long Project Timeline and Momentum

Research timelines are tricky. Initially, we planned for the program to end whenever the write-up was ready for submission, but that open-ended timeline ended up hurting motivation and discipline.

On top of that, progress naturally came in waves:

- Early stages felt fast and exciting (ideation, preliminaries).
- Middle stages dragged (debugging, redesigning experiments, evaluations).
- Final stages were intense (writing, revising, responding to feedback).

Keeping everyone motivated through the slow, uncertain middle was one of the toughest parts, especially when early experiments failed or teams weren't sure their direction was still viable.

#### What we're changing:

- Fixed four-month window: The program now has a defined period with clear checkpoints. This gives mentees:
  - A concrete timeline to plan around.
  - A better sense of when to push hard and when to consolidate.
  - Less of the "we have time… until we suddenly don't" effect.

- Midterm milestone with presentations to avoid drifting: We're introducing a middle checkpoint where:
  - Teams present their progress to a broader group (not just their own mentors),
  - They receive feedback from other mentors and peers,
  - They can adjust scope or direction if needed.

- Clear end-of-term assessment with cross-team and external evaluation:
  - Projects will be evaluated by mentors outside the team.
  - Feedback will consider both research quality and team process.

  This hopefully adds accountability and gives mentees a clearer sense of how their work fits into the overall landscape.

## So Was the SEACrowd Apprentice Program Worth It?

The first SEACrowd Apprentice Program started as an experiment:

**Could we meaningfully support early-career SEA researchers to produce real, impactful work in a relatively short time, across countries and time zones, online?**

The answer is: **Yes, absolutely!**

Despite the challenges above, Batch 2024-25 delivered:

- Two accepted workshop papers at MRL 2025.
- One new multilingual, culturally grounded dialogue dataset for SEA languages.
- And a group of mentees who now have:
  - Hands-on experience with the full research pipeline,
  - Co-authorship in respected venues or visible dataset work,
  - A stronger research network across SEA and beyond.

There's still plenty to improve, and we're making structural changes for Batch 2026 because we now have a far clearer picture of:

- Where early-career SEA researchers struggle,
- What kind of support is most valuable,
- How to design a program that respects people's constraints but still demands real work.

Batch 2026 is built directly on those lessons.

## How to Join Batch 2026

If you've read this far, there's a good chance at least part of you wants to try this.

You should consider applying if you:

- Are based in or strongly connected to Southeast Asia,
- Have basic coding skills in Python and some AI/ML/NLP familiarity,
- Can commit consistent time over several months,
- Are genuinely curious about how research works beyond just using an API or off-the-shelf models,
- Looking for a path toward PhD programs or AI research roles.

We can't guarantee a paper or a dataset launch for every single team, but what we can offer is:

- A structured environment,
- Mentors who care about your growth,
- A real chance to work on AI research questions that matter,
- And an honest path from "I'm curious about AI research" to "I've actually done it and now I'm ready for the next step."

If you're ready to grow, we'd be happy to have you join us.

- 🗓️ Mentee application deadline: Dec 17, 2025 (UTC-12).
- 🌐 Full details, requirements, and the application form, see our [Apprentice Program page](/apprenticeship).

If you’d like to help empower the next generation of SEA researchers with SEACrowd, you can support us at [this link](/donate).
