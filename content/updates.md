---
layout: page.liquid
pageTitle: Thoughts, Ideas, and Notes
description: Random Notes and Ideas I've Made Public
---
<section id="posts">
    <div class="terminal-timeline">
        {% for post in collections.update | sortByDateDesc %}
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