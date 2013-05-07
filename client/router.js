Meteor.Router.add({
  '/': {
    as: 'home',
    to: function() {
      return Session.get('loggedIn') ? 'homePageTemplateLoggedIn' : 'homePageTemplateLoggedOut';
    },
  },
  
  '/page1': 'pageOneTemplate',
  '/page2': 'pageTwoTemplate',
  '/post/:_id': {
    to: 'postTemplate', 
    and: function(id) { Session.set('currentPostId', id); }
  }
});

Meteor.Router.filters({
  checkLoggedIn: function(page) {
    if (Session.get('loggedIn'))
      return page;
      
    return 'accessDenied';
  }
});

Meteor.Router.filter({
  checkLoggedIn: {only: ['pageOneTemplate', 'pageTwoTemplate']}
})