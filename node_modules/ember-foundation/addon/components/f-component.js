import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['data-options', 'tabindex'],

  'data-options': Ember.computed.alias('options'),

  initFoundation: function() {
    Ember.$(document).foundation();
  }.on('didInsertElement')
});
