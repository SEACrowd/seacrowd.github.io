---
title: People
permalink: /people/
---

<!-- {% assign people_sorted = site.people | sort: 'joined' %} -->
{% assign people_sorted = site.people | sort: 'sortorder' %}
{% assign role_array = "coreteam|contributor" | split: "|" %}

<h3>Core Team</h3>

<div class="content list people">
  {% for profile in people_sorted %}
      <div class="list-item-people">
        <p class="list-post-title">
          {% if profile.avatar %}
            <a href="{{ site.baseurl }}{{ profile.url }}"><img class="profile-thumbnail" src="{{site.baseurl}}/images/people/{{profile.avatar}}"></a>
          {% else %}
            <a href="{{ site.baseurl }}{{ profile.url }}"><img class="profile-thumbnail" src="http://evansheline.com/wp-content/uploads/2011/02/facebook-Storm-Trooper.jpg"></a>
          {% endif %}
          <a class="name" href="{{ site.baseurl }}{{ profile.url }}">{{ profile.name }}</a>
          <p class="subtitle">{{ profile.job }}</p>
        </p>
      </div>    
  {% endfor %}
</div>

<h3>Contributors</h3>
{% assign contributors = site.data.contributors | sort: "lastname" | ascending%}

<div class="contributors">
{% for member in contributors %}
  {% if member.website != 'none' %}
      <a href="{{ member.website }}"><p>{{ member.firstname }} {{ member.lastname }}</p></a>
    {% else %}
      <p>{{ member.firstname }} {{ member.lastname }}</p>
    {% endif %}
{% endfor %}
</div>

<hr>