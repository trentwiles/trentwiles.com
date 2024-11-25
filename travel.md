---
layout: page.liquid
pageTitle: Travel
description: Travel Highlights
---

{% for post in collections.travel %}
    <h2><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h2>
    <p>{{ post.data.description }}</p>
    <em>{{ post.date | date: "%Y-%m-%d" }}</em>
{% endfor %}