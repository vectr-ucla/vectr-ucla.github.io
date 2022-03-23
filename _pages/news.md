---
title: "VECTR Lab - News"
layout: text_layout
excerpt: "VECTR Lab News"
sitemap: false
---

# News

{% for article in site.data.news %}
  <p>{{ article.date }}</p>
  <div class="mt-n2 ms-4 mb-4">
    <p>{{ article.headline | markdownify }}</p>
    {% if article.image %}
      <img class="img-fluid rounded" style="max-width: 192px;" src="{{ article.image }}">
    {% endif %}
  </div>
{% endfor %}
