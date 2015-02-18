Tinytest.add('github_repo is defined', function (test) {
  test.notEqual(github_repo.list, undefined);
});

Tinytest.add('properties is create with the label', function (test) {
  github_repo.list = [{label: 'gymkhana', owner: 'pointbar', repo: 'gymkhana-contenu'}];

  console.log(github_repo.gymkhana);
  test.equal(github_repo.byLabel('gymkhana').owner, 'pointbar');
});

