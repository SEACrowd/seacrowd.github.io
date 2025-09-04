---
title: Contribute
description: Join our grassroots community building AI tools and resources for Southeast Asia
permalink: /contribute.html
---

## Join Our Community

SEACrowd is a grassroots-led community advancing AI for Southeast Asia. Find your role based on your
background and interests.

### Ways to Contribute

<div class="row g-4 mb-5">
  <div class="col-lg-4 col-md-6">
    <div class="card border-0 bg-light h-100">
      <div class="card-body p-4 text-center">
        <div class="mb-3">
          <i class="fas fa-globe-asia fa-2x text-primary"></i>
        </div>
        <h5 class="card-title">🗣️ SEA Languages & Culture</h5>
        <p class="card-text text-muted mb-3">Speak SEA languages or familiar with the region?</p>
        <ul class="list-unstyled text-start small">
          <li class="mb-2">• Help collect and curate datasets for your languages</li>
          <li class="mb-2">• Support annotation and quality assurance efforts</li>
          <li>• Share cultural context and linguistic insights</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="col-lg-4 col-md-6">
    <div class="card border-0 bg-light h-100">
      <div class="card-body p-4 text-center">
        <div class="mb-3">
          <i class="fas fa-graduation-cap fa-2x text-primary"></i>
        </div>
        <h5 class="card-title">🎓 Academic Researcher</h5>
        <p class="card-text text-muted mb-3">Research experience in AI/ML/NLP?</p>
        <ul class="list-unstyled text-start small">
          <li class="mb-2">• Contribute to model training and evaluation</li>
          <li class="mb-2">• Collaborate on publications and papers</li>
          <li class="mb-2">• Mentor through our <a href="/apprenticeship.html">apprenticeship program</a></li>
          <li>• Guide early-career researchers</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="col-lg-4 col-md-6">
    <div class="card border-0 bg-light h-100">
      <div class="card-body p-4 text-center">
        <div class="mb-3">
          <i class="fas fa-code fa-2x text-primary"></i>
        </div>
        <h5 class="card-title">💻 Developer/Engineer</h5>
        <p class="card-text text-muted mb-3">Technical skills and coding experience?</p>
        <ul class="list-unstyled text-start small">
          <li class="mb-2">• Improve our codebase and technical infrastructure</li>
          <li class="mb-2">• Develop new tools and evaluation frameworks</li>
          <li>• Support model deployment and optimization</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="col-lg-4 col-md-6">
    <div class="card border-0 bg-light h-100">
      <div class="card-body p-4 text-center">
        <div class="mb-3">
          <i class="fas fa-hand-holding-usd fa-2x text-primary"></i>
        </div>
        <h5 class="card-title">💰 Funding/Resources</h5>
        <p class="card-text text-muted mb-3">Have resources to support our mission?</p>
        <ul class="list-unstyled text-start small">
          <li class="mb-2">• Fund SEACrowd community initiatives</li>
          <li class="mb-2">• Support research by our <a href="/about.html">core team</a></li>
          <li>• Sponsor events and workshops</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="col-lg-4 col-md-6">
    <div class="card border-0 bg-light h-100">
      <div class="card-body p-4 text-center">
        <div class="mb-3">
          <i class="fas fa-chalkboard-teacher fa-2x text-primary"></i>
        </div>
        <h5 class="card-title">📢 Educator/Leader</h5>
        <p class="card-text text-muted mb-3">Teaching or community leadership experience?</p>
        <ul class="list-unstyled text-start small">
          <li class="mb-2">• Share knowledge through talks and workshops</li>
          <li class="mb-2">• Organize local meetups and events</li>
          <li class="mb-2">• Connect researchers across the region</li>
          <li>• Promote SEACrowd initiatives</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="col-lg-4 col-md-6">
    <div class="card border-0 bg-light h-100">
      <div class="card-body p-4 text-center">
        <div class="mb-3">
          <i class="fas fa-seedling fa-2x text-primary"></i>
        </div>
        <h5 class="card-title">🌟 New to Research</h5>
        <p class="card-text text-muted mb-3">Eager to learn and contribute?</p>
        <ul class="list-unstyled text-start small">
          <li class="mb-2">• Join our <a href="/apprenticeship.html">apprenticeship program</a></li>
          <li class="mb-2">• Participate in community discussions</li>
          <li>• Learn through collaborative projects</li>
        </ul>
      </div>
    </div>
  </div>
</div>

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
