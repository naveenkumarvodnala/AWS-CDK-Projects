#!/bin/bash
set -e

#pull the docker image
docker pull naveenkumar116/simple-app:latest

#run the docker container
docker run -d -p 3000:3000 naveenkumar116/simple-app:latest