---
title: "VECTR Lab - Publications"
layout: default
excerpt: "VECTR Lab -- Publications."
sitemap: false
---


# Publications

## Group highlights

<!-- (For a full list of publications and patents see [below](#full-list-of-publications) or go to [Google Scholar](https://scholar.google.ch/citations?user=TqxYWZsAAAAJ), [ResearcherID](https://www.researcherid.com/rid/D-7763-2012)) -->

<div markdown="0">
  {% assign number_printed = 0 %}

  {% for publi in site.data.publist %}
    <!---->
    {% if publi.highlight == 1 %}
      {% assign even_odd = number_printed | modulo: 2 %}
      <!---->
      {% if even_odd == 0 %}
        <div class="row">
      {% endif %}
          <div class="col-sm-6 clearfix">
            <div class="card bg-panel-bg">
              <div class="card-body">
                <h5 class="card-title">{{ publi.title }}</h5>
                <img src="/images/{{ publi.image }}" class="img-fluid" width="33%" style="float: left" />
                <p class="card-text">
                  <p>{{ publi.description | markdownify }}</p>
                  <p><em>{{ publi.authors }}</em></p>
                  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
                  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
                  <p>{{ publi.news2 | markdownify }}</p>
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

<p> &nbsp; </p>


<!-- ## Patents
<em>Milan P Allan, S Gröblacher, RA Norte, M Leeuwenhoek</em><br />Novel atomic force microscopy probes with phononic crystals<br /> PCT/NL20-20/050797 (2020)

<em>Milan P Allan</em><br /> Methods of manufacturing superconductor and phononic elements <br /> <a href="https://patents.google.com/patent/US10439125B2/en?inventor=Milan+ALLAN&oq=inventor:(Milan+ALLAN)">US10439125B2 (2016)</a> -->

## Full List of publications

{% for publi in site.data.publist %}

  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %}
