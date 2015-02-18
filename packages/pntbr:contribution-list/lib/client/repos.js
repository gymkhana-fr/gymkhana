Meteor.startup(function () {
  reposContributionList(github_repo.list);
});

Template.repos.helpers({
  repos: function () {
    return github_repo.list;
  }
});

Template.repos.events({
  'click a.glyphicon': function (e) {
    e.preventDefault();

    $('ul.' + e.target.id).toggle();
  }
})
