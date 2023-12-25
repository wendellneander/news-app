#!/bin/bash

# Check database
if [ ! -z "$DB_HOST" ]; then
    until mysqladmin ping -h ${DB_HOST} --user=${DB_USER} --password=${DB_PASSWORD} --silent; do
        >&2 echo "Database is unavailable..."
        sleep 10
    done
    >&2 echo "Database is running!"
fi

# Check volume
until [ -f /app/package.json ]; do
    >&2 echo "Volume waiting..."
    sleep 3
done

# Install packages
if [ ! -d /app/node_modules ]; then
    >&2 echo "Install packages..."
    cd /app && yarn install
else
    >&2 echo "Defining permissions..."
    chown -R node:node /app
fi

# Run prisma migration
>&2 echo "Running migrations..."
cd /app && yarn prisma migrate dev --name init && yarn prisma db seed && yarn prisma db studio

exec "$@"
