unslug = function (slug) {
  return slug.replace(/_/g, ' ');
}

buildContributionList = function (jsonGithub, repo) {
  if (! jsonGithub) {
    throw new Meteor.Error("contrib-list", "no jsonGithub ressource");
  }

  return jsonGithub.data.filter(function (contributionMeta) {
    return /\.md$/.test(contributionMeta.name);
  }).map(function (contributionMeta) {
    var name = contributionMeta.name.split('.md')[0];

    return {
      slug: name,
      title: unslug(name),
      repo: repo
    };
  });
}
