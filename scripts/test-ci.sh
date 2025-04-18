#!/bin/bash

# Simple script to test the CI workflow locally

echo "Testing CI workflow locally..."
echo "Running linting..."
npm run lint

echo "Running tests with coverage..."
npm run test:coverage

echo "Building the application..."
npm run build

echo "CI workflow test completed successfully!"