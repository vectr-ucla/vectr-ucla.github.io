---
title: "VECTR Lab - Members"
layout: wide_layout
excerpt: "VECTR Lab Members"
sitemap: false
---

# Lab Members

<!-- {% assign member_types = "faculty,grad,undergrad" | split: ',' %} -->
{% assign member_types = "faculty,grad" | split: ',' %}

{% for member_type in member_types %}

  {% if member_type == "faculty" %}
## Faculty
  {% elsif member_type == "grad" %}
## Graduate Students
  {% elsif member_type == "undergrad" %}
## Undergraduate Students
  {% endif %}

<div markdown="0">
  {% assign number_printed = 0 %}
  {% for member in site.data.members %}
    {% if member.type == member_type %}
      <!---->
      {% assign even_odd = number_printed | modulo: 2 %}
      <!---->
      {% if even_odd == 0 %}
        <div class="row">
      {% endif %}
          <div class="col-sm-6 clearfix mb-4">
            <img src="/images/{{ member.photo }}" class="img-fluid rounded me-2" width="25%" style="float: left">
            <h4 class="mb-4">{{ member.name }}</h4>
            {% assign info_lines = member.info | newline_to_br | strip_newlines | split: '<br />' %}
            <div>
              {% for line in info_lines %}
                <p class="mb-n3">{{ line | markdownify }}</p>
              {% endfor %}
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

{% endfor %}


<!-- ## Alumni
<ul>
  {% for member in site.data.alumni %}
    <li>{{ member.name }}</li>
  {% endfor %}
</ul> -->
