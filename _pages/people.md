---
title: People
permalink: /people.html
---

# People

From 11 initial members when we launched in 2023, to over 400 community participants as of 2025, SEACrowd is built on a strong foundation of active contributors. This page lists all who have contributed to the SEACrowd community, from Southeast Asia and to the rest of the world.

{% assign people_sorted = site.people | sort: 'sortorder' %}

## Core Team

The members who keep the community running.

<div class="row g-4">
  {% for profile in people_sorted %}
    <div class="col-md-4 col-sm-6 text-center p-3">
      {% if profile.avatar %}
        <a href="{{ profile.site }}" target="_blank">
          <img class="profile-thumbnail" src="{{site.baseurl}}/images/people/{{profile.avatar}}" alt="{{ profile.name }}" style="display: block; margin: 0 auto 0.5rem auto;">
        </a>
      {% endif %}
      <a href="{{ profile.site }}" target="_blank" class="name text-decoration-none d-block">{{ profile.name }}</a>
      <p class="subtitle text-muted small mb-0">{{ profile.job }}</p>
    </div>    
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
