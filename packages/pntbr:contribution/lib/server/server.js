base64toString = function (base64) {
  return new Buffer(base64, 'base64').toString();
}

buildContribution = function (jsonGithub) {
  if (! jsonGithub) {
    throw new Meteor.Error("contrib", "no jsonGithub ressource");
  }
  return base64toString(jsonGithub.data.content);
}
