---
title: About SEACrowd
description:
  A grassroots community advancing AI for Southeast Asia through collaborative research, datasets,
  and mentorship
permalink: /about.html
---

## Our Vision

We are a **grassroots-led community of researchers from Southeast Asia** advancing Artificial
Intelligence tools, resources, and capabilities for the region.

We envision AI ecosystems in Southeast Asia that are mature, competitive globally, and enable people
to use world-class AI in their own linguistic and cultural contexts.

## Our Mission

We advance our vision through three key initiatives:

- **Research & Development**: Spearhead grassroots model training and dataset building for SEA
  languages
- **Community Building**: Foster collaboration through the
  [ACL Special Interest Group SIGSEA](https://www.sigsea.org/)
- **Mentorship**: Support early-career researchers via our
  [apprenticeship program](/apprenticeship.html)

## What We Do

- **Datasets**: Build comprehensive multilingual, multimodal datasets for SEA languages
- **Models**: Train and evaluate AI models optimized for Southeast Asian contexts
- **Research**: Publish peer-reviewed papers advancing SEA AI capabilities
- **Mentorship**: Guide early-career researchers through hands-on projects
- **Community**: Connect researchers, practitioners, and advocates across the region

## Core Team

Our leadership team drives SEACrowd's mission and coordinates community efforts. For the full list
of contributors and ways to get involved, visit our [contribute page](/contribute.html).

{% assign people_by_sortorder = site.data.team | group_by: 'sortorder' %}
{% assign people_sorted = '' | split: '' %} {% assign sortorders = '-1,0,1,2' | split: ',' %}
{% for sortorder in sortorders %} {% for group in people_by_sortorder %}
{% if group.name == sortorder %} {% assign group_sorted = group.items | sort: 'name' %}
{% assign people_sorted = people_sorted | concat: group_sorted %} {% endif %} {% endfor %}
{% endfor %}

<div class="row g-4">
  {% for profile in people_sorted %}
  {% include person.html %}
  {% endfor %}
</div>
