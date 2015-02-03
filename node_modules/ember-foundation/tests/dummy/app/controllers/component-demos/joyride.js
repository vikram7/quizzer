import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    startDemo: function() {
      this.set('startDemo', true);
    }
  },

  startDemo: false
});
