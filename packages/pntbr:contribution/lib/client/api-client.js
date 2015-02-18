setContribution = function (repo, folder, filename) {
  Meteor.apply('getContribution', [repo.owner, repo.repo, folder, filename], function (err, result) {
    Session.set('contribution', result);
  });
}
