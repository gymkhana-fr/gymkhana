Meteor.startup(function () {
  Meteor.methods({
    getContribution: function (owner, repo, folder, filename) {
      var repo = new Repo(owner, repo);

      return buildContribution(repo.getFile(folder, filename));
    }
  });
});
