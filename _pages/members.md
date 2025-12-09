---
title: "VECTR Lab - Members"
layout: wide_layout
excerpt: "VECTR Lab Members"
sitemap: false
---

# Lab Members

<!-- {% assign member_types = "faculty,grad,undergrad" | split: ',' %} -->
{% assign member_types = "faculty,grad,undergrad,alumni" | split: ',' %}

{% for member_type in member_types %}

  {% if member_type == "faculty" %}
## Faculty
  {% elsif member_type == "grad" %}
## Graduate Students
  {% elsif member_type == "undergrad" %}
## Undergraduate Students
{% elsif member_type == "alumni" %}
## Alumni
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

  <!-- Adds list of undergrads after pictures -->
  {% if member_type == "undergrad" %}
    {% assign list_only = site.data.members | where: "type", "undergrad_list_only" %}
    {% if list_only.size > 0 %}
    <!-- <h4 class="mt-2">Additional Undergraduate Students</h4> -->
    <ul class=" mb-2 fs-5 ps-0">
      {% for member in list_only %}
        <li>{{ member.name }}</li>
      {% endfor %}
    </ul>
    {% endif %}
  {% endif %}
  </div>

{% endfor %}


<!-- ## Alumni
<ul>
  {% for member in site.data.alumni %}
    <li>{{ member.name }}</li>
  {% endfor %}
</ul> -->
