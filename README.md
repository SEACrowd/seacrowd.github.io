# SEACrowd Website

Brand new SEACrowd website!

## Writing & Contributing Content

Contribute to SEACrowd content without any technical setup:

### 1. News & Updates

- Create new updates in `_news/` using the format: `YYYY-MM-DD-title.md`
- Follow existing examples in the `_news/` directory
- Include frontmatter with title, date, (optionally) tags

### 2. Project Information

- Create new project in `_projects/` with format: `YYYY-project-name.md`
- Add project details, objectives, and outcomes
- Include relevant images in the `assets/` folder

### 3. People & Team Updates

- Edit `_data/team.yml` to add/update team members
- Update `_data/contributors.csv` for contributor acknowledgments
- Add profile images to `assets/images/people/`

### 4. Page Content

- Update static pages in `_pages/` directory
- Modify content in `events.md`, `resources.md`, `publications.md`, etc.
- Edit the main configuration in `_config.yml` for site-wide changes

### 5. How to Contribute

1. **Fork the repository** on GitHub
2. **Edit files directly** in the GitHub web interface
3. **Submit a pull request** with your changes
4. All editing can be done through GitHub. Note that all \_pages/\*.md should start with heading 2
   (##)

## Development

⚠️ In all cases, Jekyll requires restarting server when you make change to a root-level
configuration file like `_config.yml`.

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

The site should show up on `http://localhost:4000`
