import Ember from 'ember';

export default {
  name: 'ember-foundation',

  initialize: function(container, app) {
    app.inject('component:f-breadcrumbs', 'router', 'router:main');
  }
};
