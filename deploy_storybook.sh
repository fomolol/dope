#!/bin/bash

yarn run build-storybook

# Replace / with . as this is what Github Pages wants.
cd storybook
sed -i '' 's/\\/fonts/.\\/fonts/g' *.css
sed -i '' 's/\\/fonts/.\\/fonts/g' *.js

cd ..

storybook-to-ghpages --existing-output-dir=storybook
