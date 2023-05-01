#!/usr/bin/env sh

# abort ion errors
set -e

# build
#npm run build

# navigate into the build output directory
cd build

#git init
#git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:HectorIdme/meme_generator.git main:gh-pages

