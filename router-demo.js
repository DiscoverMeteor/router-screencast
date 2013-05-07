if (Meteor.isClient) {
  Template.postTemplate.postId = function() {
    return Session.get('currentPostId');
  }
}
