---
layout: default
title: "SEACrowd - Advancing AI for Southeast Asia"
description: "A grassroots-led community of researchers from Southeast Asia advancing Artificial Intelligence tools, resources, and capabilities for the region. Building world-class AI in linguistic and cultural context."
wide: true
keywords:
  [
    "Southeast Asia",
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Research Community",
    "SIGSEA",
    "NLP",
    "Natural Language Processing"
  ]
carousel:
  - image: "events/coling2025.jpg"
    description: Mentee registration for the SEACrowd 2027 Apprentice Program opens Nov 20 – Dec 13, 2026.
    button_text: Apply as a mentee
    button_url: "/apprenticeship"
  - image: "posts/emnlp-2024-bof.jpg"
    description: See our preprint "Anthropogenic Regional Adaptation in Multimodal Vision-Language Model", building Southeast Asia's culturally-aware VLMs
    button_text: Read arxiv preprint
    button_url: "https://arxiv.org/abs/2604.11490"
  - image: "projects/seacrowd-catalog.png"
    description: Compile the first catalog and benchmark for 500+ Southeast Asian datasets
    button_text: View finished project
    button_url: "/projects/2024-seacrowd"
---

<section class="home-hero">
  <div>
    <span class="home-hero__eyebrow">Grassroots research community</span>
    <h1 class="home-hero__title">AI for Southeast Asia, by Southeast Asians</h1>
    <p class="home-hero__lead">
      We build datasets, models, and research talent so that people across the
      region can use world-class AI in their own languages and cultures.
    </p>
    <div class="home-hero__actions">
      <a href="{{ '/apprenticeship' | relative_url }}" class="btn btn-primary">Apprentice Program 2027</a>
      <a href="{{ '/contribute' | relative_url }}" class="btn btn-outline-secondary">Join the community</a>
    </div>
  </div>
  <div>
    {% include carousel.html items=page.carousel height="340" duration="8" %}
  </div>
</section>

<div class="feature-grid">
  <div class="feature-card">
    <span class="feature-card__icon"><i class="fas fa-database" aria-hidden="true"></i></span>
    <h2 class="feature-card__title"><a href="{{ '/resources' | relative_url }}" class="stretched-link">Datasets and models</a></h2>
    <p class="feature-card__text">Open resources for Southeast Asian languages, from the SEACrowd catalog to SEA-VL.</p>
  </div>
  <div class="feature-card">
    <span class="feature-card__icon"><i class="fas fa-file-lines" aria-hidden="true"></i></span>
    <h2 class="feature-card__title"><a href="{{ '/publications' | relative_url }}" class="stretched-link">Research</a></h2>
    <p class="feature-card__text">Papers from the community and the apprentices we mentor.</p>
  </div>
  <div class="feature-card">
    <span class="feature-card__icon"><i class="fas fa-graduation-cap" aria-hidden="true"></i></span>
    <h2 class="feature-card__title"><a href="{{ '/apprenticeship' | relative_url }}" class="stretched-link">Apprentice Program</a></h2>
    <p class="feature-card__text">Mentored, remote research for early-career talent. Batch 2027 registration is open.</p>
  </div>
  <div class="feature-card">
    <span class="feature-card__icon"><i class="fas fa-people-group" aria-hidden="true"></i></span>
    <h2 class="feature-card__title"><a href="{{ '/contribute' | relative_url }}" class="stretched-link">Community</a></h2>
    <p class="feature-card__text">Talks, workshops, and a Discord with researchers across the region.</p>
  </div>
</div>

## Our Vision

We are a **grassroots-led community of researchers from Southeast Asia (SEA)** advancing Artificial
Intelligence (AI) tools, resources, and capabilities for the region.

We envision a future where AI ecosystems in SEA are mature and competitive with the rest of the
world, wherein people from SEA can use world-class AI in their own linguistic and cultural context.

{% include video.html video_id="k5_Fod7HN9c" title="What is SEACrowd?" caption="Learn more about SEACrowd's mission and impact" %}

## Our Mission

We commit to a three-pronged approach to reaching our vision:

- spearheading grassroots-led model training and dataset building to improve AI resources for SEA
- creating a community of like-minded researchers via the
  [ACL Special Interest Group SIGSEA](https://www.sigsea.org/)
- supporting early-career researchers through the [SEACrowd Apprentice Program](/apprenticeship)

## Recent News

{% if site.news and site.news.size > 0 %}
{% assign sortedNews = site.news | sort: 'path' | reverse %}
{% assign recentNews = sortedNews | slice: 0, 5 %}

<div class="news-list">
{% for article in recentNews %}
{% assign filename = article.path | split: '/' | last | remove: '.md' %}
{% assign date_parts = filename | split: '-' %}
{% if date_parts.size >= 3 %}
{% assign date_string = date_parts[0] | append: '-' | append: date_parts[1] | append: '-' | append: date_parts[2] %}
{% assign article_date = date_string | date: "%b %-d, %Y" %}
{% else %}
{% assign article_date = "Date not available" %}
{% endif %}
  <div class="news-item">
    <div class="news-date text-muted">{{ article_date }}</div>
    {{ article.content | markdownify }}
  </div>
{% endfor %}
</div>
{% else %}
No recent news available.
{% endif %}
