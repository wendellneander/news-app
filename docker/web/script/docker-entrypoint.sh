#!/bin/bash

# Check API
if [ ! -z "$API_URL" ]; then
    until curl --head --silent --fail --show-error --location "$API_URL" > /dev/null 2>&1; do
        echo "Api is unavailable..."
        sleep 10
    done
    >&2 echo "Api is running!"
fi

# Check volume
until [ -f /app/package.json ]; do
    >&2 echo "Volume web waiting..."
    sleep 3
done

# Install packages
if [ ! -d /app/node_modules ]; then
    >&2 echo "Installing web packages..."
    cd /app && yarn install
else
    >&2 echo "Defining web permissions..."
    chown -R node:node /app
fi

exec "$@"
