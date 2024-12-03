---
layout: page.liquid
pageTitle: Thoughts, Ideas, and Notes
description: Random Notes and Ideas I've Made Public
---

{% for post in collections.update | sortByDateDesc %}
    <h2><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h2>
    <p>{{ post.data.description }}</p>
    <em>{{ post.date | date: "%Y-%m-%d" }}</em>
{% endfor %}