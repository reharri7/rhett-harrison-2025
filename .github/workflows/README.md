# GitHub Actions Workflows

This directory contains GitHub Actions workflows for continuous integration and deployment.

## Workflows

### CI (ci.yml)

The CI workflow runs on push to the main branch and on pull requests. It performs the following tasks:

- Installs dependencies
- Runs linting
- Runs tests with coverage
- Builds the application

### Storybook (storybook.yml)

The Storybook workflow runs on push to the main branch. It performs the following tasks:

- Installs dependencies
- Builds Storybook
- Deploys Storybook to GitHub Pages

## Local Development

To test GitHub Actions workflows locally, you can use [act](https://github.com/nektos/act).

```bash
# Install act
brew install act

# Run the CI workflow
act -j test

# Run the Lighthouse CI workflow
act -j lighthouse

# Run the Pull Request Validation workflow
act pull_request -j validate

# Run the Deploy Preview workflow
act pull_request -j deploy-preview

# Run the Storybook workflow
act -j deploy
```

You can also run Lighthouse CI locally:

```bash
# Run Lighthouse CI directly
npm run lhci

# Or use the convenience script that builds the app first
npm run lighthouse
```
