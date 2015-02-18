github_repo = {
  list: [],
  byLabel: function (label) {
    return github_repo.list.reduce(function (data) {
      if (data.label === label) {
        return {owner: data.owner, repo: data.repo};
      }
    });
  }
}
