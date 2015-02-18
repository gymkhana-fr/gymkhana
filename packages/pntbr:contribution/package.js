Package.describe({
  summary: "A module to share contents, articles, datas, posts",
  version: "0.0.2",
  git: ""
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.0.3.1');
  api.use(['templating', 'handlebars'], 'client');

  api.add_files([
    'lib/client/api-client.js',
    'lib/client/contribution.html',
    'lib/client/contribution.css',
    'lib/client/contribution.js',
    'lib/client/route.js'
  ], 'client');

    api.add_files([
      'lib/server/api-server.js',
      'lib/server/server.js'
    ], 'server');
});

Package.on_test(function(api) {
  api.add_files('test_contribution.js', 'server');
  api.add_files('lib/server/server.js', 'server');
  api.use(['tinytest', 'test-helpers'], 'server');
});
