---
title: Projects
permalink: /projects/
---

<div class="container my-5">
  <div class="row">
    <div class="col-12">
      <h1 class="fw-bold mb-4">Projects</h1>
      <p class="text-muted mb-5">An archive of projects that the community has created.</p>
      
      <div class="row g-4">
        {% for post in site.posts %}
          {% if post.categories contains 'project' %}
          <div class="col-12">
            {% include card.html post=post type='project' %}
          </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
