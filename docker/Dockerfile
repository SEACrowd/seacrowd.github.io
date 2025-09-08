FROM ruby:3.4.5-slim

# Build arguments to control environment
ARG BUILD_ENV=production
ARG INSTALL_DEV_DEPS=false

WORKDIR /site

# Install base dependencies
RUN apt-get update && apt-get install -y \
  git \
  build-essential \
  curl \
  && rm -rf /var/lib/apt/lists/*

# Conditionally install Node.js for development builds
RUN if [ "$INSTALL_DEV_DEPS" = "true" ]; then \
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs; \
  fi

# Copy Gemfile first for caching
COPY Gemfile Gemfile.lock ./

# Install gems globally (so that they persist in volume)
RUN bundle config set path /usr/local/bundle \
  && bundle install --jobs=4 --retry=3

# Conditionally copy package.json and install Node dependencies for development
COPY package.json ./
RUN if [ "$INSTALL_DEV_DEPS" = "true" ]; then \
  npm install --only=dev; \
  fi

# Copy site source code
COPY . .

EXPOSE 4000

# Environment-aware healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:4000/ || exit 1

# Set environment variables
ENV BUILD_ENV=${BUILD_ENV}

# Environment-aware Jekyll command with bundle check fallback
CMD bundle check || bundle install --jobs=4 --retry=3 && \
  if [ "$BUILD_ENV" = "development" ]; then \
    bundle exec jekyll serve --host 0.0.0.0 --port 4000 --config _config.yml,_config_dev.yml; \
  else \
    bundle exec jekyll serve --host 0.0.0.0 --port 4000; \
  fi