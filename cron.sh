#!/bin/bash
echo "Script started at $(date)"
cd /home/trent/trentwiles.com || exit
git pull
/home/trent/.nvm/versions/node/v19.4.0/bin/npx @11ty/eleventy
echo "Script ended at $(date)"
