#!/bin/bash

# Simple script to test the Lighthouse CI workflow locally

echo "Testing Lighthouse CI workflow locally..."
echo "Building the application..."
npm run build

echo "Running Lighthouse CI..."
npm run lhci

echo "Lighthouse CI test completed successfully!"