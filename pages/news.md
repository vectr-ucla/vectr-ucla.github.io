---
title: "News"
layout: default
excerpt: "VECTR Lab at UCLA."
sitemap: false
---

# News

{% for article in site.data.news %}
  <p markdown="0">
    {{ article.date }} <br>
    <em>{{ article.headline | markdownify}}</em>
  </p>
{% endfor %}
