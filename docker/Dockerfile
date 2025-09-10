FROM ruby:3.4.5-slim

ARG BUILD_ENV=production
ARG INSTALL_DEV_DEPS=false
ARG PORT=4000

WORKDIR /site

# Install base dependencies for Ruby gems
RUN apt-get update && apt-get install -y --no-install-recommends \
  git \
  build-essential \
  curl \
  gnupg \
  && rm -rf /var/lib/apt/lists/*

# Conditionally install Node.js (modern NodeSource repo)
RUN if [ "$INSTALL_DEV_DEPS" = "true" ]; then \
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key \
  | gpg --dearmor -o /usr/share/keyrings/nodesource.gpg \
  && echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" \
  > /etc/apt/sources.list.d/nodesource.list \
  && apt-get update && apt-get install -y --no-install-recommends nodejs \
  && rm -rf /var/lib/apt/lists/*; \
  fi

COPY Gemfile Gemfile.lock ./
RUN bundle config set path /usr/local/bundle \
  && bundle install --jobs=4 --retry=3

# Copy Node deps only if dev tools are enabled
COPY package.json package-lock.json* ./
RUN if [ "$INSTALL_DEV_DEPS" = "true" ]; then npm install --only=dev; fi

COPY . .

EXPOSE ${PORT}

HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:${PORT}/ || exit 1

# Env vars
ENV BUILD_ENV=${BUILD_ENV}
ENV PORT=${PORT}

# Environment-aware Jekyll command with bundle check fallback
CMD bundle check || bundle install --jobs=4 --retry=3 && \
  if [ "$BUILD_ENV" = "development" ]; then \
  bundle exec jekyll serve --host 0.0.0.0 --port ${PORT} --config _config.yml,_config_dev.yml; \
  else \
  bundle exec jekyll serve --host 0.0.0.0 --port ${PORT}; \
  fi
