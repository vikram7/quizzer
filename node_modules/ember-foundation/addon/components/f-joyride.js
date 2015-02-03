import Ember from 'ember';
import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: ['data-joyride', 'style'],

  'data-joyride': '',

  // TODO: Add "start" clear when joyride is closed

  start: false,

  startChanged: function() {
    if (this.get('start')) {
      Ember.$(document).foundation('joyride', 'start');
    }
  }.observes('start'),

  style: 'display: none;',

  tagName: 'ol'
});
