---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

# About me {#about-me}
I am a fourth-year undergraduate student at **Zhejiang University**, majoring in Biomedical Engineering (Instrument Engineering) within the Faculty of Information Technology.

During my undergraduate studies, I have been fortunate to conduct research under the guidance of [**Prof. Xiangyu Yue**](https://xyue.io/) (<span class="affiliation"><img class="affiliation__logo" src="{{ '/images/CUHK.png' | relative_url }}" alt="" aria-hidden="true">CUHK MMLab</span>) and [**Prof. Yingke Xu**](https://person.zju.edu.cn/en/yingkexu) (<span class="affiliation"><img class="affiliation__logo" src="{{ '/images/zju.png' | relative_url }}" alt="" aria-hidden="true">Zhejiang University</span>).

# Research Interests {#research-interests}
My research focuses on **Visual Intelligence**, with particular interests in two directions:

- **Unified Multimodal Models:** Connecting multimodal understanding and generation.
- **Unified Visual Representation Learning:** Bridging visual appearance and semantic understanding.

# News {#news}
{% include news.html %}

# Publications {#publications}
{% include publications.html %}

