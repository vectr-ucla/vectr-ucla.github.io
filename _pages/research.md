---
title: "VECTR Lab - Research"
layout: wide_layout
excerpt: "VECTR Lab Research"
sitemap: false
---

# Research Highlights

<div markdown="0" class="mt-4">
  {% assign number_printed = 0 %}

  <div class="container">
  <div class="row justify-content-md-center">
  {% for res in site.data.research %}
    <!-- <div class="row"> -->
      <div class="col-md-6">
        <div class="card shadow border-secondary mb-4">
          <div class="card-body clearfix">
            <h5 class="card-title"><strong>{{ res.title }}</strong></h5>
            <div class="py-3 pe-3" style="float: left; width: 55%">
              <img src="/images/{{ res.image }}" class="img-fluid rounded">
            </div>
            <p class="card-text">
              <p><em>{{ res.researchers }}</em></p>
              <p>{{ res.description | markdownify }}</p>
              <p><strong><a href="{{ res.link.url }}">{{ res.link.display }}</a></strong></p>
              {% if res.note %}
                <p>{{ res.note | markdownify }}</p>
              {% endif %}
            </p>
          </div>
        </div>
      </div>
    <!-- </div> -->
  {% endfor %}
  </div>
  </div>
</div>
