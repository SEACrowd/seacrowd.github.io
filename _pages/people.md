---
title: People
permalink: /people.html
---

# People

From 11 initial members when we launched in 2023, to over 400 community participants as of 2025, SEACrowd is built on a strong foundation of active contributors. This page lists all who have contributed to the SEACrowd community, from Southeast Asia and to the rest of the world.

{% assign people_by_sortorder = site.data.team | group_by: 'sortorder' %}
{% assign people_sorted = '' | split: '' %}
{% assign sortorders = '-1,0,1,2' | split: ',' %}
{% for sortorder in sortorders %}
{% for group in people_by_sortorder %}
{% if group.name == sortorder %}
{% assign group_sorted = group.items | sort: 'name' %}
{% assign people_sorted = people_sorted | concat: group_sorted %}
{% endif %}
{% endfor %}
{% endfor %}

## Core Team

The members who keep the community running.

<div class="row g-4">
  {% for profile in people_sorted %}
  {% include person.html %}
  {% endfor %}
</div>

## Contributors

Researchers, students, professors, professionals, and community members who have contributed to a project by SEACrowd.

{% assign contributors = site.data.contributors | sort: "name" | ascending %}

<div class="contributors">
  {% for member in contributors %}
    {% if member.website != 'none' %}
      <p><a href="{{ member.website }}" target="_blank">{{ member.name }}</a></p>
    {% else %}
      <p>{{ member.name }}</p>
    {% endif %}
  {% endfor %}
</div>
