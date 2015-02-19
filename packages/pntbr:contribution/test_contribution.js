Tinytest.add("convert base64 to text", function (test) {
  test.equal(base64toString('IyBBbGwgVGhhdA'), "# All That");
});

Tinytest.add("build contribution", function (test) {
  var jsonGithub = {
    data: {
      "name": "budget_participatif.md",
      "content": "I0J1ZGdldCBwYXJ0aWNpcGF0aWYgY2l0b3llbg0KDQojIyBFbiB1b\n"
    }
  }

  test.equal(buildContribution(jsonGithub).substr(0, 10), "#Budget pa");
});
