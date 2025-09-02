FROM ruby:3.4.5-slim

WORKDIR /site

# Install dependencies including Node.js for Prettier
RUN apt-get update && apt-get install -y \
  git \
  build-essential \
  curl \
  && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs \
  && rm -rf /var/lib/apt/lists/*

# Copy Gemfile first for caching
COPY Gemfile Gemfile.lock ./

# Install gems globally (so that they persist in volume)
RUN bundle config set path /usr/local/bundle \
  && bundle install --jobs=4 --retry=3

# Copy package.json and install Node dependencies
COPY package.json ./
RUN npm install

# Copy site source code
COPY . .

EXPOSE 4000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:4000/ || exit 1

# Run Jekyll server by default
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--incremental", "--livereload"]
