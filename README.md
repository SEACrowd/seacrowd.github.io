# SEACrowd Website

Brand new SEACrowd website in Jekyll and Boostrap 5.3.

## Writing & Contributing Content

### How to contribute without technical setup

1. **Fork the repository** on GitHub
2. **Edit files directly** in the GitHub web interface
3. **Submit a pull request** with your changes
4. All editing can be done through GitHub.

### Site settings

- [\_config.yml](_config.yml) changes site settings
- [\_data/navigation.yml](_data/navigation.yml) changes structure of navigation bar

### Profile Updates (Team & Apprentices)

- Edit [\_data/team.yml](_data/team.yml) to add/update team members
- Add profile images to [assets/images/people](/assets/images/people)
- Similarly, [\_data/apprentices.yml](_data/apprentices.yml) stores apprentices
  by batch (e.g., "24-25") and [assets/images/apprentices](/assets/images/apprentices)

### Publication (including apprenticeship research)

In `_bibliography/`:

- [main.bib](_bibliography/main.bib): SEACrowd publication
- [affiliate.bib](_bibliography/affiliate.bib): publication by SEACrowd members and affliates
- [apprenticeship.bib](_bibliography/apprenticeship.bib): publication by SEACrowd apprentices and mentors.
  To assign a publication to a batch, add "batch" key.
  Batch value must be synced between this .bib file and [\_data/apprentices.yml](_data/apprentices.yml),
  such as "24-25" for batch 2024-2025.
- .bib accept custom fields: award, code, poster, preview (the image path relative to /assets/images/pub_preview),
  resources, selected, slides, video. For all fields, see [bib.html](_layouts/bib.html).

### News & Updates

- Create new updates in `_news/` using the format: `YYYY-MM-DD-title.md`
- Follow existing examples in the `_news/` directory
- Include frontmatter with title, date, (optionally) tags

### Project Information

- Create new project in `_projects/` with format: `YYYY-MM-project-name.md`
- Add project details, objectives, and outcomes
- Include relevant images in the `assets/` folder
- Update [\_data/contributors.csv](_data/contributors.csv) for contributor acknowledgments

### Apprenticeship program

- Fill [\_pages/apprenticeship.md](_pages/apprenticeship.md) in frontmatter
  the fields: form (url), openDate and closeDate (ISO datetime with timezone).
- Add other content in markdown

### Page Content

- Update static pages in `_pages/` directory
- Modify content in `events.md`, `resources.md`, `publications.md`, etc.
- ⚠️ All `_pages/*.md` should start with heading 2 (##)

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

- Make exists on most systems, but if yours doesn't have it, copy corresponding commands in Makefile.
  You can check for this using `make -v`
- If `docker compose` (compose plugin of Docker) doesn't work, try `docker-compose` (separate build).

**Manual Ruby Setup:**

```bash
make install  # Install dependencies
make serve    # Run development server
```

### Available Commands

See [Makefile](Makefile) for all development commands:

- `make dev` - Development server with live reload, and
  pre-commit hook for code formatting
- `make prod` - Production build
- `make rebuild` - Rebuild containers without cache (if changes not reflected)
- `make clean` - Remove Jekyll caches
- `make format` - Format code (requires npm)

### Setup Notes

- Docker automates Jekyll restarts for `_config.yml` and `_layouts/bib.html` changes
- Manual Ruby setup requires [rbenv](https://github.com/rbenv/rbenv) (see Makefile comments)
- Site runs on [http://localhost:4000](http://localhost:4000)
