---
layout: page.liquid
pageTitle: Thoughts, Ideas, and Notes
description: Various personal and class projects I've created over the years.
---

{% for post in collections.update %}
    <h2><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h2>
    <p>{{ post.data.description }}</p>
    <em>{{ post.date | date: "%Y-%m-%d" }}</em>
{% endfor %}