---
title: Contribute
description: Join our grassroots community building AI tools and resources for Southeast Asia
permalink: /contribute.html
ways_to_contribute:
  - title: "Research & Technical"
    icon: "fa-code"
    items:
      - "Contribute to model training and evaluation"
      - "Develop tools and evaluation frameworks"
      - "Collaborate on publications"
      - '<a href="/apprenticeship">Mentor apprentices</a>'
  - title: "Language & Culture"
    icon: "fa-globe-asia"
    items:
      - "Collect and curate datasets for SEA languages"
      - "Support annotation and quality assurance"
      - "Share cultural and linguistic insights"
  - title: "Community & Outreach"
    icon: "fa-users"
    items:
      - "Organize local meetups and events"
      - "Share knowledge through talks"
      - "Connect researchers across the region"
  - title: "New to Research"
    icon: "fa-seedling"
    items:
      - '<a href="/apprenticeship">Join our apprenticeship program</a>'
      - "Participate in community discussions"
      - "Learn through collaborative projects"
---

## Join Our Community

SEACrowd is a grassroots-led community advancing AI for Southeast Asia.

<div class="row g-4 mb-4">
  {% for way in page.ways_to_contribute %}
    <div class="col-md-6">
      <div class="card border-0 bg-light h-100">
        <div class="card-body p-4">
          <h5><i class="fa-solid {{ way.icon }} text-primary me-2"></i>{{ way.title }}</h5>
          <ul class="small mb-0">
            {% for item in way.items %}
              <li>{{ item }}</li>
            {% endfor %}
          </ul>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

### Get Started

1. Read about our [ongoing projects](/projects/#ongoing-projects)
2. Join our [Discord]({{ site.social.discord }}) to connect with the community
3. Subscribe to our [mailing list]({{ site.social.google_group }}) for updates

---

## Contributors

{% assign contributors = site.data.contributors | sort: "name" %}
{% assign contributor_count = contributors | size %}

<div class="alert alert-info" role="alert">
  <strong>{{ contributor_count }} contributors</strong> from across Southeast Asia and beyond
</div>

<ol class="contributors-list">
  {% for member in contributors %}
    {% if member.website != 'none' %}
      <li><a href="{{ member.website }}" target="_blank">{{ member.name }}</a></li>
    {% else %}
      <li>{{ member.name }}</li>
    {% endif %}
  {% endfor %}
</ol>

<style>
.contributors-list {
  columns: 3;
  column-gap: 2rem;
}
.contributors-list li {
  break-inside: avoid;
  margin-bottom: 0.25rem;
}
@media (max-width: 767px) {
  .contributors-list { columns: 1; }
}
@media (min-width: 768px) and (max-width: 991px) {
  .contributors-list { columns: 2; }
}
</style>
