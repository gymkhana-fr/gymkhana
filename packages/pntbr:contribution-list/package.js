Package.describe({
  name: 'pntbr:contribution-list',
  version: '0.0.1',
  summary: "A module to list contents, articles, datas, posts",
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use(['templating', 'handlebars'], 'client');
  api.use('pntbr:github-md', 'server');
  api.use('pntbr:github-repo', 'client');

  api.add_files([
    'lib/client/api-client.js',
    'lib/client/repos.html',
    'lib/client/repos.js',
    'lib/client/contribution-list.html',
    'lib/client/contribution-list.js',
  ], 'client');

  api.add_files([
    'lib/server/api-server.js',
    'lib/server/server.js'
  ], 'server');

  api.export(['setContributionList']);
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers', 'pntbr:github-md'], 'server');
  api.add_files('lib/server/server.js', 'server');
  api.addFiles('pntbr:contribution-list-tests.js', 'server');
});
