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

# 🍀 About me {#about-me}
I am a fourth-year undergraduate student at **Zhejiang University**, majoring in Biomedical Engineering (Instrument Engineering) within the Faculty of Information Technology.

During my undergraduate studies, I have been fortunate to conduct research under the guidance of [**Prof. Xiangyu Yue**](https://xyue.io/)(CUHK MMLab) and [**Prof. Yingke Xu**](https://person.zju.edu.cn/en/yingkexu)(Zhejiang University).

📧 My email is **ruiqiyang0516 [at] gmail.com**

# ⛱️ Research Interests {#research-interests}
My research primarily focuses on **Visual Understanding**, with interests spanning three directions:

- **Multimodal Large Models:** Visual-semantic alignment and unified multimodal understanding and generation.
- **AI4SCI:** Learning-based image reconstruction and super-resolution for scientific imaging.
- **Agent Systems:** Intelligent agents for understanding the world.

# 📢 News {#news}
{% include news.html %}

# 📝 Publications {#publications}
**One Unified Representation: Resolving the Appearance-Semantics Dilemma via Structural Regularization**  
**Ruiqi Yang**, Fei Zhou, Yi Zhang, Liang Li, Xiangyu Yue  
*NeurIPS 2026* · **Coming soon**

