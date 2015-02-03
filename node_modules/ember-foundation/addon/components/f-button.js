import DropdownEnabled from '../mixins/dropdown-enabled';
import Ember from 'ember';
import FComponent from './f-component';

export default FComponent.extend(DropdownEnabled, {
  attributeBindings: ['aria-label', 'data-reveal-id', 'role'],

  classNames: ['button'],

  click: function() {
    this.sendAction();
  },

  'data-reveal-id': Ember.computed.alias('revealId'),

  isSplit: function() {
    return this.get('dropdown') && this.classNames.indexOf('split') > -1;
  }.property('class'),

  role: 'button',

  tagName: 'a',
});
