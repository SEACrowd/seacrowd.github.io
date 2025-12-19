---
layout: default
title: "SEACrowd - Advancing AI for Southeast Asia"
description: "A grassroots-led community of researchers from Southeast Asia advancing Artificial Intelligence tools, resources, and capabilities for the region. Building world-class AI in linguistic and cultural context."
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
    description: Our SEACrowd 2026 Apprentice Program is closed. Thank you to all applicants! Stay tuned for announcements.
    button_text: Learn more
    button_url: "/apprenticeship"
  - image: "posts/emnlp-2024-bof.jpg"
    description: Help build Southeast Asia’s culturally-aware evaluation benchmarks for vision-language models
    button_text: View ongoing project
    button_url: "/projects/2025-seavl-phase-2"
  - image: "projects/seacrowd-catalog.png"
    description: Compile the first catalog and benchmark for 500+ Southeast Asian datasets
    button_text: View finished project
    button_url: "/projects/2024-seacrowd"
---

{% include carousel.html items=page.carousel height="400" duration="8" %}

## Our Vision

We are a **grassroots-led community of researchers from Southeast Asia (SEA)** advancing Artificial
Intelligence (AI) tools, resources, and capabilities for the region.

We envision a future where AI ecosystems in SEA are mature and competitive with the rest of the
world, wherein people from SEA can use world-class AI in their own linguistic and cultural context.

{% include video.html video_id="k5_Fod7HN9c" caption="Learn more about SEACrowd's mission and impact" %}

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

{% for article in recentNews %}
{% assign filename = article.path | split: '/' | last | remove: '.md' %}
{% assign date_parts = filename | split: '-' %}
{% if date_parts.size >= 3 %}
{% assign year = date_parts[0] %}
{% assign month = date_parts[1] %}
{% assign day = date_parts[2] %}
{% assign date_string = year | append: '-' | append: month | append: '-' | append: day %}
{% assign article_date = date_string | date: "%b %-d, %Y" %}
{% else %}
{% assign article_date = "Date not available" %}
{% endif %}

  <div class="news-item">
    <div class="news-date text-muted">{{ article_date }}</div>
      {{ article.content | markdownify }}
  </div>
{% endfor %}
{% else %}
No recent news available.
{% endif %}
