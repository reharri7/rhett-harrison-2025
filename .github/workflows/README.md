# GitHub Actions Workflows

This directory contains GitHub Actions workflows for continuous integration and deployment.

## Workflows

### CI (ci.yml)

The CI workflow runs on push to the main branch and on pull requests. It performs the following tasks:

- Installs dependencies
- Runs linting
- Runs tests with coverage
- Builds the application

### Pull Request Validation (pull-request.yml)

The Pull Request Validation workflow runs on pull requests. It performs the following tasks:

- Validates the PR title according to conventional commit standards
- Reviews dependencies for security vulnerabilities

### Deploy Preview (preview.yml)

The Deploy Preview workflow runs on pull requests to the main branch. It performs the following tasks:

- Builds the application
- Deploys a preview version to Vercel
- Adds a comment to the PR with the preview URL

## Required Secrets

The following secrets are required for the workflows to function properly:

- `VERCEL_TOKEN`: API token for Vercel
- `VERCEL_ORG_ID`: Organization ID for Vercel
- `VERCEL_PROJECT_ID`: Project ID for Vercel

## Local Development

To test GitHub Actions workflows locally, you can use [act](https://github.com/nektos/act).

```bash
# Install act
brew install act

# Run the CI workflow
act -j test

# Run the Pull Request Validation workflow
act pull_request -j validate

# Run the Deploy Preview workflow
act pull_request -j deploy-preview
```