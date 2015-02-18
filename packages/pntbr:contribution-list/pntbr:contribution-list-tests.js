Tinytest.add("more than two contributions in list", function (test) {
  var repo = new Repo('pointbar', 'multibao-test');

  test.isTrue(buildContributionList(repo.getFilesList('contributions'), repo.identity).length > 2);
});

Tinytest.add("contributions list have title", function (test) {
  var repo = new Repo('pointbar', 'multibao-test');

  test.notEqual(buildContributionList(repo.getFilesList('contributions'), repo.identity)[1].title, undefined);
});
