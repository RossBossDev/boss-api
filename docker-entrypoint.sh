#!/bin/sh
set -e

# Wait for database
timeout=60
until nc -z db 5432 || [ $timeout -le 0 ]
do
  echo "Waiting for database connection..."
  sleep 1
  timeout=$((timeout-1))
done

if [ $timeout -le 0 ]; then
  echo "Database connection timeout"
  exit 1
fi

# Run migrations with retries
max_retries=5
retry_count=0
until node dist/config/run-migrations.js || [ $retry_count -eq $max_retries ]
do
  retry_count=$((retry_count+1))
  echo "Migration failed. Retry $retry_count of $max_retries..."
  sleep 5
done

if [ $retry_count -eq $max_retries ]; then
  echo "Migration failed after $max_retries attempts"
  exit 1
fi

# Start the application
exec "$@"
