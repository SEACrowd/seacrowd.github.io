---
title: News
permalink: /news/
description: Updates on SEACrowd and SEA AI research. Be sure to check here periodically!
---

<div class="row g-4">
  {% assign sortedNews = site.news | sort: 'date' | reverse %}
  {% for article in sortedNews %}
    <div class="col-12">
      {% include card.html item=article type="news" %}
    </div>
  {% endfor %}
</div>
