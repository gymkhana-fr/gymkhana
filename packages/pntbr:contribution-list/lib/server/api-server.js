Meteor.startup(function () {
  Meteor.methods({
    getContributionList: function (owner, repo, folder) {
      var repo = new Repo(owner, repo);

      return buildContributionList(repo.getFilesList(folder), repo.identity);
    }
  });
});
