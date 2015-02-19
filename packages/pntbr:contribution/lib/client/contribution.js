Template.contributionContent.helpers({
  content: function () {
    setContribution(this.repo, this.folder, this.file);

    return Session.get('contribution');
  }
});
