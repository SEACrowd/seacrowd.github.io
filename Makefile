# Docker Development Commands
.PHONY: build dev prod down rebuild clean install serve format

# Build Docker development environment
build:
	docker compose -f docker/docker-compose.yml build

# Start development server with live reload
dev:
	docker compose -f docker/docker-compose.yml up --watch

# Build and start production server
prod:
	docker compose -f docker/docker-compose-prod.yml build
	docker compose -f docker/docker-compose-prod.yml up

# Stop Docker containers
down:
	docker compose -f docker/docker-compose.yml down

# Rebuild Docker containers (no cache)
rebuild:
	docker compose -f docker/docker-compose.yml down
	docker compose -f docker/docker-compose.yml build --no-cache
	docker compose -f docker/docker-compose.yml up --watch

# Clean Jekyll caches and site
clean:
	rm -rf .jekyll-cache/ _site/

# Manual Ruby setup commands
# Requires rbenv: https://github.com/rbenv/rbenv
# brew install rbenv
# echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
# echo 'eval "$(rbenv init -)"' >> ~/.zshrc && source ~/.zshrc
# rbenv install
install:
	bundle install

# Serve site manually with Ruby
serve:
	bundle exec jekyll serve --config _config.yml,_config_dev.yml

# Format code (requires npm)
format:
	npm run format
