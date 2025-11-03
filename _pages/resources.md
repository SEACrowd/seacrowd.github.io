---
layout: page
title: Resources
permalink: /resources
---

We open-source datasets, dataloaders, models, and other resources from our [projects](/projects) and flagship [apprenticeship program](/apprenticeship). Follow our [HuggingFace](https://huggingface.co/SEACrowd) or [Github](https://github.com/seacrowd) for updates.

For resources associated with our papers and preprints, please visit our [publications](/publications) page and look for "Resources" link. We also curate [papers by our affiliated members](/publications#affiliated-publications) that advance our mission of building AI to represent Southeast Asia.

## HuggingFace Collections

<div class="row g-4 mb-3">
  {% for collection in site.data.resources.collections %}
  <div class="col-lg-6">
    <article class="card card-clickable h-100 position-relative">
      <a href="{{ collection.url }}" class="stretched-link text-reset" target="_blank" rel="noopener noreferrer nofollow">
        <div class="card-body">
          <h3 class="card-title mt-0">{{ collection.title }}</h3>
          <div class="card-meta text-muted small mb-2">
            <span class="meta-item">
              <i class="fas fa-layer-group" aria-hidden="true"></i>
              Collection
            </span>
          </div>
          {% for badge in collection.tags %}
          <span class="badge bg-secondary me-1">{{ badge }}</span>
          {% endfor %}
          <p class="card-text text-muted mt-2">
            {{ collection.description }}
          </p>
        </div>
      </a>
    </article>
  </div>
  {% endfor %}
</div>

<div class="text-center mb-5">
  <a href="{{ site.data.resources.collections_button.url }}" class="btn btn-outline-primary" target="_blank" rel="noopener noreferrer nofollow">
    <i class="{{ site.data.resources.collections_button.icon }} me-2"></i>
    {{ site.data.resources.collections_button.text }}
  </a>
</div>

## HuggingFace Resources

<div class="row g-4 mb-5">
  {% for resource in site.data.resources.resources %}
  <div class="col-lg-4">
    <article class="card card-clickable h-100 position-relative">
      <a href="{{ resource.url }}" class="stretched-link text-reset" target="_blank" rel="noopener noreferrer nofollow">
        <div class="card-body text-center">
          <i class="{{ resource.icon }} fa-2x text-secondary mb-2"></i>
          <h5 class="card-title">{{ resource.title }}</h5>
          <p class="card-text text-muted">
            {{ resource.description }}
          </p>
        </div>
      </a>
    </article>
  </div>
  {% endfor %}
</div>
