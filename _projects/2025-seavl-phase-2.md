---
title: SEA-VL Phase 2
tags:
  - project
header-img: seavl-phase2-banner.png
description: Large-scale Multimodal Models for Southeast Asia.
fromDate: 2025-03-01
toDate: 2025-11-08
---

<div class="alert alert-warning text-center" role="alert">
  <strong>This is an ongoing project.</strong><br>
  This page will be updated as new information is released. For faster updates, please consider joining us on <a href="https://discord.gg/XXRHFuvkTA" class="alert-link">Discord</a>.
</div>

## About the Project

After the success of [SEA-VL Phase 1](https://seacrowd.github.io/seavl-dataset/), we are proud to
launch **SEA-VL Phase 2**!

For Phase 2, we have an even bigger ambition:

> Build an open-source state-of-the-art vision language model (VLM) for Southeast Asia

We believe it’s high time to create a model that truly understands Southeast Asia culture and
language, the way we see it. We want the model to reflect the visual and linguistic richness of the
SEA region. This effort requires diverse contributions: high-quality data curation and annotation,
prompting, model training, evaluation, and more.

## Contribution Guide

Every contribution to any SEA-VL Phase 2 task will earn participation points.

- Reaching >= 200 points guarantees a certificate of participation and merchandise (t-shirt and
  keychain)
- Reaching >= 300 points will earn co-authorship in the final project paper.

SEA-VL Phase 2 is split into five main tasks described below. You can contribute to any task that
aligns with your interest or expertise.

**Important:** Comprehensive contributor guidelines can be found
[here](https://docs.google.com/document/d/e/2PACX-1vRRJmadtbTdjumIFyhx5MdpRwMOk0Al7WSUReYyhbD-3NpGxu8PlRPTNgobFPJSDelqjhWmOIJSW1lu/pub).
We also briefly describe the tasks below.

If you have any questions about the process, please join our Discord to ask questions.

### Task 1: Submit a culturally-relevant image with description for SEA

To build the vision-language model, we need a compilation of culturally relevant images representing
all 11 Southeast Asian countries.

Any image that reflects an aspect of SEA culture is considered culturally-relevant. This could
include food and cuisines (e.g., nasi goreng, pho, green curry), locations (e.g., Manila’s Escolta
Street), events (e.g., Lunar New Year festivities), or everyday cultural practices (e.g., eating
with your hands). As long as it connects to SEA culture, it’s a great fit.

You may check this [resource](https://huggingface.co/datasets/SEACrowd/sea-vl_crowdsourcing) to see
what images are fit for this task.

Go to this
[form](https://docs.google.com/forms/d/e/1FAIpQLScHKqaNlh-SvTD75AtWKkNhFvPNXXDy1eFyrqy3XGXq7M15Vw/viewform)
to submit your images.

For bulk image upload, follow this [guide](https://github.com/SEACrowd/sea-vl-image-collection/)!

### Task 2: Review Image-Description Pairs

To ensure quality images for the dataset used in training the model, we need local annotators to
rate the submitted images from Task 1.

Contributors for this task must first pass this
[short screening test](https://forms.gle/p1MmJcKtier9tYZT9). Check our annotation guideline
[here](https://docs.google.com/document/d/1Akyd__e3hJdBvJMey69ykSScQJXVMlD0PJNxJf4D-VI/edit?usp=sharing)
to learn more and to apply for the screening test. You will receive a link to the annotation
platform if you pass the screening test.

### Task 3: Translate Benchmark Datasets

To ensure the proper evaluation and testing of vision language capabilities, we need help
translating prompts from existing vision language model benchmarks, such as the Aya Vision Benchmark
by Cohere Labs.

Contributors for this task will translate the English prompts into any one of the following
languages in which they are fluent/native speakers: _Thai, Standard Malay, Filipino/Tagalog, Lao,
Khmer, Tamil, Mandarin Chinese, Burmese, Tetun, Bruneian Malay_.

We need **three (03)** contributors per language for this task. Go to this
[form](https://docs.google.com/forms/d/e/1FAIpQLSdbcxgN_sOqDResVkcj3s7IkYTWI8WDV6dZw0mZOIkH7puNSg/viewform?usp=dialog)
to contribute.

### Task 4: Submit Visual Questions for Multicultural Images

To evaluate the visual understanding of the models we will train, we need to compile a dataset of
high-quality questions derived from cultural images from SEA.

Contributors for this task will create original questions related to a given image (e.g., “What
sport is played in this image?”) in any of the following languages in which they are fluent/native
speakers: _Indonesian, Thai, Standard Malay, Filipino/Tagalog, Tamil, Chinese Mandarin, Vietnamese,
Burmese, Lao, Khmer, Tetun, Bruneian Malay_

Go to this
[form](https://docs.google.com/forms/d/e/1FAIpQLSdbcxgN_sOqDResVkcj3s7IkYTWI8WDV6dZw0mZOIkH7puNSg/viewform?usp=dialog)
to contribute.

### Task 5: Submit High-Quality Text Prompts for Image Generation

To evaluate the image generation capabilities of the models we will train, we need to compile a
dataset of high-quality English-only prompts at three complexity levels.

To ensure the quality of the prompts, we need contributors who are natives or extremely familiar
with the cultures of the SEA countries (_Indonesia, Singapore, Philippines, Thailand, Malaysia,
Vietnam, Brunei, Timor Leste, Cambodia, Laos, Myanmar_)

Example prompts for the Indonesian culture:

- Level 1 (Easy) - _“Draw an image of people drinking cendol.”_
- Level 2 (Medium) - _“Draw an image of people drinking cendol with durian topping.”_
- Level 3 (Hard) - _“Draw an image of people drinking cendol with durian topping while wearing
  kebaya.”_

Go to this
[form](https://docs.google.com/forms/d/e/1FAIpQLSdbcxgN_sOqDResVkcj3s7IkYTWI8WDV6dZw0mZOIkH7puNSg/viewform?usp=dialog)
to contribute.

### Task 6: Submit High-Quality Text Prompts

_(To be opened at a later date)_

## Contribution Point System for Tasks

Each task has its corresponding point-per-submission, calibrated for task difficulty and its
relation to a specific SEA country culture.

We give more weight to submissions (e.g., culturally relevant images for Task 1) related to Brunei,
East Timor, Cambodia, Laos, and Myanmar, as they are heavily underrepresented compared to the other
countries. We also want contributors from these countries to reach the contribution threshold
faster.

| Tasks                                                         | Indonesia, Singapore, Philippines | Thailand, Malaysia, Vietnam | Brunei, East Timor, Cambodia, Laos, Myanmar |
| ------------------------------------------------------------- | --------------------------------- | --------------------------- | ------------------------------------------- |
| Task 1: Submit a SEA Culturally-Relevant Image                | 0.5                               | 1                           | 3                                           |
| Task 2: Review Image-Description Pairs                        | 1                                 | 1                           | 1                                           |
| Task 3: Translate Benchmark Datasets                          | 1                                 | 1                           | 1.5                                         |
| Task 4: Submit Visual Questions for Multicultural Images      | 1.5                               | 1.5                         | 2                                           |
| Task 5: Submit High-Quality Text Prompts for Image Generation | 1                                 | 1                           | 1.5                                         |

Remember, reaching **200 or more points** will guarantee a certificate of participation and
merchandise (t-shirt and keychain), while reaching **300 or more points** will earn co-authorship in
the final project paper.

The contribution tracking can be viewed
[here](https://docs.google.com/spreadsheets/d/e/2PACX-1vTe_BZt8O7GJMMqZcwvifvhScIVOObA7TOZkxxbjCl-3ZnkhjEy0RrmJWCjhgW_69y5Urg5g4V_Hr8F/pubhtml?gid=1432901868&single=true),
where it is updated every weekend.

## Project Timeline

- May 8, 2025 - Project public launch. Contributions for Tasks 1, 2, 3, 4, and 5 are open.
- November 8, 2025 - End of public contributions to Tasks 1, 2, 3, 4, and 5.
- January 2026 - Prepare models, data, and multiple paper releases.
- February 2026 - Prepare experiment paper submissions to ACL 2026. Publication of the project paper
  on the SEACrowd website and arXiv.

## Join the Community!

Check out our [GitHub](https://github.com/SEACrowd) page, and join our
[Discord server](https://discord.gg/XXRHFuvkTA). Everyone is welcome to discuss and ask questions
there!

---

## FAQs

1.  What qualifies as a _“culturally-relevant image”_?
    - Any image that reflects an aspect of SEA culture is welcome! This could include food (e.g.,
      eating Nasi Goreng), locations (e.g., Manila’s Escolta Street), events (e.g., Lunar New Year
      festivities), or everyday cultural practices (e.g., eating with your hands). As long as it
      connects to SEA culture, it’s a great fit!

2.  Can I submit an image I posted online if I still own the copyright to it?
    - Yes, as long as you took the image and still hold the copyright.
    - All images will be openly licensed under the CC-BY-SA 4.0 license, so please ensure you own
      full rights to them before submission.

3.  Do images need to be high quality?
    - No, phone-quality images are perfectly acceptable as long as they’re not blurry or obstructed.

4.  Can I submit images that reflect SEA culture but were taken outside of SEA?
    - Yes, images taken abroad are welcome if they are culturally relevant.

5.  Do I have to be a resident of the SEA culture represented in the photo I submit?
    - No, you do not.
6.  My native language is not a SEA indigenous language. Can I still submit my SEA
    culturally-relevant images?
    - Yes, you can select Other... as your native language in the submission form.

7.  Do you have some materials we can use to promote SEA-VL to our friends?
    - Coming soon!

8.  If I contribute to the open tasks but don't participate in the modeling or experiments, will I
    be listed as a co-author on the paper(s) submitted to ACL 2026?
    - No, contributors to the open tasks will not be listed on the ACL 2026 experimental papers.
      Those papers will primarily highlight model development results. However, if you reach 300
      points, you will be credited as a co-author in our final organizational-wide publication,
      which will summarize the entire SEA-VL and other SEACrowd projects in 2025. This paper will be
      published on the SEACrowd website and arXiv, recognizing all community contributors who helped
      build the dataset and evaluation resources.
9.  Have more questions?
    - Join our [Discord server](https://discord.gg/XXRHFuvkTA), ask us on #sea-vl or
      #discussion-forum, and we’ll be happy to help!
