---
title: News
permalink: /news/
---

<div class="container my-5">
  <div class="row">
    <div class="col-12">
      <h1 class="fw-bold mb-4">Latest News</h1>
      <p class="text-muted mb-5">Be sure to check here periodically for the latest in SEA research!</p>
      
      <div class="row g-4">
        {% for post in site.posts %}
          {% if post.categories contains 'news' %}
          <div class="col-12">
            {% include card.html post=post type='news' %}
          </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>
