import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['data-magellan-arrival'],

  'data-magellan-arrival': function() {
    return this.get('name');
  }.property('name'),

  tagName: 'dd'
});
