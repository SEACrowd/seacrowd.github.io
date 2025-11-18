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

1. Read about our [ongoing projects](/projects/#ongoing-projects)
2. Join our [Discord]({{ site.social.discord }}) to connect with the community
3. Subscribe to our [mailing list]({{ site.social.google_group }}) for updates

## Contributors

Our heartfelt gratitude goes to all the researchers, students, professionals, and community members
who have contributed to SEACrowd projects. Together, we're building a more inclusive AI future for
Southeast Asia.

{% assign contributors = site.data.contributors | sort: "name" %}
{% assign contributor_count = contributors | size %}

<div class="alert alert-info" role="alert">
  <strong>{{ contributor_count }} contributors</strong> from across Southeast Asia and beyond 🎉
</div>

Contributors are sorted alphabetically by their first name, by column.

<ol class="contributors-list" style="columns: 3; column-gap: 2rem; break-inside: avoid;">
  {% for member in contributors %}
    {% if member.website != 'none' %}
      <li style="break-inside: avoid; margin-bottom: 0.5rem;">
        <a href="{{ member.website }}" target="_blank" class="text-decoration-none">
          {{ member.name }} <i class="fas fa-external-link" style="font-size: 0.75em;"></i>
        </a>
      </li>
    {% else %}
      <li style="break-inside: avoid; margin-bottom: 0.5rem;">{{ member.name }}</li>
    {% endif %}
  {% endfor %}
</ol>

<style>
@media (max-width: 767px) {
  .contributors-list {
    columns: 1 !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .contributors-list {
    columns: 2 !important;
  }
}
</style>
