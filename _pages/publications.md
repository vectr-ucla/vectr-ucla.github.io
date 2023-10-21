---
title: "VECTR Lab - Publications"
layout: wide_layout
excerpt: "VECTR Lab Publications"
sitemap: false
---

# Full List of Publications

<div class="col-md-10">
  <div class="vectr-text-container">
    <ul>
      {% for publi in site.data.publist %}
        <li>
          <!-- {{ publi.title }} {{publi.year}}<br> -->
          {{ publi.authors }} <a href="{{ publi.link.url }}">{{ publi.title}}</a> <br>
          {% if publi.link.display %}
            <em> {{publi.link.display}} </em>
          {% endif %}
          {{publi.year}} <br>
          <!-- <a href="{{ publi.link.url }}">{{ publi.link.display }}</a><br> -->
          {% if publi.note %}
            <p>{{ publi.note | markdownify }}</p>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  </div>
</div>