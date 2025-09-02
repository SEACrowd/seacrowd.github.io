---
layout: default
---

![](/images/post/emnlp-2024-bof.jpg)

## Our Vision

We are a grassroots-led community of researchers from Southeast Asia advancing Southeast Asian
AI tools, resources, and capabilities. We envision a future where AI ecosystems in SEA are
mature and competitive with the rest of the world, wherein people from SEA can use world-class
AI in their own linguistic and cultural context.

## Our Mission

We commit to a three-pronged approach to reaching our vision:

- spearheading grassroots-led model and dataset building to improve the resources of SEA
- creating a community of like-minded researchers via the [ACL Special Interest Group SIGSEA](https://www.sigsea.org/)
- supporting early-career researchers through the SEACrowd Apprentice Program

## Recent News

{% assign newposts = site.posts | limit:5 %}
{% for post in newposts %} {% if post.categories contains 'news' %}
{{ post.date | date: "%b %-d, %Y" }} -
<a href="{{ post.url }}" class="text-decoration-none">{{ post.title }}</a>
{% endif %} {% endfor %}
