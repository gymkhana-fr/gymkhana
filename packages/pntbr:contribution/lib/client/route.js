Meteor.startup(function () {
  Router.map(function () {
    this.route('contribution', {
      path: '/:folder/:owner/:repo/:slug',
      template: 'contributionContent',
      data: function () {
        return {
          repo: {owner:  this.params.owner, repo:  this.params.repo},
          folder: this.params.folder,
          file: this.params.slug + '.md'
        };
      }
    });
  });
});
