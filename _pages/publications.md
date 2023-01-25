---
title: "VECTR Lab - Publications"
layout: wide_layout
excerpt: "VECTR Lab Publications"
sitemap: false
---

# Publication Highlights

<!-- (For a full list of publications, see [below](#full-list-of-publications)) -->
<!-- or go to [Google Scholar](https://scholar.google.ch/citations?user=TqxYWZsAAAAJ), [ResearcherID](https://www.researcherid.com/rid/D-7763-2012)) -->

<div markdown="0" class="mt-4">
  {% assign number_printed = 0 %}

  {% for publi in site.data.publist %}
    <!---->
    {% if publi.highlight == 1 %}
      {% assign even_odd = number_printed | modulo: 2 %}
      <!---->
      {% if even_odd == 0 %}
        <div class="row">
      {% endif %}
          <div class="col-md-6">
            <div class="card shadow border-secondary mb-4">
              <div class="card-body clearfix">
                <h5 class="card-title"><strong>{{ publi.title }}</strong></h5>
                <div class="py-3 pe-3" style="float: left; width: 33%">
                  <img src="/images/{{ publi.image }}" class="img-fluid rounded">
                </div>
                <p class="card-text">
                  <p>{{ publi.description | markdownify }}</p>
                  <p><em>{{ publi.authors }}</em></p>
                  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
                  {% if publi.important_link %}
                    <a href="{{ publi.important_link.url }}" class="btn btn-info"><u>{{ publi.important_link.display }}</u></a>
                  {% endif %}
                  {% if publi.note %}
                    <p>{{ publi.note | markdownify }}</p>
                  {% endif %}
                </p>
              </div>
            </div>
          </div>
      {% if even_odd == 1 %}
        </div>
      {% endif %}

      {% assign number_printed = number_printed | plus: 1 %}
    {% endif %}

  {% endfor %}

  {% assign even_odd = number_printed | modulo: 2 %}
  {% if even_odd == 1 %}
    </div>
  {% endif %}
</div>
<br>


<!-- <div class="vectr-text-container" markdown="1">

# Full List of Publications
<div markdown="0">
  {% for publi in site.data.publist %}
    {{ publi.title }}<br>
    <em>{{ publi.authors }}</em><br>
    <a href="{{ publi.link.url }}">{{ publi.link.display }}</a><br>
    <br>
  {% endfor %}
</div>

</div> -->
