---
title: SEACrowd Apprentice Program Mentors
permalink: /mentors/
description: Experienced AI researchers who guide early-career researchers through the SEACrowd Apprentice Program, from scoping a project to publishing it.
thumbnail: assets/images/apprenticeship/mentors-hero.png
hero: true
toc: false
form: https://docs.google.com/forms/d/e/1FAIpQLSf55CiCS5ld9ZDGBZ4Lr9lcu5DPG0ElVCtIJ_YzpQxmdJ3QbA/viewform
testimonials:
  - name: "Alham Fikri Aji"
    quote: |
      I've had the privilege of mentoring for SEACrowd since day one, and it never stops being an amazing experience. This batch of mentees feels like a team of peers. They are highly active and driven, making our research discussions fantastic. I can't wait to see them grow into leading AI experts and watch the SEA community's impact grow.
  - name: "Peerat Limkonchotiwat"
    quote: |
      Being a mentor in both last year's and this year's program has been a deeply rewarding experience. The mentorship journey has been mutually beneficial: while guiding these talented students, I have also learned new ideas, approaches, and perspectives from them. What makes the experience especially meaningful is that many of these students genuinely aspire to become researchers, and their curiosity, dedication, and growth have been inspiring to witness.
  - name: "Farid Adilazuarda"
    quote: |
      Memory compression for LLMs is literally my PhD topic, so mentoring is less teaching and more nerding out together over late-night calls. The mentees keep me sharp — they ask the "wait, but why?" questions that make you rethink your own assumptions. I got into research because my mentors gave me a chance, and SEACrowd is that chance for the next wave of Southeast Asian researchers.
  - name: "Genta Indra Winata"
    quote: |
      It has been both an exciting and rewarding journey to work with students and witness their growth. Many of them begin as complete beginners, gradually learning to navigate the world of research in ways that will benefit them in the long run. Among them are several "diamonds in the rough" who show strong potential, and we are committed to helping them develop their skills and grow into successful future researchers.
faq:
  - title: "Am I eligible to be a mentor?"
    content: |
      We're looking for active researchers or practitioners in AI, ML, or NLP — ideally with peer-reviewed publications and some experience guiding others. You should have a meaningful connection to Southeast Asia, whether by origin, affiliation, or research focus. There are no formal degree or seniority requirements, but our past mentors are usually MSc & PhD students (or holders). Take a look at [past projects](/apprentice-projects/) to get a sense of the kind of work we support.
  - title: "Do I need to be based in Southeast Asia?"
    content: |
      No. Our mentors come from institutions worldwide. What matters is your commitment to supporting researchers from Southeast Asia and your availability for remote collaboration.
  - title: "I have an AI/NLP/ML application idea — can I mentor?"
    content: |
      Yes, applied projects are welcome, but they should have a clear research component: a novel methodology, a measurable contribution, or findings that advance the field beyond the application itself. A useful reference point is what venues like [AAAI's Innovative Applications of AI (IAAI) track](https://aaai.org/conference/aaai/aaai-26/iaai-26-call/) or the [ACL Industry Track](https://2026.aclweb.org/calls/industry_track/) consider in scope — work that deploys real systems and surfaces insights about how AI behaves in practice. If your idea is purely product-focused without a research angle, it's likely not a good fit.
  - title: "Do you have a research proposal template?"
    content: |
      We don't have a rigid template, but a strong proposal covers: the research question or hypothesis, why it matters for Southeast Asia, the core methodology, what's achievable in 5 months, and rough compute or data needs. We're happy to give feedback on early-stage ideas before you commit to writing a full proposal — just reach out at [seacrowd.research@gmail.com](mailto:seacrowd.research@gmail.com).
  - title: "Can I be the sole mentor on a project?"
    content: |
      We prefer co-mentorship so the project runs smoothly if one mentor becomes unavailable. If you don't already have a co-mentor in mind, we'll match you with one of our researchers (see step 2 in "How it works"). If you have a compelling reason to mentor solo, we can discuss it case by case.
  - title: "Can I invite other people to collaborate on the project?"
    content: |
      It depends on the stage. Adding a collaborator before mentees are recruited is straightforward. Mid-program additions require discussion with the whole team. Authorship should always be agreed upon early and follows standard AI/ML academic practice (contribution determines credit).
  - title: "What is the time commitment?"
    content: |
      Roughly **2–4 hours per week** over the ~5-month program (February – June). This includes weekly or bi-weekly check-ins with your mentee team plus asynchronous feedback. The exact cadence is flexible and agreed upon by each team.
  - title: "How many mentees will I work with?"
    content: |
      Most projects have **2–5 mentees** per team. If there are multiple mentors on a project, responsibilities are split based on expertise and availability.
  - title: "What support does SEACrowd provide?"
    content: |
      We handle logistics: mentee recruitment and screening, program communications, and mid-term and end-term reviews. Mentors focus on research guidance; we handle the rest. Compute funding is limited: SEACrowd is a volunteer-run non-profit, so projects rely on mentors' compute through their institutions, or on external grants, and we are working to secure more grants for apprentice projects.
  - title: "I have a question not covered here"
    content: |
      Email us at [seacrowd.research@gmail.com](mailto:seacrowd.research@gmail.com) or join our [Discord](https://discord.gg/XXRHFuvkTA) and ask in the **#apprentice-program** channel.
---

<section class="program-hero">
  <img
    class="program-hero__image"
    src="{{ 'assets/images/apprenticeship/mentors-hero.png' | relative_url }}"
    alt="SEACrowd Apprentice Program Mentors: guide early-career AI researchers across Southeast Asia, from first idea to published paper"
    width="1200"
    height="630"
  >
  <div class="hero-actions">
    <a href="{{ page.form }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Express interest to mentor</a>
    <a href="{{ '/apprentice-projects/2027/' | relative_url }}" class="btn btn-outline-secondary">See the 2027 projects</a>
  </div>
</section>

The SEACrowd Apprentice Program is a part-time, remote research program that pairs experienced researchers with early-career talent from Southeast Asia to produce models, datasets, and publishable research. Each cohort runs February to June. Mentors work directly with teams of 2–5 mentees on focused AI research projects, from problem scoping and experiment design to shepherding the work toward publication.

{% assign all_projects = site['apprentice-projects'] %}
{% assign all_mentor_names = '' | split: '' %}
{% assign mentee_total = 0 %}
{% for project in all_projects %}
{% assign project_mentees = project.mentees.size | default: 0 %}
{% assign mentee_total = mentee_total | plus: project_mentees %}
{% for person in project.mentors %}
{% unless all_mentor_names contains person.name %}
{% assign all_mentor_names = all_mentor_names | push: person.name %}
{% endunless %}
{% endfor %}
{% endfor %}

<div class="row g-3 my-4 text-center">
  <div class="col-6 col-md-3">
    <div class="program-stat"><div class="program-stat__value">{{ site.data.apprentice_batches.size }}</div><div class="program-stat__label">batches since 2025</div></div>
  </div>
  <div class="col-6 col-md-3">
    <div class="program-stat"><div class="program-stat__value">{{ all_projects.size }}</div><div class="program-stat__label">research projects</div></div>
  </div>
  <div class="col-6 col-md-3">
    <div class="program-stat"><div class="program-stat__value">{{ all_mentor_names.size }}</div><div class="program-stat__label">mentors</div></div>
  </div>
  <div class="col-6 col-md-3">
    <div class="program-stat"><div class="program-stat__value">{{ mentee_total }}</div><div class="program-stat__label">mentees in past batches</div></div>
  </div>
</div>

<section class="my-4">
  <div class="row g-4">
    <div class="col-md-6">
      <h2>What we look for</h2>
      <ul class="mentor-feature-list">
        <li>
          <i class="fas fa-flask" aria-hidden="true"></i>
          <div><strong>Active researcher</strong> in AI, ML, or NLP with peer-reviewed publications</div>
        </li>
        <li>
          <i class="fas fa-clock" aria-hidden="true"></i>
          <div><strong>2–4 hours/week</strong> availability, February–June, fully remote</div>
        </li>
        <li>
          <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
          <div><strong>Connection to Southeast Asia</strong> — by origin, affiliation, or research focus</div>
        </li>
        <li>
          <i class="fas fa-lightbulb" aria-hidden="true"></i>
          <div>A <strong>research project idea</strong> scoped for a 5-month timeline, or willingness to co-develop one with the team</div>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <h2>What you'll gain</h2>
      <ul class="mentor-feature-list">
        <li>
          <i class="fas fa-file-alt" aria-hidden="true"></i>
          <div><strong>Materialize your project</strong> alongside strong, curious mentees</div>
        </li>
        <li>
          <i class="fas fa-users" aria-hidden="true"></i>
          <div><strong>SEA research network</strong> — join a growing community of researchers across the region and beyond</div>
        </li>
        <li>
          <i class="fas fa-chart-line" aria-hidden="true"></i>
          <div><strong>Professional growth</strong> — leadership, mentoring, and research management experience</div>
        </li>
        <li>
          <i class="fas fa-globe-asia" aria-hidden="true"></i>
          <div><strong>Direct impact</strong> on the next generation of AI researchers in Southeast Asia</div>
        </li>
      </ul>
    </div>
  </div>
</section>

{% assign projects_2027 = site['apprentice-projects'] | where: 'batch', 2027 %}
{% assign mentors_2027 = '' | split: '' %}
{% for project in projects_2027 %}
{% for person in project.mentors %}
{% unless mentors_2027 contains person.name %}
{% assign mentors_2027 = mentors_2027 | push: person.name %}
{% endunless %}
{% endfor %}
{% endfor %}

## Our mentors

**Batch 2027** ({{ mentors_2027.size }} mentors). Mentors on a team serve on equal footing, with no primary/secondary split.

<div class="row g-2">
  {% for name in mentors_2027 %}
    {% assign profile = site.mentors | where: "name", name | first %}
    {% if profile %}
      {% include mentor.html profile=profile %}
    {% endif %}
  {% endfor %}
</div>

<details class="mt-4">
  <summary class="fw-semibold">Past mentors (Batch 2025 and 2026)</summary>
  <div class="row g-2 mt-1">
    {% assign shown_past = '' %}
    {% for project in all_projects %}
      {% if project.batch != 2027 %}
        {% for person in project.mentors %}
          {% unless mentors_2027 contains person.name %}
            {% unless shown_past contains person.name %}
              {% assign shown_past = shown_past | append: '|' | append: person.name %}
              {% assign profile = site.mentors | where: "name", person.name | first %}
              {% if profile %}
                {% include mentor.html profile=profile %}
              {% endif %}
            {% endunless %}
          {% endunless %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  </div>
</details>

## What mentors say

<div class="row g-3">
  {% for testimonial in page.testimonials %}
    {% assign mentor = site.mentors | where: "name", testimonial.name | first %}
    <div class="col-md-6">
      <figure class="mentor-testimonial h-100">
        <blockquote class="mentor-testimonial__quote">
          <p>{{ testimonial.quote | strip }}</p>
        </blockquote>
        <figcaption class="mentor-testimonial__author">
          {% if mentor and mentor.avatar %}
            <img
              src="{{ 'assets/images/people/' | append: mentor.avatar | relative_url }}"
              alt="{{ testimonial.name }}"
              width="40"
              height="40"
              class="mentor-testimonial__avatar"
            >
          {% endif %}
          <div>
            {% if mentor %}
              <cite><a href="{{ mentor.url | relative_url }}" class="fw-semibold text-decoration-none">{{ testimonial.name }}</a></cite>
            {% else %}
              <cite class="fw-semibold">{{ testimonial.name }}</cite>
            {% endif %}
            {% if mentor.position and mentor.affiliation %}
              <br><small class="text-muted">{{ mentor.position }}, {{ mentor.affiliation }}</small>
            {% elsif mentor.affiliation %}
              <br><small class="text-muted">{{ mentor.affiliation }}</small>
            {% endif %}
          </div>
        </figcaption>
      </figure>
    </div>
  {% endfor %}
</div>

## How it works

<ol class="mentor-steps list-unstyled">
  <li>
    <span class="mentor-steps__num">1</span>
    <div><strong>Express interest.</strong> Submit <a href="{{ page.form }}" target="_blank" rel="noopener">the form</a>. We review your background and research ideas.</div>
  </li>
  <li>
    <span class="mentor-steps__num">2</span>
    <div><strong>We reach out.</strong> If you're not already affiliated with SEACrowd, we match you with one of our researchers. This ensures the project runs smoothly even if one mentor is unavailable, and gives you a built-in connection to the community.</div>
  </li>
  <li>
    <span class="mentor-steps__num">3</span>
    <div><strong>Develop a proposal.</strong> Write a research proposal with clear research questions or hypotheses, scoped so most of the work can be completed within 5 months, with a rough timeline and resource estimate.</div>
  </li>
  <li>
    <span class="mentor-steps__num">4</span>
    <div><strong>Proposal review.</strong> We screen proposals for impact, tractability, and cost, and mentors for mentorship experience. If interests align, we work with you to develop the proposal further.</div>
  </li>
  <li>
    <span class="mentor-steps__num">5</span>
    <div><strong>Recruit your mentees.</strong> We help screen candidates for your project, and you decide (via interviews, trial tasks, or similar) who to bring on.</div>
  </li>
  <li>
    <span class="mentor-steps__num">6</span>
    <div><strong>Program runs Feb – Jun.</strong> We onboard your mentees and provide the team with research support and limited compute funding throughout the program.</div>
  </li>
</ol>

## Frequently Asked Questions

{% include faq.html id="mentors-faq" %}
