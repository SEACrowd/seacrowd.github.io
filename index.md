---
layout: default
---

![](/assets/images/post/emnlp-2024-bof.jpg)

## Our Vision

We are a **grassroots-led community of researchers from Southeast Asia (SEA)**
advancing Artificial Intelligence (AI) tools, resources, and capabilities for the region.

We envision a future where AI ecosystems in SEA are mature and competitive
with the rest of the world, wherein people from SEA can use world-class
AI in their own linguistic and cultural context.

## Our Mission

We commit to a three-pronged approach to reaching our vision:

- spearheading grassroots-led model training and dataset building to improve AI resources for SEA
- creating a community of like-minded researchers via the [ACL Special Interest Group SIGSEA](https://www.sigsea.org/)
- supporting early-career researchers through the [SEACrowd Apprenticeship Program](/apprenticeship)

## Ongoing Projects

{% include ongoing-projects.html %}

## Recent News

{% assign recentNews = site.news | sort: 'date' | reverse | limit: 5 %}
{% for article in recentNews %}
{{ article.date | date: "%b %-d, %Y" }} -
<a href="{{ article.url | relative_url }}" class="text-decoration-none">{{ article.title }}</a>
{% endfor %}
