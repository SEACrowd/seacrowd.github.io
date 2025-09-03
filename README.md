# SEACrowd Website

Brand new SEACrowd website!

# Writing

These need to be filled and updated periodically:

- \_data: team.yml, contributors.csv
- Collections: \_news, \_projects
- \_config.yml
- \_pages/

# Development

⚠️ In all cases, Jekyll requires restarting server when you make change to a
root-level configuration file like `_config.yml`.

Docker solution automatically restarts when it detects changes to the file.

## Quick Start with Docker (Recommended)

First, build the image:

```bash
docker compose -f docker/docker-compose.yml build
```

Next, preview the site locally:

```bash
docker compose -f docker/docker-compose.yml up
```

or develop the site with file watching (requires Docker Compose 2.22+):

```bash
docker compose -f docker/docker-compose.yml up --watch
```

The site will be available at `http://localhost:4000` with live reloading enabled.

## Manual Setup with Ruby

If you prefer to run without Docker, ensure you have Ruby installed (managed through [rbenv](https://github.com/rbenv/rbenv) preferred):

### Prerequisites

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

### Run the site

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config_dev.yml
```

The site should show up on `http://localhost:4000`
