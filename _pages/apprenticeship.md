---
title: Apprenticeship Program
permalink: /apprenticeship.html
form: ""
openDate: 2024-08-15T00:00:00-12:00
closeDate: 2024-09-01T11:59:00+12:00
---

As part of our ongoing commitment to improve SEA AI, we believe that mentorship of early-career
researchers is one of the most important avenues we must take to ensure that growth in the region is
sustainable.

The apprenticeship program is a short 3-4 month internship where experienced researchers mentor
early-career or prospective researchers. Expected outputs include models, datasets, and published
peer-reviewed papers which will hopefully lead to PhD acceptance letters, job placements, and more.

<div id="apprenticeship-alert">
  <div class="alert alert-secondary text-center" role="alert">
    <strong>Loading application status...</strong>
  </div>
</div>

<script src="{{ '/assets/js/apprenticeship-dates.js' | relative_url }}"></script>
<script>
  // Initialize the apprenticeship date manager with page data
  document.addEventListener('DOMContentLoaded', function() {
    initApprenticeshipManager(
      "{{ page.openDate | date: '%Y-%m-%dT%H:%M:%S%z' }}",
      "{{ page.closeDate | date: '%Y-%m-%dT%H:%M:%S%z' }}",
      "{{ page.form }}"
    );
  });
</script>
