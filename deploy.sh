
#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create a temporary directory for gh-pages
echo "Preparing deployment..."
rm -rf gh-pages-temp
mkdir gh-pages-temp

# Copy build files
cp -r dist/* gh-pages-temp/

# Navigate to the temp directory
cd gh-pages-temp

# Initialize git and create gh-pages branch
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git branch -M gh-pages
git remote add origin https://github.com/aashishsec/aashishsec.github.io.git
git push -f origin gh-pages

# Clean up
cd ..
rm -rf gh-pages-temp

echo "Deployment complete! Your site should be available at https://aashishsec.github.io/"
