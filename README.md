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

⚠️ In all cases, Jekyll requires restarting server when you make change to
a root-level configuration file like `_config.yml`,
and special file [_layouts/bib.html] to render publication.
Docker automates this.

### Docker Environment (Recommended)

We use a single environment-aware Dockerfile that builds optimized containers for both development
and production.

#### Development Mode (Default)

For full development with Ruby, Jekyll, Node.js, and Prettier:

```bash
docker compose -f docker/docker-compose.yml build
docker compose -f docker/docker-compose.yml up --watch
```

Features:

- Live reloading on port 4000 + 35729 (LiveReload)
- Development config (`_config_dev.yml`) with verbose logging
- Node.js and Prettier for code formatting
- File watching with auto-rebuild on config changes

#### Production Mode

For production builds (minimal, no dev dependencies):

```bash
docker compose -f docker/docker-compose-prod.yml build
docker compose -f docker/docker-compose-prod.yml up
```

Features:

- Production Jekyll configuration only
- Smaller image size and faster startup
- Automatic restart on failure

#### Debugging Docker

##### Failed build

Sometimes changing build (e.g. adding gems, config, ) could fail.

Try restarting the container.

```bash
docker compose -f docker/docker-compose.yml down
docker compose -f docker/docker-compose.yml up --watch
```

If it doesn't work, try rebuilding:

```bash
docker compose -f docker/docker-compose.yml down
docker compose -f docker/docker-compose.yml build --no-cache
docker compose -f docker/docker-compose.yml up --watch
```

### Manual Setup with Ruby

If you prefer to run without Docker, ensure you have Ruby installed (managed through
[rbenv](https://github.com/rbenv/rbenv) preferred):

1. Install rbenv and Ruby:

```bash
# Install rbenv (macOS/Linux)
brew install rbenv

# Add to your shell profile (.zshrc, .bash_profile, etc.)
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc

# Install Ruby version specified in .ruby-version
rbenv install
```

2. Run the site

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config_dev.yml
```

The site should show up on [http://localhost:4000](http://localhost:4000)

If you have `npm` package manager, you can run `npm run format`
