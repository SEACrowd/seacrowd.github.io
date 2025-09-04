---
title: Contribute
description: Join our grassroots community building AI tools and resources for Southeast Asia
permalink: /contribute.html
---

## Join Our Community

SEACrowd is a grassroots-led community advancing AI for Southeast Asia. Find your role based on your
background and interests.

### Ways to Contribute

{% include contribution-cards.html %}

### Get Started

1. Read about our [ongoing projects](/projects/)
2. Join our [Discord]({{ site.social.discord }}) to connect with the community
3. Subscribe to our [mailing list]({{ site.social.google_group }}) for updates
4. Email us at [{{ site.social.email }}](mailto:{{ site.social.email }}) with your background and
   interests

## Contributors

Our heartfelt gratitude goes to all the researchers, students, professionals, and community members
who have contributed to SEACrowd projects. Together, we're building a more inclusive AI future for
Southeast Asia.

{% assign contributors = site.data.contributors | sort: "name" %}
{% assign contributor_count = contributors | size %}

<div style="margin: 1rem 0; padding: 1rem; background: #e8f5e8; border-radius: 6px;">
  <strong>{{ contributor_count }} contributors</strong> from across Southeast Asia and beyond 🎉
</div>

<div class="contributors" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 0.5rem;">
  {% for member in contributors %}
    {% if member.website != 'none' %}
      <div style="padding: 0.25rem;">
        <a href="{{ member.website }}" target="_blank" style="text-decoration: none; color: #007bff;">
          {{ member.name }} <i class="fas fa-external-link" style="font-size: 0.75em;"></i>
        </a>
      </div>
    {% else %}
      <div style="padding: 0.25rem;">{{ member.name }}</div>
    {% endif %}
  {% endfor %}
</div>
