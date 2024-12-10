#!/bin/bash
echo "Script started at $(date)"
# Source npx
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Continue with the rest of the script
cd /home/trent/trentwiles.com || exit
git pull
npx @11ty/eleventy
echo "Script ended at $(date)"
