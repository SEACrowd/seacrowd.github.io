FROM ruby:3.4.5-slim

ARG BUILD_ENV=production
ARG PORT=4000

WORKDIR /site

# Install base dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
  build-essential \
  git \
  curl \
  gnupg \
  sudo \
  && rm -rf /var/lib/apt/lists/*

# Install Node.js only for development
RUN if [ "$BUILD_ENV" = "development" ]; then \
  apt-get update && apt-get install -y --no-install-recommends \
  ca-certificates curl gnupg \
  && mkdir -p /etc/apt/keyrings \
  && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
  && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" > /etc/apt/sources.list.d/nodesource.list \
  && apt-get update && apt-get install -y nodejs \
  && rm -rf /var/lib/apt/lists/*; \
  fi

# Create non-root user
RUN groupadd -r jekyll && useradd -r -g jekyll -m -d /home/jekyll jekyll
RUN chown jekyll:jekyll /site

# Allow jekyll user to use sudo without password for chown
RUN echo 'jekyll ALL=(ALL) NOPASSWD: /bin/chown' >> /etc/sudoers

# Create cache directory with proper ownership
RUN mkdir -p /site/.jekyll-cache && chown -R jekyll:jekyll /site/.jekyll-cache

# Copy and setup entrypoint script
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

USER jekyll

# Install Ruby dependencies
COPY --chown=jekyll:jekyll Gemfile Gemfile.lock ./
RUN bundle config set --local path vendor/bundle \
  && bundle install --jobs=4 --retry=3

# Install Node deps only for development
COPY --chown=jekyll:jekyll package*.json ./
RUN if [ "$BUILD_ENV" = "development" ]; then npm install --only=dev; fi

# Copy source files for production (development uses volume mounts)
COPY --chown=jekyll:jekyll . .

EXPOSE ${PORT}

# Health check for production
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:${PORT}/ || exit 1

# Env vars
ENV BUILD_ENV=${BUILD_ENV}
ENV PORT=${PORT}

# Set entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Runtime command based on environment
CMD if [ "$BUILD_ENV" = "development" ]; then \
  bundle exec jekyll serve --host 0.0.0.0 --port ${PORT} --config _config.yml,_config_dev.yml; \
  else \
  bundle exec jekyll serve --host 0.0.0.0 --port ${PORT}; \
  fi
