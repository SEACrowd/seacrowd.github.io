---
date: 2026-01-27
title: "SEACrowd Apprentice Program: Mid-Term Progress 2026 Update & Call for Mentor for 2027"
description: "We’re at the mid-term point of our SEACrowd Apprentice Program 2026 cohort, and the energy is electric! Five mentored teams with a total of 21 mentees from Southeast Asian have made remarkable progress across cutting-edge research projects focused on language model and AI. This post shares our exciting mid-term achievements, introduces the 2026 project teams, and opens the door for mentors to join our 2027 batch. (Read time: 10 minutes).]
category: Apprenticeship
tags: [apprenticeship, restropection]
featured: true
authors: [Mentors of SEACrowd Apprentice Programs 2026]
thumbnail: retrospective-review.png
---

##### TL;DR

We’re at the mid-term point of our SEACrowd Apprentice Program 2026 cohort, and the energy is electric! Five mentored teams with a total of 21 mentees from Southeast Asian have made remarkable progress across cutting-edge research projects focused on language model and AI. This post shares our exciting mid-term achievements, introduces the 2026 project teams, and opens the door for mentors to join our 2027 batch. (Read time: 10 minutes).

## Background

As we reach the mid-term milestone of our SEACrowd Apprentice Program 2026 by mid April 2026, I’m thrilled to share the incredible progress our teams have made. The program pairs experienced researchers with early-career talent across Southeast Asia to build models, datasets, and publishable research - and this cohort is delivering on that promise in spectacular fashion.

## Mid-Term Momentum: Five Teams, Five Success Stories

Our five mentored teams have hit the ground running with structured milestones and community support. Here’s what they’ve accomplished so far:

### Team 1: Multilingual Agentic for Underrepresented Regions

**Mentors:** Samuel Cahyawijaya, Patomporn Payoungkhamdee

**The Problem:** Recent agent-based LLM evaluation frameworks are focused on capabilities in English, leaving behind regional AI sovereignty by only prioritizing externally developed assessment paradigms over locally relevant metrics and governance framework across diverse linguistic and cultural context.

**The Approach:** The team develops a comprehensive evaluation framework that tests agentic capabilities specifically for uncovering multifaceted gaps when transitioning from an English-only to a more localized evaluation framework with a case study on Southeast Asian regional adaptation.

**Why This Matters:** This work underscores that multilinguality remains largely unsolved in the current era of agentic AI, while pioneering a crucial blueprint for sovereign agentic AI assessment and inspiring future research to develop more rigorous methods and assessment frameworks for AI sovereignty that align with recent technological advancements.

**Mid-Term Progress:** The team has completed their initial development of the evaluation framework development and is now running pilot tests across several Southeast Asian languages including Chinese, Indonesian, Thai, and Vietnamese. Early results show clear robustness gap when adapting the linguistic nuances from English to other languages, with the framework successfully identifying language-specific agentic failure modes that weren’t captured in existing English-only assessment.

### Team 2: CoRaL: Contextual Relevance and Linguistic Enrichment for Balanced Data Curation in Low-Resource Language Pre-Training

**Mentors:** Fajri Koto, Muhammad Dehan Al Kautsar 

**The Problem:** Low-resource language corpora are typically plagued by noise, domain imbalance, and code-mixing. Naive filtering pipelines often make things worse — discarding scarce data and erasing the cultural signal that makes these corpora valuable in the first place. The result: training data that is neither high quality nor culturally representative. 


**The Approach:** The team is building CoRaL, a context-aware data curation framework that transforms noisy raw text into high-quality, culturally grounded training data. Beyond filtering, CoRaL also explores dictionary-driven augmentation to expand corpora for languages where naturally occurring text is scarce.

**Why This Matters:** Southeast Asia is home to hundreds of millions of speakers across dozens of languages, yet most remain critically underrepresented in modern LLMs. CoRaL aims to close this gap by curating and expanding pre-training data for these languages, with a focus on preserving linguistic and cultural fidelity rather than optimizing for raw token counts.

**Mid-Term Progress:** The team has defined seven quality dimensions and built an evaluation pipeline to identify the most reliable LLM-as-a-judge, measured by correlation with human annotations. In parallel, they have curated dictionaries for several Southeast Asian languages and are now investigating how to leverage these resources to prompt LLMs into producing fluent, contextually appropriate sentences — even for languages the models have never seen during pre-training.


### Team 3: Reasoning Agentic LLM Router

**Mentors:** Genta Indra Winata, David Anugraha

**The Problem:** Existing routing strategies don’t thoroughly examine fine-grained, skill-based routing that can substantially reduce inference costs while preserving strong generalization.

**The Approach:** The team is developing skill-based routing mechanisms using agentic LLM-driven approaches that leverage curated descriptions of model strengths and capabilities. They are also investigating sampling techniques for training routers that can make reasoning-grounded decisions more effectively.

**Why This Matters:** This work will make LLM inference more efficient and cost-effective, particularly important for resource-constrained environments in Southeast Asia.

**Mid-Term Progress:** The team has implemented initial routing prototypes and conducted comparative analysis across diverse tasks. They’re seeing promising results in cost reduction while maintaining performance benchmarks, with some configurations achieving 35% inference cost savings without significant accuracy drops.

### Team 4: Selective Memory Layer Finetuning

**Mentors:** Alham Fikri Aji, Farid Adilazuarda, Muhammad Reza Qorib

**The Problem:** Performing long-context inference with large language models (LLMs) is costly because the memory and computation required for the KV cache scale with the input length. Recently, a compressed memory caching method called Cartridge was proposed to reduce KV-cache memory usage while maintaining long-context capabilities. However, challenges remain in adapting these compressed memories to new knowledge and composing information across contexts.

**The Approach:** The team is investigating ideas for building a general-purpose memory system for lifelong models that can manage its own context, continually learn, and support modular composition.

**Why This Matters:** This research could enable more efficient and robust continual learning and long-context inference for LLMs.

**Mid-Term Progress:** The team has empirically investigated limitations in Cartridge’s adaptability to new knowledge and its composability across contexts.

### Team 5: Knowledge Distillation in Multilingual Vision-Text Models

**Mentors:**  Peerat Limkonchotiwat, Pume Tuchinda, Ekapol Chuangsuwanich

**The Problem:** Existing knowledge distillation approaches focus on monolingual settings and assume base-sized teachers, leaving large teachers and multilingual scenarios underexplored.

**The Approach:** The team is designing a KD framework specifically for large-scale teacher models and multilingual vision-text scenarios. They’re creating compact embeddings suitable for edge devices.

**Why This Matters:** The resulting models will be efficient enough for real-world deployment in Southeast Asian contexts while maintaining multilingual capabilities.

**Mid-Term Progress:** The team successfully reproduced the CLIP-KD system for multilingual applications. By utilizing the existing system with a multilingual tokenizer, we confirmed that our new configuration supports small-scale multilingual text-vision models. The next step is to train the model on large-scale multilingual datasets.

## Mentor Voices: Why We Love This Program

**Alham Fikri Aji (MBZUAI, Assistant Professor):** "I’ve had the privilege of mentoring for SEACrowd since day one, and it never stops being an amazing experience. This batch of mentees feels like a team of peers. They are highly active and driven, making our research discussions fantastic. I can't wait to see them grow into leading AI experts and watch the SEA community's impact grow."

**Ekapol Chuangsuwanich (Chulalongkorn University, Assitant Professor):** "The quality of work from these mentees exceeds my expectations. They’re not just learning - they’re contributing meaningful insights to their fields. The program’s emphasis on real research problems rather than toy examples is paying off. I’ve seen mentees develop from curious beginners to confident researchers who can articulate their ideas and defend their approaches."

**Genta Indra Winata (Capital One, Senior Research Manager):** "It has been both an exciting and rewarding journey to work with students and witness their growth throughout the program. Many of them begin as complete beginners, gradually learning to navigate the world of research in ways that will benefit them in the long run. Among them are several “diamonds in the rough” who show strong potential, and we are committed to helping them develop their skills and grow into successful future researchers."

**Fajri Koto (MBZUAI, Assistant Professor):** "I’m amazed at how quickly the teams have grasped complex concepts and started producing research-quality work. The diversity of backgrounds and perspectives is creating richer discussions and more innovative solutions. What stands out is how mentees are learning to balance theoretical understanding with practical implementation - a skill that’s crucial for impactful research."

**Peerat Limkonchotiwat (AI Singapore, Research Fellow):** "Being a mentor in both last year’s and this year’s program has been a deeply rewarding experience. The mentorship journey has been mutually beneficial: while guiding these talented students, I have also learned new ideas, approaches, and perspectives from them. What makes the experience especially meaningful is that many of these students genuinely aspire to become researchers, and their curiosity, dedication, and growth have been inspiring to witness. The program’s strong sense of community is also fostering connections that I believe will last well beyond each cohort. Seeing mentees support one another through challenges and celebrate each other’s successes has been truly heartwarming."

**Samuel Cahyawijaya (Cohere, Member of Technical Staff):** "As both an organizer and mentor, it’s incredibly rewarding to watch these teams grow. The mid-term presentations showed remarkable technical progress and deepening research skills. The way they’ve embraced the program’s iterative approach - building, testing, reflecting - is exactly what we hoped to cultivate. What makes this experience even more meaningful is how much fun and excitement it brings me personally. Seeing the teams thrive and overcome challenges is genuinely rewarding, and it pushes me to grow as a mentor too. Each interaction and milestone helps me develop new insights and approaches, making this journey as valuable for my own development as it is for the participants."

**Muhammad Reza Qorib (CMU, Postdoctoral Fellow):** "Working with SEACrowd mentees is a refreshing research experience. The mentees are very passionate about learning and researching new things and sharing new knowledge with the world. Therefore, both mentors and mentees actually learn something new from each other. We collaborate and grow together."

**Muhammad Dehan Al Kautsar (MBZUAI, Research Assistant):** "The collaborative spirit among team members is impressive. They're supporting each other while maintaining high academic standards - exactly what we hoped to cultivate. I've noticed mentees are becoming more adept at giving and receiving constructive feedback, which is essential for growth in research."

**Farid Adilazuarda (University of Edinburgh, PhD Student):** "Memory compression for LLMs is literally my PhD topic, so mentoring Project 4 is less teaching and more nerding out together over late-night calls. The mentees keep me sharp, they ask the 'wait, but why?' questions that make you rethink your own assumptions. I got into research because my mentors gave me a chance, and SEACrowd is that chance for the next wave of Southeast Asian researchers."

**David Anugraha (Stanford University, MSc Student):** "It has been an exciting journey to support Southeast Asian students in developing their research skills. This experience has also reminded me of the importance of ensuring that AI development remains relevant to the needs and contexts of the region."

**Patomporn Payoungkhamdee (VISTEC, PhD Student):** "It’s been great mentoring this group and working with such a motivated team. Seeing the progress they’ve made on these projects over the last few months has been awesome, especially since we’re all interested in the same topics. I really hope this program keeps going so we can collaborate with more people who bring that same good energy to the SEA research community."

**Pume Tuchinda (VISTEC, Research Assistant):** "The mentees have been a pleasure to work with. They bring a lot of curiosity and good energy to every session, which makes the whole process enjoyable. I've really appreciated how willing everyone is to learn from each other, and I hope SEACrowd Apprentice continues to grow and bring more people into the community."

## Why Mentor with SEACrowd in 2027?

If you’ve been inspired by the progress of our 2026 cohort, we invite you to join us as a mentor for the 2027 SEACrowd Apprentice Program! Here’s why you should consider getting involved:

-   **Impact Southeast Asia’s AI Future:** Directly shape the next generation of AI researchers in our region
    
-   **Work with Exceptional Talent:** Mentor bright early-career researchers who are hungry to learn and contribute
    
-   **Collaborative Community:** Join a network of leading researchers and practitioners across Southeast Asia and beyond
    
-   **Meaningful Research:** Contribute to projects that address real challenges faced by Southeast Asian communities
    
-   **Professional Growth:** Develop leadership and teaching skills while staying at the forefront of AI research
    

## How to Get Involved

We’re currently looking for quality mentors the 2027 SEACrowd Apprentice Program. If you’re an experienced researcher or practitioner in AI/ML/NLP with a passion for mentoring and Southeast Asian development, we want to hear from you!

**Interested on Mentoring the 2027 SEACrowd Apprentice Program? Fill the form here:** https://docs.google.com/forms/d/1fxB2IUJSBqKkNEF5GH6gIRkM0-HIZ5_nzyTf8b990p4/edit

**Program Details:** The 2027 program will run from February to June 2027, following the same successful structure as our 2026 cohort with remote collaboration, structured milestones, and community support.

## Final Thought

The mid-term progress of our SEACrowd Apprentice Program 2026 cohort demonstrates the incredible potential of Southeast Asian AI talent when given the right opportunities and support. From developing culturally-aware evaluation frameworks to creating efficient multilingual models, our teams are tackling challenges that matter to our region.

This program represents more than just research - it’s about building a sustainable AI ecosystem in Southeast Asia, one talented researcher at a time. The journey from "I’m curious about AI research" to "I’ve actually done it" is challenging but incredibly rewarding, as we’ve seen with our 2024-25 cohort who published papers at MRL 2025.

We’re making structural improvements for 2027 based on our learnings, but the core mission remains the same: to create meaningful pathways for Southeast Asian researchers to contribute to the global AI conversation.

If you’re inspired by this progress and want to be part of shaping the future of AI in Southeast Asia - whether as a mentor or supporter - we invite you to join us on this journey.

**Connect with us:**
-   Website: https://seacrowd.org
-   Discord: https://discord.gg/wdERfHQjcA
-   Email: seacrowd.research@gmail.com
    
Let’s continue building AI for Southeast Asia, by Southeast Asians!
