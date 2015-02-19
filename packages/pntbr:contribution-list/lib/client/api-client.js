setContributionList = function (repo, folder) {
  Meteor.apply('getContributionList', [repo.owner, repo.repo, folder], function (err, result) {
    Session.set(repo.owner + '/' + repo.repo, result);
  });
}

reposContributionList = function (repos) {
  repos.map(function (repo) {
    setContributionList(repo, 'contributions');
  });
}
