Meteor.startup(function () {
  Assets.getText("metadata.json", function (err, metadata) {
    Cards.remove({});
    _.each(JSON.parse(metadata), function (card) {
      Assets.getText(card.slug + ".md", function (err, content) {
        card.content = content;
        Cards.insert(card);
      }); 
    }); 
  });
  
  Meteor.publish("all-cards", function () {
    return Cards.find();
  });
});