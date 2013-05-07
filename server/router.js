Meteor.Router.add({
  '/post/:_id': function(id) {
    return [200, id];
  }
})