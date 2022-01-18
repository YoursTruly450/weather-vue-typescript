#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git coomit -m 'New Deployment'
git push -f github.com/YoursTruly450/weather-vue-typescript main:gh-pages

cd -