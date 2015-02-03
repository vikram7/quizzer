import Ember from 'ember';
import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: ['data-tab-title'],

  classNames: ['content'],

  'data-tab-title': Ember.computed.alias('title'),

  tagName: 'div'
});
