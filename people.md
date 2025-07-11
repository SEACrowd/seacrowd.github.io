---
title: People
permalink: /people/
---

# **People**
From 11 initial members when we launched in 2023, to over 400 community participants as of 2025, SEACrowd is built on a strong foundation of active contributors. This page lists all who have contributed to the SEACrowd community, from Southeast Asia and to the rest of the world. 

<!-- {% assign people_sorted = site.people | sort: 'joined' %} -->
{% assign people_sorted = site.people | sort: 'sortorder' %}
{% assign role_array = "coreteam|contributor" | split: "|" %}

<h3>Core Team</h3>
The members who keep the community running.

<div class="content list people">
  {% for profile in people_sorted %}
      <div class="list-item-people">
        <p class="list-post-title">
          {% if profile.avatar %}
            <!--<a href="{{ site.baseurl }}{{ profile.url }}"><img class="profile-thumbnail" src="{{site.baseurl}}/images/people/{{profile.avatar}}"></a>-->
            <a href="{{ profile.site }}" target="_blank"><img class="profile-thumbnail" src="{{site.baseurl}}/images/people/{{profile.avatar}}"></a>
          {% else %}
            <a href="{{ site.baseurl }}{{ profile.url }}"><img class="profile-thumbnail" src="{{site.baseurl}}/images/people/aji-hd.jpg"></a>
          {% endif %}
          <!--<a class="name" href="{{ site.baseurl }}{{ profile.url }}">{{ profile.name }}</a>-->
          <a class="name" href="{{ profile.site }}" target="_blank"><p class="nametitle">{{ profile.name }}</p></a>
          <p class="subtitle">{{ profile.job }}</p>
        </p>
      </div>    
  {% endfor %}
</div>

<h3>Contributors</h3>
Researchers, students, professors, professionals, and community members who have contributed to a project by SEACrowd.
{% assign contributors = site.data.contributors | sort: "name" | ascending%}

<div class="contributors">
{% for member in contributors %}
  {% if member.website != 'none' %}
      <a href="{{ member.website }}" target="_blank"><p>{{ member.name }}</p></a>
    {% else %}
      <p>{{ member.name }}</p>
    {% endif %}
{% endfor %}
</div>

<br>