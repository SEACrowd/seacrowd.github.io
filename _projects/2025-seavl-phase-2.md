---
title: SEA-VL Phase 2
thumbnail: seavl-phase2-banner.png
description: Develop and benchmark an open-source state-of-the-art vision language model (VLM) for Southeast Asia
fromDate: 2025-03-01
status: ongoing
keywords:
  [
    "SEA-VL",
    "vision language model",
    "Southeast Asia",
    "AI",
    "VLM",
    "machine learning",
    "cultural AI",
    "image recognition",
    "multilingual AI"
  ]
---

<div class="alert alert-warning text-center" role="alert">
  Open contributions for tasks 2, 3, 4, and 5 are closed. For faster updates, please consider joining us on <a href="{{ site.social.discord }}" class="alert-link">Discord</a>.
</div>

After the success of [SEA-VL Phase 1](/projects/2025-seavl-phase-1), we are proud to launch **SEA-VL Phase 2**!

We believe it's high time to create a model that truly understands Southeast Asian culture and language. We want the model to reflect the visual and linguistic richness of the SEA region through diverse contributions: high-quality data curation, annotation, prompting, model training, and evaluation.

## Contribution Guide

**Earn points for every contribution and unlock rewards:**

- **200+ points**: Certificate of participation + merchandise (t-shirt and keychain)
- **300+ points**: Co-authorship in the final project paper (_not_ the experimental paper)

**How to contribute:** SEA-VL Phase 2 has five main tasks. Choose any task that aligns with your interests or expertise.

<div class="alert alert-info" role="alert">
  📖 Read <a href="https://docs.google.com/document/d/e/2PACX-1vRRJmadtbTdjumIFyhx5MdpRwMOk0Al7WSUReYyhbD-3NpGxu8PlRPTNgobFPJSDelqjhWmOIJSW1lu/pub" class="alert-link">the full contributor guidelines</a> and ask questions in our <a href="https://discord.gg/XXRHFuvkTA" class="alert-link">Discord</a>
</div>

### Task 1: Submit a culturally-relevant image with description for SEA

To build the vision-language model, we need a compilation of culturally relevant images representing
all 11 Southeast Asian countries.

Any image that reflects an aspect of SEA culture is considered culturally-relevant. This could
include

- food and cuisines (e.g., nasi goreng, pho, green curry)
- locations (e.g., Manila’s Escolta Street
- events (e.g., Lunar New Year festivities)
- everyday cultural practices (e.g., eating with your hands).

As long as it connects to SEA culture, it’s a great fit. You may check this [resource](https://huggingface.co/datasets/SEACrowd/sea-vl_crowdsourcing) to see
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

### Task 3: Translate Benchmark Datasets [CLOSED]

To ensure the proper evaluation and testing of vision language capabilities, we need help
translating prompts from existing vision language model benchmarks, such as the Aya Vision Benchmark
by Cohere Labs.

Contributors for this task will translate the English prompts into any one of the following
languages in which they are fluent/native speakers: _Thai, Standard Malay, Filipino/Tagalog, Lao,
Khmer, Tamil, Mandarin Chinese, Burmese, Tetun, Bruneian Malay_.

We need **three (03)** contributors per language for this task. Go to this
[form](https://docs.google.com/forms/d/e/1FAIpQLSdbcxgN_sOqDResVkcj3s7IkYTWI8WDV6dZw0mZOIkH7puNSg/viewform?usp=dialog)
to contribute.

### Task 4: Submit Visual Questions for Multicultural Images [CLOSED]

To evaluate the visual understanding of the models we will train, we need to compile a dataset of
high-quality questions derived from cultural images from SEA.

Contributors for this task will create original questions related to a given image (e.g., “What
sport is played in this image?”) in any of the following languages in which they are fluent/native
speakers: _Indonesian, Thai, Standard Malay, Filipino/Tagalog, Tamil, Chinese Mandarin, Vietnamese,
Burmese, Lao, Khmer, Tetun, Bruneian Malay_

Go to this
[form](https://docs.google.com/forms/d/e/1FAIpQLSdbcxgN_sOqDResVkcj3s7IkYTWI8WDV6dZw0mZOIkH7puNSg/viewform?usp=dialog)
to contribute.

### Task 5: Submit High-Quality Text Prompts for Image Generation [CLOSED]

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

## FAQs

<div class="accordion accordion-flush" id="faqAccordion">
  <div class="accordion-item">
    <h3 class="accordion-header" id="faq1">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
        What qualifies as a "culturally-relevant image"?
      </button>
    </h3>
    <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Any image that reflects an aspect of SEA culture is welcome! This could include food (e.g., eating Nasi Goreng), locations (e.g., Manila's Escolta Street), events (e.g., Lunar New Year festivities), or everyday cultural practices (e.g., eating with your hands). As long as it connects to SEA culture, it's a great fit!
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h3 class="accordion-header" id="faq2">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
        Can I submit an image I posted online if I still own the copyright?
      </button>
    </h3>
    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Yes, as long as you took the image and still hold the copyright. All images will be openly licensed under the CC-BY-SA 4.0 license, so please ensure you own full rights to them before submission.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h3 class="accordion-header" id="faq3">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
        Do images need to be high quality?
      </button>
    </h3>
    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        No, phone-quality images are perfectly acceptable as long as they're not blurry or obstructed.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h3 class="accordion-header" id="faq4">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
        Can I submit images that reflect SEA culture but were taken outside of SEA?
      </button>
    </h3>
    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Yes, images taken abroad are welcome if they are culturally relevant.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h3 class="accordion-header" id="faq5">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
        Do I have to be a resident of the SEA culture represented in the photo I submit?
      </button>
    </h3>
    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        No, you do not.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h3 class="accordion-header" id="faq6">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
        My native language is not a SEA indigenous language. Can I still submit my SEA culturally-relevant images?
      </button>
    </h3>
    <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="faq6" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Yes, you can select "Other..." as your native language in the submission form.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h3 class="accordion-header" id="faq7">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
        Do you have materials we can use to promote SEA-VL to our friends?
      </button>
    </h3>
    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="faq7" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Coming soon!
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h3 class="accordion-header" id="faq8">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
        Will I be co-author on ACL 2026 papers if I only contribute to open tasks?
      </button>
    </h3>
    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="faq8" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        No, contributors to the open tasks will not be listed on the ACL 2026 experimental papers. Those papers will primarily highlight model development results. However, if you reach 300 points, you will be credited as a co-author in our final organizational-wide publication, which will summarize the entire SEA-VL and other SEACrowd projects in 2025. This paper will be published on the SEACrowd website and arXiv, recognizing all community contributors who helped build the dataset and evaluation resources.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h3 class="accordion-header" id="faq9">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
        Have more questions?
      </button>
    </h3>
    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="faq9" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Join our <a href="{{ site.social.discord }}">Discord server</a>, ask us on #sea-vl or #discussion-forum, and we'll be happy to help!
      </div>
    </div>
  </div>
</div>
