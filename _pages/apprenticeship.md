---
title: SEACrowd 2026 Apprentice Program
permalink: /apprenticeship.html
form: https://forms.gle/GCv3cyCRqzj4PqfA9
thumbnail: apprenticeship.png
---

**The application was closed on Dec 17, 2025 at 23:59 (UTC-12). Updates will be sent to applicants from our email [{{ site.social.email }}](mailto:{{site.social.email}}).**

If you would like to be notified of future apprentice batches, please join our [Google Group]({{ site.social.google_group }}) or follow us on [X/Twitter]({{ site.social.twitter }}), [Facebook]({{ site.social.facebook }}), or [LinkedIn]({{ site.social.linkedin }}).

---

SEACrowd Apprentice Program is a **remote research program** (Feb 1 - Jun 30, 2026) that pairs experienced researchers with early-career researchers across Southeast Asia to build models, datasets, and publishable research. Small, mentored teams work on scoped projects with structured milestones and community support, creating a clear path toward PhD admissions, jobs, and stronger SEA regional capacity.

Each mentee will join a team of 2–3 mentors (at least 1 [primary mentor](#primary-mentors) and 1 [secondary mentor](#secondary-mentors)) and 2+ fellow mentees to execute a research project over four months. The program emphasizes hands-on experience, mentorship, and peer learning, culminating in a research report, which can turn into paper submission to top AI/ML/NLP conferences as arranged by the team.

## 2025 Success Story

Our 2025 cohort featured three apprentice teams who successfully completed their projects, culminating in mentees' first-authored research papers published at the [5th Multilingual Representation Learning Workshop (2025)](https://sigtyp.github.io/ws2025-mrl.html). Check out [their publications](/apprenticeship#past-apprentice-research)!

We shared their journey and our learnings from running the first cohort in our [Retrospective blog post](/posts/apprentice-retrospection).

## 2026 Research Topics

We offer five cutting-edge research projects:

1. **Multilingual Agentic for Underrepresented Regions** - Developing evaluation frameworks for agent-based language models in low-resource languages
2. **CoRaL: Contextual Relevance and Linguistic Enrichment** - Multi-dimensional data curation framework for low-resource language training corpora
3. **Reasoning Agentic LLM Router** - Skill-based routing mechanisms to reduce inference costs while maintaining performance
4. **Selective Memory Layer Finetuning** - Architectural solutions for continual learning using memory layers
5. **Knowledge Distillation in Multilingual Vision-Text Models** - Creating compact vision-language embeddings for edge devices

[View detailed project topics →](https://docs.google.com/document/d/e/2PACX-1vSpPtzQYD8flrz9w01uLSADHvXBDtI5WE6ogbnwnpFfl9Y-89SCLsp252tZAYLYa6pimxCBj27UfbR7/pub)

## Who Can Apply

There are no formal eligibility or age limits. We’re a growth-first programme and value potential, motivation, and effort more than credentials.

We welcome **anyone** who meets at least one of the following:

- Your affiliation (e.g., school, organization, company) is from Southeast Asia (SEA).
- You were born in SEA.
- You are doing or have done SEA-related research.

and share [our vision](/about#our-vision).

### What Increases Your Chances

- Bachelor’s degree with a publication or Master’s degree.
- Clear AI research goals (pre-PhD programs, early-year PhD, or prior collaboration with mentors).
- Fit with project topics, capability, motivation, and mentors (assessed via application + interview).

## What You'll Gain

- **Certificate of achievement** upon completion
- **Letter of recommendation** for PhD/job applications (for strong contributors)
- **Potential publication** at top ML/AI/NLP venues (first authorship reserved for project leads)
- **Mentorship** from experienced AI researchers
- **Peer network** with similar research interests
- **Hands-on experience** in collaborative AI research

Check out [previous batch publications](/apprenticeship#past-apprentice-research)!

## Application Process

- **General Application:** Nov 17 - Dec 17, 2025 (23:59 UTC-12).
- **Selection:** mid-Dec 2025 - Jan 19, 2026
  - Round 1: Application screening
  - Round 2: Online interview
- **Team announcement:** mid-Jan 2026

[Apply Here]({{ page.form }}){: .btn .btn-outline-primary .disabled}

## Program Schedule

- **Kickoff:** Feb 1, 2026
- **Mid-term milestone:** End of Mar / early Apr (internal review)
- **End-term milestone:** End of Jun (SEACrowd-wide + external committee)

Publications are encouraged when ready, not tied to specific conference deadlines.

## Who You'll Work With

### Primary Mentors

<div class="row g-2">
  {% for profile in site.data.mentors %}
    {% if profile.position == "primary_mentor" %}
      {% include person.html %}
    {% endif %}
  {% endfor %}
</div>

### Secondary Mentors

<div class="row g-2">
  {% for profile in site.data.mentors %}
    {% if profile.position == "secondary_mentor" %}
      {% include person.html %}
    {% endif %}
  {% endfor %}
</div>

### Organizers & Research Managers

<div class="row g-2">
  {% for profile in site.data.mentors %}
    {% if profile.position == "organizer" %}
      {% include person.html %}
    {% endif %}
  {% endfor %}
</div>

## Past Apprentice Research

{% include apprenticeship-tabs.html %}
