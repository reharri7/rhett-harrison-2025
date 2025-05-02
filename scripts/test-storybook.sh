#!/bin/bash

# Simple script to test the Storybook setup locally

echo "Testing Storybook setup locally..."
echo "Building Storybook..."
npm run build-storybook

if [ $? -eq 0 ]; then
  echo "Storybook build successful!"
  echo "You can now run 'npm run storybook' to start Storybook locally."
else
  echo "Storybook build failed. Please check the error messages above."
  exit 1
fi

echo "Storybook test completed successfully!"