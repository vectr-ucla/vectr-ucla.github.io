---
title: "VECTR Lab - Publications"
layout: wide_layout
excerpt: "VECTR Lab Publications"
sitemap: false
---

# Publications
For a full list of publications, go to [Google Scholar](https://scholar.google.com/citations?user=9cz0xFMAAAAJ&hl=en)

<div class="col-md-10">
  <div class="vectr-text-container">
    <ul>
      {% for publi in site.data.publist %}
        <li>
          <!-- {{ publi.title }} {{publi.year}}<br> -->
          {{ publi.authors }}, <a href="{{ publi.link.url }}">{{ publi.title }}</a>, <br>
          {% if publi.link.display %}
            <em> {{publi.link.display}}, </em>
          {% endif %}
          {{publi.year}} 
          <!-- <a href="{{ publi.link.url }}">{{ publi.link.display }}</a><br> -->
          <!-- {% if publi.note %}
          , {{ publi.note | markdownify }}
          {% endif %}  -->
          <br>
          <br>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>