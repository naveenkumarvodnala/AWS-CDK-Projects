#!/bin/bash
set -e

# Get running container IDs
CONTAINER_IDS=$(docker ps -q)

# Check if CONTAINER_IDS is non-empty before attempting to stop
if [ -n "$CONTAINER_IDS" ]; then
    echo "Stopping container(s): $CONTAINER_IDS"
    docker rm -f $CONTAINER_IDS
else
    echo "No running containers found to stop."
fi