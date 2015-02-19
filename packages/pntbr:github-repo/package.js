Package.describe({
  name: 'pntbr:github-repo',
  version: '0.0.1',
  summary: 'Manage your github repository',
  git: 'https://github.com/daktary/meteor-github-repo',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('pntbr:github-repo.js', 'client');
  api.export(['github_repo']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('pntbr:github-repo.js', 'client');
  api.addFiles('pntbr:github-repo-tests.js', 'client');
});
