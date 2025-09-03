---
title: News
permalink: /news/
---

# News

Be sure to check here periodically for the latest in SEA research!

<div class="row g-4">
  {% assign sortedNews = site.news | sort: 'date' | reverse %}
  {% for article in sortedNews %}
    <div class="col-12">
      {% include card.html item=article %}
    </div>
  {% endfor %}
</div>
