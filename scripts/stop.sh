#!/bin/bash
set -e

# Get running container IDs (skipping the header automatically)
CONTAINER_IDS=$(docker ps -q)

# Only attempt to stop/remove if container IDs exist
echo "Stopping container(s): $CONTAINER_IDS"
docker rm -f $CONTAINER_IDS