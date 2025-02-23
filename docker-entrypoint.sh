#!/bin/sh
set -e

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
