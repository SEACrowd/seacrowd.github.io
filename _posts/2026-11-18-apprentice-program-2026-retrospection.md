---
layout: post
title: "Growing SEA-Native AI Research Talent: Retrospective on the SEACrowd Apprentice Program 2026"
date: 2026-11-18
description: "How 20 mentees across Southeast Asia turned five ambitious ideas into four accepted papers, why they rated the program 4.79/5, and how to join Batch 2027."
category: Apprenticeship
tags: [apprenticeship, restropection]
featured: true
authors: [Samuel Cahyawijaya]
thumbnail: retrospective-review.png
form: https://docs.google.com/forms/d/1FHgfr7sx8VqZkNrYvgGXl81hwqMqEibYN0nrabfYLRk/viewform
projects:
  - title: "Project 1: SEATauBench — Evaluating AI Agents in Southeast Asian Languages (EMNLP Findings 2026)"
    open: true
    content: |
      👥 **Mentees:** My (Chiffon) Nguyen, Aulia Adila, Saksorn Ruangtanusak, Kittiphat Leesombatwathana, Vissuta Gunawan Lim

      🧭 **Mentors:** Samuel Cahyawijaya, Patomporn Payoungkhamdee

      → [Read paper at EMNLP Findings 2026](https://aclanthology.org/2026.findings-emnlp.502/) · [arXiv](https://arxiv.org/abs/2606.28715) · [Code & Data](https://github.com/SEACrowd/SEATauBench)

      #### The problem

      Most AI agent benchmarks only test English. If an AI assistant can look up policies, call tools, and solve user tasks in English, can we assume it works just as reliably when the conversation, tools, and domain context are in Southeast Asian languages?

      #### The approach

      The team created **SEATauBench** (pronounced _"si-tau-bench"_, like _sitaw_, the Filipino word for string beans), adapting τ²-Bench across **Mandarin, Vietnamese, Thai, Indonesian, and Filipino**. Instead of translating everything at once, they designed progressive localization stages—first localizing only the user dialogue, then tool schemas, and finally the full local task domain.

      #### Why this matters

      While English capabilities transfer reasonably well when only the chat language changes, **agent reliability drops sharply once tools and domains are localized**. SEATauBench proves that English-only agent scores cannot predict real-world readiness for SEA sovereign AI—and gives the community a reusable benchmark to close that gap.
  - title: "Project 2: CoRaL — Context-Aware Data Curation for Low-Resource Languages"
    content: |
      👥 **Mentees:** Thanh-Nhi Nguyen, Feliks Victor Parningotan Samosir, Michael Christlambert Sinanta

      🧭 **Mentors:** Fajri Koto, Muhammad Dehan Al Kautsar

      → [View project page](/apprentice-projects/2026/coral-contextual-relevance)

      #### The problem

      Web corpora for low-resource languages are full of noise and code-mixing. Aggressive filtering throws away scarce cultural knowledge, while keeping everything pollutes pre-training with low-quality text.

      #### The approach

      The team built **CoRaL (Contextual Relevance and Linguistic Enrichment)**, a multi-dimensional curation pipeline that scores text on linguistic purity, topical relevance, and cross-lingual interference. Rather than a binary keep-or-drop filter, CoRaL **retains** clean text, **repairs** mid-quality samples via denoising and regeneration, **discards** unusable noise, and explores dictionary-guided generation for scarce SEA languages.

      #### Why this matters

      Hundreds of millions of people in Southeast Asia speak languages that lack clean web-scale data. CoRaL treats data curation as preserving cultural and linguistic value—not just chasing raw token counts.
  - title: "Project 3: Reasoning Agentic LLM Router — Smarter, Cheaper Model Routing"
    content: |
      👥 **Mentees:** Napol Rachatasumrit, Quyen Le Hoang Tran, Jaycent Gunawan Ongris

      🧭 **Mentors:** Genta Indra Winata, David Anugraha

      #### The problem

      Routing every prompt to a frontier model is too expensive, while routing everything to a small model hurts accuracy. Existing routers rarely account for the fine-grained _skills_ a specific query requires.

      #### The approach

      The team developed a **skill-based LLM routing framework** grounded in model capability profiles and reasoning-based sampling strategies—matching each incoming task to the most cost-effective model capable of handling it, cutting inference costs by ~35% in mid-term benchmarks without sacrificing accuracy.

      #### Why this matters

      Making capable AI practical in resource-constrained Southeast Asian settings means making inference affordable, not just chasing bigger models.
  - title: "Project 4: Adaptive KV Memory — Continual Learning & Long-Reasoning Efficiency (2× COLM 2026 Workshop)"
    content: |
      👥 **Mentees:** Faeyza Rishad Ardi, Izaaz Inhar, Phudish Prateepamornkul, Quang Minh Nguyen, Tri Q. Vo

      🧭 **Mentors:** Alham Fikri Aji, Farid Adilazuarda, M. Reza Qorib

      → [View project page](/apprentice-projects/2026/adaptive-kv-memory) · [Gating paper](https://openreview.net/forum?id=50yXR3Uui7) · [Compaction paper](https://openreview.net/forum?id=rcR66RU5u1)

      #### The problem

      Long-context reading and long Chain-of-Thought reasoning cause the Key-Value (KV) cache to balloon in memory and latency. Worse, real-world deployments keep seeing new documents over time, forcing compressed memories to learn new information without forgetting old context.

      #### The approach

      Splitting into two focused sub-teams, mentees produced **two first-authored workshop papers** at the Context Beyond the Window Workshop @ COLM 2026:

      - **Continual Compressed Memory:** Added statistical TF-IDF and Mixture-of-Experts gating to Cartridge-style compressed KV caches, improving both knowledge retention and new-corpus learning on Llama-3.2-3B and Qwen3-4B.
      - **Online KV Compaction for Long Reasoning:** Combined token merging with learnable Gumbel-Sigmoid token dropping, reaching **8× compression**, cutting peak KV memory by **~83%**, boosting throughput by **>22%**, and improving AIME 26 and HMMT-Feb 26 scores on Qwen3-1.7B.

      #### Why this matters

      Memory bottlenecks hit resource-limited labs and practitioners first. Both papers show how compact models can reason longer and retain knowledge on a tight memory budget.
  - title: "Project 5: SEA-CLIP-Tiny — Edge-Ready Multilingual Vision-Text Embeddings (ACCV 2026)"
    content: |
      👥 **Mentees:** Puja Ahmad Habibi, Faiz Assabil Firdaus, Ashvanth S, Ilma Aliya Fiddien

      🧭 **Mentors:** Peerat Limkonchotiwat, Ekapol Chuangsuwanich, Pume Tuchinda

      → [Read paper at ACCV 2026](https://arxiv.org/abs/2609.30739) · [HuggingFace Model](https://huggingface.co/fassabilf/sea-clip-tiny) · [Code](https://github.com/fassabilf/sea-clip-tiny)

      #### The problem

      Multilingual vision-language models either underperform on Southeast Asian languages or are far too heavy to run on everyday consumer hardware and edge devices.

      #### The approach

      The team distilled **SEA-CLIP-Tiny**, a compact **46M-parameter** vision-text embedding model supporting English and seven SEA languages (Indonesian, Javanese, Sundanese, Malay, Thai, Vietnamese, and Burmese) using regionally curated data and multilingual teacher guidance.

      #### Why this matters

      Across seven SEA languages, SEA-CLIP-Tiny outperformed MobileCLIP2 by **+12.1 points on average R@10** while using **38.4% fewer parameters** and running faster on CPU—showing that region-aware distillation beats generic compression.
---

<figure class="text-center my-5">
  <blockquote class="blockquote">
    <p class="fs-3 fst-italic">“If you are pursuing grad school, this program makes the unreachable goal feel reachable.”</p>
  </blockquote>
  <figcaption class="blockquote-footer mt-2">
    Faiz Assabil Firdaus, <cite title="SEACrowd Apprentice Program 2026">SEACrowd Apprentice 2026 mentee and co-author of SEA-CLIP-Tiny (ACCV 2026)</cite>
  </figcaption>
</figure>

When we launched our first **[SEACrowd Apprentice Program](/apprenticeship)** in 2024–25, it started as a simple question: _Could we help early-career talent across Southeast Asia go from "I'm curious about AI research" to actually publishing real work—remotely and part-time?_ That first cohort answered with a clear yes, producing two workshop papers and a new regional dialogue dataset ([read last year's retrospective here](/posts/apprentice-program-retrospection.html)).

**Batch 2026** was a bigger test: could we scale the program to more teams, run on a tighter schedule, and make the experience even stronger?

From February to June 2026, **20 mentees and 12 mentors** teamed up across **five research projects**. The results blew us away—four research papers accepted at top international venues, glowing feedback from mentees across every background, and a growing wave of new Southeast Asian researchers ready to keep going.

This post shares what our teams built, what mentees told us, how we are making Batch 2027 even better, and how you can [apply to Batch 2027]({{ page.form }}).

> **TL;DR**
>
> - **Big research wins:** Five teams tackled multilingual agents, data curation, LLM routing, KV-cache memory, and compact vision-language models—leading to **4 accepted papers** at **EMNLP Findings 2026**, **ACCV 2026**, and the **COLM 2026 Context Beyond the Window Workshop**.
> - **Strong mentee impact:** Mentees rated their likelihood to recommend the program at **4.79 / 5.0** and their interest in continuing AI research at **4.50 / 5.0**.
> - **Honest lessons for 2027:** Based on cohort feedback, we are making compute expectations transparent upfront, listing mentor timezone ranges per project, and removing the confusing primary/secondary mentor split.
> - **Batch 2027 is opening!** Mentee registration runs from **Friday, November 20 to Sunday, December 13, 2026** ([register here]({{ page.form }})).

## Batch 2026 at a Glance

<div class="row g-3 my-3 text-center">
  <div class="col-6 col-md-3">
    <div class="p-3 border rounded-3 h-100">
      <div class="fs-4 fw-bold text-primary">5 Months</div>
      <div class="small text-muted">Feb – Jun 2026, remote &amp; part-time</div>
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="p-3 border rounded-3 h-100">
      <div class="fs-4 fw-bold text-primary">20 Mentees</div>
      <div class="small text-muted">Guided by 12 mentors in 5 teams</div>
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="p-3 border rounded-3 h-100">
      <div class="fs-4 fw-bold text-primary">4 Papers</div>
      <div class="small text-muted">EMNLP Findings, ACCV &amp; COLM WS</div>
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="p-3 border rounded-3 h-100">
      <div class="fs-4 fw-bold text-success">4.79 / 5.0</div>
      <div class="small text-muted">Would recommend to others</div>
    </div>
  </div>
</div>

After Batch 2024–25, we tightened the program's structure to help teams keep momentum through the tough middle months of research:

1. **A fixed 5-month window** instead of an open-ended finish line
2. **A structured mid-term review** in April so teams could get early cross-mentor feedback and course-correct
3. **A community-wide final showcase** in July, where all five teams delivered six research presentations

## What We Accomplished in Batch 2026

Across five teams, mentees didn't work on toy problems—they built benchmarks, curated datasets, compressed models, and ran full experimental pipelines from scratch:

1. **Multilingual Agent Evaluation for SEA** → [_SEATauBench_](https://aclanthology.org/2026.findings-emnlp.502/), published at **EMNLP Findings 2026**
2. **Context-Aware Low-Resource Data Curation** → [_CoRaL_](/apprentice-projects/2026/coral-contextual-relevance), presented at the **Final Milestone Showcase**
3. **Skill-Based Cost-Efficient LLM Routing** → _Reasoning Agentic LLM Router_, presented at the **Final Milestone Showcase**
4. **Continual & Online KV-Cache Compression** → [_Adaptive KV Memory_](/apprentice-projects/2026/adaptive-kv-memory), **2 papers** accepted at the **COLM 2026 Workshop on Context Beyond the Window**
5. **Sub-50M Multilingual Vision-Text Embeddings** → [_SEA-CLIP-Tiny_](https://arxiv.org/abs/2609.30739), accepted at **ACCV 2026**

Explore the full list on our [Batch 2026 Projects page](/apprentice-projects/2026/), or click each project below for a closer look!

{% include faq.html id="projects-accordion" items=page.projects %}

## Did the Program Help Mentees Grow?

Papers are only half the story. Our real goal is helping early-career talent build confidence, skills, and momentum in AI research. At the end of Batch 2026, we surveyed our mentees on a 5-point scale:

<div class="my-4"><svg viewBox="0 0 700 315" width="100%" style="max-width: 700px; height: auto; display: block; margin: 0 auto; font-family: var(--font-family-sans, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif);" role="img" aria-label="SEACrowd Apprentice Program 2026 Mentee Survey Ratings out of 5.0"><rect x="1" y="1" width="698" height="313" rx="14" fill="var(--bs-tertiary-bg, #f8fafc)" stroke="var(--bs-border-color, #e2e8f0)" stroke-width="1.5"/><text x="28" y="36" font-size="16" font-weight="700" fill="var(--bs-body-color, #0f172a)">Batch 2026 Mentee Survey Feedback</text><text x="28" y="56" font-size="12.5" fill="var(--muted-foreground, #64748b)">Average rating out of 5.0 from the end-of-program mentee survey</text><line x1="285" y1="74" x2="285" y2="268" stroke="var(--bs-border-color, #cbd5e1)" stroke-width="1"/><line x1="347" y1="74" x2="347" y2="268" stroke="var(--bs-border-color, #e2e8f0)" stroke-width="1" stroke-dasharray="3,3"/><line x1="409" y1="74" x2="409" y2="268" stroke="var(--bs-border-color, #e2e8f0)" stroke-width="1" stroke-dasharray="3,3"/><line x1="471" y1="74" x2="471" y2="268" stroke="var(--bs-border-color, #e2e8f0)" stroke-width="1" stroke-dasharray="3,3"/><line x1="533" y1="74" x2="533" y2="268" stroke="var(--bs-border-color, #e2e8f0)" stroke-width="1" stroke-dasharray="3,3"/><line x1="595" y1="74" x2="595" y2="268" stroke="var(--bs-border-color, #cbd5e1)" stroke-width="1"/><text x="273" y="99" text-anchor="end" font-size="13" font-weight="600" fill="var(--bs-body-color, #0f172a)">Would recommend program to others</text><rect x="285" y="83" width="310" height="22" rx="6" fill="var(--bs-secondary-bg, #e2e8f0)"/><rect x="285" y="83" width="297.0" height="22" rx="6" fill="var(--sea-green, #009639)"/><text x="607" y="99" font-size="13" font-weight="700" fill="var(--sea-green, #009639)">4.79 / 5.0</text><text x="273" y="137" text-anchor="end" font-size="13" font-weight="500" fill="var(--bs-body-color, #334155)">Interested in AI research afterward</text><rect x="285" y="121" width="310" height="22" rx="6" fill="var(--bs-secondary-bg, #e2e8f0)"/><rect x="285" y="121" width="279.0" height="22" rx="6" fill="var(--sea-blue, #0042a6)"/><text x="607" y="137" font-size="13" font-weight="600" fill="var(--bs-body-color, #1e293b)">4.50 / 5.0</text><text x="273" y="175" text-anchor="end" font-size="13" font-weight="500" fill="var(--bs-body-color, #334155)">Program helped achieve my goals</text><rect x="285" y="159" width="310" height="22" rx="6" fill="var(--bs-secondary-bg, #e2e8f0)"/><rect x="285" y="159" width="277.1" height="22" rx="6" fill="var(--sea-blue, #0042a6)"/><text x="607" y="175" font-size="13" font-weight="600" fill="var(--bs-body-color, #1e293b)">4.47 / 5.0</text><text x="273" y="213" text-anchor="end" font-size="13" font-weight="500" fill="var(--bs-body-color, #334155)">New perspective on future career</text><rect x="285" y="197" width="310" height="22" rx="6" fill="var(--bs-secondary-bg, #e2e8f0)"/><rect x="285" y="197" width="272.2" height="22" rx="6" fill="var(--sea-blue, #0042a6)"/><text x="607" y="213" font-size="13" font-weight="600" fill="var(--bs-body-color, #1e293b)">4.39 / 5.0</text><text x="273" y="251" text-anchor="end" font-size="13" font-weight="500" fill="var(--bs-body-color, #334155)">Achieved initial personal goals</text><rect x="285" y="235" width="310" height="22" rx="6" fill="var(--bs-secondary-bg, #e2e8f0)"/><rect x="285" y="235" width="270.9" height="22" rx="6" fill="var(--sea-blue, #0042a6)"/><text x="607" y="251" font-size="13" font-weight="600" fill="var(--bs-body-color, #1e293b)">4.37 / 5.0</text><text x="285" y="290" text-anchor="middle" font-size="11.5" fill="var(--muted-foreground, #64748b)">0</text><text x="347" y="290" text-anchor="middle" font-size="11.5" fill="var(--muted-foreground, #64748b)">1.0</text><text x="409" y="290" text-anchor="middle" font-size="11.5" fill="var(--muted-foreground, #64748b)">2.0</text><text x="471" y="290" text-anchor="middle" font-size="11.5" fill="var(--muted-foreground, #64748b)">3.0</text><text x="533" y="290" text-anchor="middle" font-size="11.5" fill="var(--muted-foreground, #64748b)">4.0</text><text x="595" y="290" text-anchor="middle" font-size="11.5" fill="var(--muted-foreground, #64748b)">5.0</text></svg></div>

Every single metric landed between **4.37 and 4.79 out of 5.0**. Seeing **4.50 / 5.0** on wanting to pursue AI research afterward—and **4.79 / 5.0** on recommending the program to peers—is the clearest sign that the program is fulfilling its mission.

## Voices from the 2026 Cohort

One of my favorite parts of SEACrowd is that our mentees don't fit a single mold. Batch 2026 brought together undergraduate students taking their first shot at research, master's students, industry ML engineers and data scientists, AI researchers, and university educators. Here is what they shared:

<div class="row g-3 my-2">
  <div class="col-md-6">
    <div class="p-3 border rounded-3 h-100 d-flex flex-column justify-content-between">
      <p class="mb-3 fst-italic">"Very nice program! I totally love that we can collaborate on AI research with new people and new cultures. This is a very short and intensive program — we pushed hard for 4 months and got a publication!"</p>
      <div class="small"><strong>Saksorn Ruangtanusak</strong> · <span class="badge bg-secondary">AI Researcher</span></div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="p-3 border rounded-3 h-100 d-flex flex-column justify-content-between">
      <p class="mb-3 fst-italic">"As a person who hasn't done any prior research, SEACrowd Apprentice Program is a great first step for me. This program gives me experience of conducting research as a team with people from different countries... Community-wise, SEACrowd is filled with great yet supportive people."</p>
      <div class="small"><strong>Vissuta Gunawan Lim</strong> · <span class="badge bg-secondary">Bachelor Student</span></div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="p-3 border rounded-3 h-100 d-flex flex-column justify-content-between">
      <p class="mb-3 fst-italic">"I think this is an amazing and focused initiative targeted quite clearly towards early-career researchers in this region. The application and selection process is straightforward and clear... And it helps both in our connections with other early-career and experienced researchers, and our research experience itself."</p>
      <div class="small"><strong>Muhammad Izaaz Inhar Ramahdani</strong> · <span class="badge bg-secondary">Master Student</span></div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="p-3 border rounded-3 h-100 d-flex flex-column justify-content-between">
      <p class="mb-3 fst-italic">"I really recommend researchers (especially early-career ones) to join this program. It's a wholesome way to learn about research (like AI research 101), because as a mentee, you get the full end-to-end real experience on how to identify your research questions, answer the problem scientifically, and present your work to the audience."</p>
      <div class="small"><strong>Aulia Adila</strong> · <span class="badge bg-secondary">Machine Learning Engineer</span></div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="p-3 border rounded-3 h-100 d-flex flex-column justify-content-between">
      <p class="mb-3 fst-italic">"The program has been an incredibly rewarding experience right from going through the ideation process to getting to conduct experiments... There are not a lot of organisations focusing on cultivating a space to improve AI ecosystems particularly for multilinguality, hence I would urge people... to join the SEACrowd program."</p>
      <div class="small"><strong>Ashvanth S</strong> · <span class="badge bg-secondary">Data Scientist</span></div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="p-3 border rounded-3 h-100 d-flex flex-column justify-content-between">
      <p class="mb-3 fst-italic">"SEACrowd Apprentice Program was my first completed substantial AI research experience. I came in for a project I was interested in, and for the potential to publish as co-first author. I accomplished these goals, but what I valued more were how to do research in a distributed setting, support from mentors, and great teammates I enjoyed working with."</p>
      <div class="small"><strong>Tra My Nguyen</strong> · <span class="badge bg-secondary">AI Researcher</span></div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="p-3 border rounded-3 h-100 d-flex flex-column justify-content-between">
      <p class="mb-3 fst-italic">"The SEACrowd Apprentice Program 2026 gave me the chance to work on real, meaningful research — in my case, building synthetic data for low-resource languages under Project CoRaL. The mentors guided me throughout the research process, and discussions with fellow mentees made the experience even more valuable."</p>
      <div class="small"><strong>Michael Christlambert Sinanta</strong> · <span class="badge bg-secondary">AI Researcher</span></div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="p-3 border rounded-3 h-100 d-flex flex-column justify-content-between">
      <p class="mb-3 fst-italic">"What stood out most was the chance to learn and do research alongside people whose names I had only known from papers, and seeing fellow researchers from Southeast Asia, especially Indonesia, share their work was truly inspiring. This experience has motivated me to keep pushing forward in learning, teaching, and researching NLP for the Indonesian context."</p>
      <div class="small"><strong>Feliks V. P. Samosir</strong> · <span class="badge bg-secondary">Lecturer</span></div>
    </div>
  </div>
</div>

## What We Learned (and What We’re Changing)

Our post-program survey and discussions also surfaced three practical pain points. Here is what didn't go smoothly in 2026—and how we are fixing each one for **Batch 2027**:

### 1. Cross-Timezone Meeting Schedules

Because mentors and mentees were spread across Southeast Asia, Europe, the Middle East, and North America, finding weekly meeting slots was tough—and applicants didn't see a team's timezone spread before joining.

**So we're changing with:**

- Listing the **timezone range of each mentor group** directly on every 2027 project description so applicants know upfront whether a team's schedule fits their week.

### 2. Compute Budget Transparency

Running LLM and multimodal experiments costs money. Because SEACrowd is a volunteer-run non-profit without a central compute grant, mentors and mentees sometimes had to cover compute costs themselves—something we didn't state clearly enough during applications.

**So we're changing with:**

- Being **explicit upfront during applications** that SEACrowd does not directly provide compute funding, while noting that individual mentors may help cover compute if they are willing and able to do so.

### 3. Confusion Over "Primary" vs. "Secondary" Mentors

We originally split mentors into _primary_ and _secondary_ roles, but in practice this created confusion over who owned decisions and how mentorship duties were divided.

**So we're changing with:**

- **Removing the primary/secondary mentor split altogether.** All mentors on a team will serve on equal footing, keeping multi-mentor support without unnecessary hierarchy.

## So Was It Worth It?

**Yes—more than ever.**

In five months, 20 mentees collaborated across borders, tackled genuinely hard AI problems for Southeast Asia, delivered six final presentations, and landed four papers at respected international venues. Even better, students, engineers, and lecturers walked away knowing that world-class AI research isn't out of reach—it's something they can lead.

A huge thank-you to every mentee who pushed through failed experiments and tight deadlines, to all 12 mentors who volunteered their evenings and weekends, and to our organizers **Aye Hninn Khine** and **Holy Lovenia** for keeping the entire cohort running smoothly.

## How to Join Batch 2027

Ready to make the jump from _"curious about AI research"_ to _"I've actually done it"_? Consider applying to the **[SEACrowd 2027 Apprentice Program](/apprenticeship)** if you:

- Are affiliated with, born/raised in, or doing research connected to **Southeast Asia**
- Have foundational Python and AI/ML/NLP familiarity (prior publications are **not** required!)
- Can commit **at least 10 hours/week** (15–20 hours recommended) from **February to June 2027**
- Want hands-on mentorship toward grad school, PhD applications, or AI research roles

While we cannot guarantee a paper for every team, we offer real research problems, dedicated mentors, a supportive SEA-wide peer network, and a Certificate of Achievement (plus recommendation letters for strong contributors).

- 🗓️ **Registration Period:** **Friday, November 20, 2026 – Sunday, December 13, 2026**
- 📝 **Registration Form:** [Submit your Batch 2027 Mentee Application]({{ page.form }})
- 🌐 **Program Info & FAQs:** [SEACrowd Apprentice Program page](/apprenticeship)

<div class="my-4">
  <a href="{{ page.form }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
    Apply as a Mentee for Batch 2027 →
  </a>
</div>

If you have questions, reach us at [seacrowd.research@gmail.com](mailto:seacrowd.research@gmail.com) or join `#apprentice-program` on [SEACrowd Discord](https://discord.gg/XXRHFuvkTA)—and if you'd like to help empower the next generation of SEA researchers, you can support SEACrowd [here](/donate).
