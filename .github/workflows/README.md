# GitHub Actions Workflows

This directory contains GitHub Actions workflows for continuous integration and deployment.

## Workflows

### CI (ci.yml)

The CI workflow runs on push to the main branch and on pull requests. It performs the following tasks:

- Installs dependencies
- Runs linting
- Runs tests with coverage
- Builds the application
