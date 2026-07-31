#!/bin/bash
set -e

#Stop the runing conatiner
containerid=`docker ps | awk -F " " '{print $1}'`
docker rm -f $containerid