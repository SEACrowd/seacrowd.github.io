#!/bin/bash
set -e

# Fix ownership of cache directories if they exist
if [ -d "/site/.jekyll-cache" ]; then
    sudo chown -R jekyll:jekyll /site/.jekyll-cache
fi

if [ -d "/site/vendor" ]; then
    sudo chown -R jekyll:jekyll /site/vendor
fi

if [ -d "/site/node_modules" ]; then
    sudo chown -R jekyll:jekyll /site/node_modules
fi

# Execute the original command
exec "$@"