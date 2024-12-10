#!/bin/bash
echo "Script started at $(date)"
cd /home/trent/trentwiles.com || exit
git pull
npx @11ty/eleventy
echo "Script ended at $(date)"
