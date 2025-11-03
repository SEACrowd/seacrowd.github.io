# SEACrowd Website

Brand new SEACrowd website in Jekyll and Boostrap 5.3.

## Writing & Contributing Content

### How to contribute without technical setup

1. **Fork the repository** on GitHub
2. **Edit files directly** in the GitHub web interface
3. **Submit a pull request** with your changes

### Site settings

- [\_config.yml](_config.yml) changes site settings
- [\_data/navbar.yml](_data/navbar.yml) changes content of navigation bar
- [\_data/footer.yml](_data/footer.yml) changes content of footer

### Profile Updates (Team & Apprentices)

- Edit [\_data/team.yml](_data/team.yml) to add/update team members
- Add profile images to [assets/images/people](/assets/images/people)
- Similarly, [\_data/apprentices.yml](_data/apprentices.yml) stores apprentices
  by batch (e.g., "24-25") and [assets/images/apprentices](/assets/images/apprentices)

### Publication (including apprenticeship research)

In `_bibliography/`:

- [main.bib](_bibliography/main.bib): SEACrowd publication
- [affiliated.bib](_bibliography/affiliated.bib): publication by SEACrowd members and affliates
- [tutorials.bib](_bibliography/tutorials.bib): tutorials (counted as affiliated)
- [apprenticeship.bib](_bibliography/apprenticeship.bib): publication by SEACrowd apprentices and mentors.
  To assign a publication to a batch, add "batch" key.
  Batch value must be synced between this .bib file and [\_data/apprentices.yml](_data/apprentices.yml),
  such as "24-25" for batch 2024-2025.
- Add `venue` to bib to render venue/publisher more efficiently.
- .bib accept custom fields: arxiv/pdf, award, code, demo, post, poster,
  resources, selected, slides, talk, video, website. For all fields, see [bib.html](_layouts/bib.html).

### Blog Posts

Create new blog posts in `_posts/` using the format: `YYYY-MM-DD-title.md`

**Frontmatter:**

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-10-01
description: "Brief description for SEO and previews"
tags: [tag1, tag2] # Optional
category: research # Optional, array or string separated by commas
featured: true # Optional: shows in featured section
authors: [Author Name] # Optional array
thumbnail: image.jpg # Optional: image filename in assets/images/posts/
---
```

**Writing tips:**

- Use h2-h6, and clear heading hierarchy. Heading 1 is reserved for post title.
- Add alt text to images: `![Alt text](image.jpg)`
- Use code blocks with language specification: ```python
- Keep descriptions under 160 characters for SEO

**Starter template:** Copy from `_posts/_template.md`

### News & Updates

- Create new updates in `_news/` with file name `YYYY-MM-DD-title.md`
- **Add empty frontmatter** and write the content in markdown. Recommended 300 characters max. Frontmatter is very important for Jekyll to read the file.

### Project Information

- Create new project in `_projects/` with format: `YYYY-MM-project-name.md`
- Add project details, objectives, and outcomes
- Include relevant images in the `assets/images/projects` folder
- Update [\_data/contributors.csv](_data/contributors.csv) for contributor acknowledgments

### Apprenticeship program

- Fill [\_pages/apprenticeship.md](_pages/apprenticeship.md) in frontmatter
  the fields: form (url), openDate and closeDate (ISO datetime with timezone).
- Add other content in markdown

### Page Content

- Update static pages in `_pages/` directory
- Modify content in `events.md`, `resources.md`, `publications.md`, etc.
- ⚠️ All `_pages/*.md` should start with heading 2 (##)

### Using the Carousel Component

Use `{% include carousel.html %}` to add image carousels to any page:

```liquid
{%
  include carousel.html
  id="uniqueCarouselId"
  height="400"
  duration="5"
  items=site.data.carousel_items
%}
```

**Parameters:**

- `id` (optional): Unique carousel identifier, defaults to "mediaCarousel"
- `height` (optional): Height in pixels, defaults to 400
- `duration` (optional): Auto-advance interval in seconds
- `items` (required): Array of carousel items

**Item structure:**

```yaml
# In _data/carousel_items.yml or frontmatter
- image: "image1.jpg" # Auto-prepends /assets/images/ if no path
  caption: "Simple caption" # Shows as badge
  alt: "Image description"

- image: "/assets/images/custom/image2.jpg" # Custom path
  description: "Rich description with markdown support"
  button_text: "Learn More"
  button_url: "/about"
  alt: "Another image"
```

## Development

### Quick Start

**Docker (Recommended):** Building requires `docker compose` and >= 1.9GB disk space.

```bash
make build && make dev
```

To change ports:

```bash
JEKYLL_PORT=4001 LIVERELOAD_PORT=35730 make dev
```

or create `.env` file from `.env.example`.

- Make exists on most systems, but if yours doesn't have it, copy corresponding commands in [Makefile](./Makefile).
  You can check for this using `make -v`
- If `docker compose` (compose plugin of Docker) doesn't work, try `docker-compose` (separate build).

**Manual Ruby Setup:**

```bash
make install  # Install dependencies
make serve    # Run development server
```

### Available Commands

See [Makefile](./Makefile) for all development commands:

- `make dev` - Development server with live reload, and
  pre-commit hook for code formatting
- `make prod` - Production build
- `make restart` - Restart without cache
- `make rebuild` - Rebuild containers without cache (if changes not reflected)
- `make clean` - Remove local Jekyll caches
- `make install && make serve` - Install gems locally if you have Ruby and serve
- `make format` - Format code (requires npm)

### Setup Notes

- Manual Ruby setup requires [rbenv](https://github.com/rbenv/rbenv) (see Makefile comments)
  or globally installed ruby >= 3.4.5
- Site runs on [http://localhost:4000](http://localhost:4000)
