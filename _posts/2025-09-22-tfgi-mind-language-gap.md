---
layout: post
title: "Mind the Language Gap: Building an Inclusive AI Future for Southeast Asia"
description: "Southeast Asia's AI future depends on closing the language gap, ensuring that the region's rich linguistic and cultural diversity is reflected in the data and models driving technological progress. Grassroots initiatives like SEACrowd show that inclusive, community-driven AI is not only possible but essential for equitable digital development."
date: 2025-09-22
featured: false
thumbnail: tfgi-language-gap/thumbnail.jpg
authors:
  - Onno P. Kampman
  - Holy Lovenia
tags:
  - opinion
  - cross-posting
---

_Originally posted as a perspectives piece on [Tech for Good Institute](https://techforgoodinstitute.org/blog/perspectives/mind-the-language-gap-building-an-inclusive-ai-future-for-southeast-asia/)_

Southeast Asia’s (SEA) digital ambitions are accelerating. Governments across the region are launching national AI strategies, digitizing public services, and investing in infrastructure to drive economic growth and social development. Initiatives like the [ATIPAN project](https://academic.oup.com/oodh/article/doi/10.1093/oodh/oqae011/7611743) in the Philippines and [MediBot](https://www.equity.tech/work/mit-solve) in Timor-Leste—bringing AI-powered healthcare to remote communities—demonstrate how transformative these technologies can be. Yet amid this momentum lies a quiet but urgent gap: the AI systems shaping SEA’s digital future often fail to represent its languages, cultures, or lived realities.

With over 100 ethnic groups who speak over a thousand living languages and dialects, SEA is one of the most linguistically diverse regions on Earth. Yet [modern AI systems are largely trained on English and a few other global languages](https://aclanthology.org/2024.findings-emnlp.766.pdf), leaving most SEA communities (speakers of Javanese, Tagalog, Burmese, and many others) underrepresented or [invisible](https://www.techpolicy.press/how-multilingual-ai-can-protect-language-and-improve-global-technology/) in the AI development.

Why does this matter? This language gap isn’t just technical; it’s a barrier to equitable digital inclusion,
as [language is deeply tied to identity, trust, and nuance](https://techforgoodinstitute.org/blog/perspectives/the-power-of-language-diversity-in-the-ai-era/). When AI systems misinterpret what users say—or fail to speak in ways that feel natural or respectful—they risk delivering harmful advice, misclassifying inputs, or simply being ignored. A major [2024 study published at EMNLP](https://aclanthology.org/2024.emnlp-main.296/) confirmed this: [large language models struggle with low-resource SEA languages](https://techforgoodinstitute.org/research/research-commentary/the-rise-of-regional-language-models-in-southeast-asia/), leading to mistranslations, cultural misinterpretations, and even harmful outputs. For example, AI might misread a patient’s expression of fatigue as benign when, in cultural context, it hints at something more serious like vertigo, and then make non-localized recommendations, suggesting an urgent clinic visit which may be helpful in Singapore but unrealistic or distressing in rural Indonesia, where the nearest doctor may be hours away.

For example, when [asked](https://www.simpol.ph/living-ai-bias-in-southeast-asia/) to define the Filipino word _“sapot”_, ChatGPT interpreted it as “mental confusion” or “being tangled.” In context, it actually refers to a state of psychological unease—like a web of emotions—best understood through lived experience. Such misinterpretations aren’t trivial: they erode trust, miss nuance, and limit the emotional accuracy essential in mental health tools. While AI is scaling and improving mental health care across the English-speaking world, local language speakers cannot benefit.

As AI becomes more embedded in commerce, education, and governance, how can the region ensure that the future of AI truly reflects its people, languages, and lived realities?

## Challenges & Barriers

Southeast Asia's push for inclusive AI faces four interconnected challenges: data scarcity, fragmented development, limited market incentives, and gaps in trust.

<div class="accordion accordion-flush" id="challengesAccordion">

{% capture challenge1_content %}
Most SEA languages lack the large, high-quality datasets needed to train robust models. Where data exists, it is often scattered across informal sources and hard to standardise. The problem is worse for languages with strong oral traditions, which may have little or no digital footprint. Building quality datasets requires more than literal translation, which risks producing awkward "translationese"; it demands deep cultural grounding. A 2024 study by SEACrowd showed that popular global models underperform on SEA language tasks., particularly in generating natural-sounding text. Even when technically included, model performance for languages with limited digital presence fall behind, mirroring the hierarchy of data availability. Small language groups, already excluded from services, risk further marginalisation when AI tools bypass them.

![Culturally-unaware image generation of 'people eating chicken pastel', a popular dish in the Philippines, using Stable Diffusion 3.5 Large](/assets/images/posts/tfgi-language-gap/culturally-unaware-ai.png)

_Culturally-unaware image generation of "people eating chicken pastel", a popular dish in the Philippines, using stability.ai's AI model [Stable Diffusion 3.5 Large](https://huggingface.co/stabilityai/stable-diffusion-3.5-large)._
{% endcapture %}

{% capture challenge2_content %}
National AI strategies often prioritise infrastructure, data governance, and economic competitiveness, sidelining linguistic inclusion. Policy approaches vary widely between countries, and without regional coordination or data-sharing frameworks (e.g., common formats, ethical standards, pooled compute resources), efforts remain siloed. Some promising local initiatives are beginning to emerge. Thailand's [Typhoon](https://opentyphoon.ai) model, an accessible Thai-centric Large Language Model (LLM), was also trained on informal language to capture stylistic nuances that global models often overlook. Indonesia's [NusaCrowd](https://aclanthology.org/2023.findings-acl.868/) curated high-quality open datasets for low-resource languages, including widely spoken Javanese and Sundanese, as well as endangered tongues like Lampung and Buginese, capturing the breadth of linguistic diversity and cultural contexts such as code-switching and shifting levels of formality. Yet, without sustained investment and alignment with broader ASEAN strategies, their long-term support and interoperability remain limited. Regional collaboration is especially crucial in Southeast Asia, where many languages—like Malay, Khmer, and Hmong—cross national borders, and individual countries may lack the capacity to build full-stack AI pipelines independently.
{% endcapture %}

{% capture challenge3_content %}
Because big tech companies prioritise mainstream languages with existing commercial value, indigenous and low-resource languages are rarely incorporated into their models or business strategies. Meanwhile, local startups, academic labs, and grassroots groups often lack the computing power and funding needed to build language-specific tools. The region also faces a shortage of skilled NLP researchers and data engineers experienced in low-resource AI development, leaving the ecosystem under-resourced.

For perspective, [SEA-LION, Southeast Asia's flagship open-source LLM project](https://arxiv.org/abs/2504.05747), was built by **31 authors**—compared to **199** for [China's DeepSeek-RI](https://arxiv.org/abs/2501.12948), and a staggering **3,295** contributors behind [Google's latest Gemini model](https://arxiv.org/abs/2507.06261).
{% endcapture %}

{% capture challenge4_content %}
In much of Southeast Asia, AI adoption is constrained by foundational infrastructure challenges: limited connectivity, unreliable power, costly or low-spec devices, and insufficient digital literacy. Even when tools are available, widespread usage is not guaranteed. Poor localisation—beyond mere translation—can result in awkward tone, cultural mismatches, or unfamiliar interfaces. In the region, this may manifest as overly formal language, failure to interpret code-switching (the blending of languages), or disregard for indirect communication norms. When tools feel extractive or culturally alien, they risk eroding user trust.
{% endcapture %}

{% include collapsible.html
   id="collapseDataScarcity"
   title="Data Scarcity"
   content=challenge1_content
   parent="challengesAccordion"
   open=true
%}
{% include collapsible.html
   id="collapseFragmentedDev"
   title="Fragmented Development"
   content=challenge2_content
   parent="challengesAccordion"
   open=false
%}
{% include collapsible.html
   id="collapseMarketIncentives"
   title="Limited Market Incentives"
   content=challenge3_content
   parent="challengesAccordion"
   open=false
%}
{% include collapsible.html
   id="collapseAccessibilityTrust"
   title="Gaps in Accessibility and Trust"
   content=challenge4_content
   parent="challengesAccordion"
   open=false
%}

</div>

## Opportunities and Solutions: Building Inclusive AI from the Ground Up

Despite the barriers, SEA has a unique opportunity to lead in creating AI
that is truly inclusive and culturally grounded.
The region can chart its own path—treating linguistic and cultural diversity as assets, not obstacles.
With its deep traditions of multilingualism, code-switching, oral storytelling, and cultural hybridity,
SEA is well-placed to pioneer flexible, context-aware AI systems that handle code-switching,
shifting levels of formality, and socially complex communication.  
AI attuned to SEA’s complexity could enable trust-sensitive applications,
from health promotion in conservative areas to crisis communication across multiple languages and dialects.

### 1. Local Innovation and Homegrown Solutions

A growing ecosystem of regional initiatives is tackling SEA’s unique linguistic challenges, blending grassroots energy with institutional support. Community-led efforts like [SEACrowd](https://seacrowd.github.io) are making a significant impact—[curating hundreds of corpora](https://seacrowd.github.io/seacrowd-catalogue/) covering nearly 1,000 languages, building performance benchmarks in 38 Southeast Asian languages (for comparison, OpenAI’s latest model only benchmarked performance on five SEA languages), while [nurturing local AI talent](/apprenticeship).
SEACrowd also collaborates with global open source initiatives such as
[ML Commons](https://mlcommons.org), [Common Crawl](https://commoncrawl.org), and [Masakhane](https://www.masakhane.io)
to share lessons and enable the global shift toward community-led, [inclusive](https://www.taipeitimes.com/News/editorials/archives/2025/06/29/2003839418) AI development. The Singapore-based [SEA-LION initiative is creating open-source LLMs trained on 11 Southeast Asian languages to capture cultural nuances](https://techforgoodinstitute.org/blog/perspectives/increasing-southeast-asian-representation-in-ai/), while Thailand’s Typhoon model and Indonesia’s [NusaWrites](https://arxiv.org/pdf/2309.10661) are building datasets and models rooted in local context. Together, these efforts offer a powerful alternative to global models that often overlook the region’s linguistic diversity.

![Launch of SEACrowd at EMNLP 2023](/assets/images/posts/tfgi-language-gap/emnlp-2023-launch.png)

_Launch of [SEACrowd](/) at [EMNLP 2023](https://2023.emnlp.org/)._

Beyond technology, these initiatives play a vital preservation role. [UNESCO](https://www.unesco.org/en/days/mother-language) warns that nearly 40% of the world’s languages—many in SEA—are [endangered](https://seatongue.com/blog/the-asian-languages-most-at-risk-of-disappearing-in-the-ai-era). By creating a [digital footprint](https://arxiv.org/abs/2502.18148), these initiatives help safeguard not only languages but also the cultural knowledge embedded within them.

### 2. Regional Coordination and Shared Infrastructure

To break silos, ASEAN—working alongside universities, community groups, international organisations such as UNESCO, and global open-source initiatives–should support interoperable data frameworks and shared standards. Projects like [SEA-VL](https://aclanthology.org/2025.acl-long.916/)—pairing over a million culturally relevant images with local-language captions—show both the value and complexity of cross-border collaboration. A Southeast Asian NLP Commons could standardise benchmarks, ethics, and governance, especially for indigenous and low-resource languages. India’s [AI4Bharat](https://ai4bharat.iitm.ac.in) offers a model, funding open datasets in over 20 Indian languages with government, academic, and civil society support.

### 3. Enabling Ecosystems through Policy and Incentives

Governments can treat linguistic datasets as public digital goods and fund open-source AI for regional languages. Procurement policies, tax incentives, and grants can spur business investment in inclusion. Policymakers are starting to take notice—[ASEAN’s Guide on AI](https://asean.org/wp-content/uploads/2024/02/ASEAN-Guide-on-AI-Governance-and-Ethics_beautified_201223_v2.pdf) [Governance](https://asean.org/wp-content/uploads/2024/02/ASEAN-Guide-on-AI-Governance-and-Ethics_beautified_201223_v2.pdf) [and Ethics](https://asean.org/wp-content/uploads/2024/02/ASEAN-Guide-on-AI-Governance-and-Ethics_beautified_201223_v2.pdf) and [Singapore’s IMDA](https://aiverifyfoundation.sg/resources/mgf-gen-ai/) emphasise inclusive data practices. However, unless language equity becomes a core pillar of digital transformation, SEA risks developing AI that speaks over its people.

### 4. Trust, Transparency, Inclusion

Language inclusion must be [participatory](https://arxiv.org/pdf/2506.07506). Co-governance models—where contributors shape data practices and evaluation—build awareness, trust, and ownership. Investing in mentorship, transparency, and shared control ensures SEA’s digital future reflects its full diversity.

## Conclusion

Southeast Asia’s digital future depends on closing the language gap in AI. The region’s linguistic diversity is a strategic asset, yet current systems exclude many communities. This article outlined the barriers—like missing datasets and weak incentives—and showcased efforts like SEACrowd, Typhoon, and Nusa Collection that chart a new path. Policymakers must treat local language data as essential infrastructure, while industry and communities build AI that genuinely reflects SEA voices. Inclusive AI is not optional—it is a strategic imperative to ensure digital transformation benefits everyone. By investing in linguistic inclusion, SEA doesn’t just close a gap-it leads the world in building AI that truly belongs to everyone.

## About the Authors

Onno Kampman is an AI Scientist at Singapore’s MOH Office for Healthcare Transformation (MOHT) and a Visiting Scientist at the University of Cambridge. He leads pioneering projects that apply AI to mental health care transformation, and contributes to SEACrowd’s mission to boost Southeast Asian AI capabilities.

Holy Lovenia is the Lead of SEACrowd. Based in London and affiliated with AI Singapore, she drives SEACrowd’s strategy to unify and scale AI resources across Southeast Asia—most recently through initiatives like SEACrowd’s multilingual benchmarks and the SEA‑VL vision‑language dataset.

## About the Organisation

[SEACrowd](/about) is a research community advancing Southeast Asia-focused AI and empowering the next generation of AI researchers in the region. The organisation envisions a future where Southeast Asia’s AI ecosystem is mature, globally competitive, and grounded in the region’s diverse linguistic and cultural contexts.

SEACrowd’s initiatives include leading data collection and model development efforts tailored to Southeast Asia, building and connecting a regional research network, and supporting early-career talent through mentorship and hands-on experience via the [SEACrowd Apprentice Program](/apprenticeship).
