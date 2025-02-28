---
layout: page.liquid
pageTitle: Travel
description: Travel Highlights (to be updated soon!)
---
<h2>{{ pageTitle }}</h2>
<section id="posts">
    <div class="terminal-timeline">
        {% for post in collections.travel | sortByDateDesc %}
        <div class="terminal-card">
        <header><a href="{{ post.url }}">{{ post.data.pageTitle }}</a></header>
            <div>
                <p>{{ post.data.description }}</p>
                <sup>{{ post.date | date: "%Y-%m-%d" }}</sup>
            </div>
        </div>
        {% endfor %}
    </div>
</section>