module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      startServerCommand: 'npm run build && npm run start',
      url: ['http://localhost:3000/', 'http://localhost:3000/blog', 'http://localhost:3000/projects']
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', {minScore: 0.8}],
        'categories:accessibility': ['error', {minScore: 0.9}],
        'categories:best-practices': ['warn', {minScore: 0.9}],
        'categories:seo': ['warn', {minScore: 0.9}]
      }
    }
  }
};