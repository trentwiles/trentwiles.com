---
layout: page.liquid
pageTitle: Travel
description: Travel Highlights (to be updated soon!)
---

<section id="posts">
    {% for post in collections.travel | reverse %}
        <aside>
            <h3><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></h3>
            <p>{{ post.data.description }}</p>
            <sup>{{ post.date | date: "%Y-%m-%d" }}</sup>
        </aside>
    {% endfor %}
</section>