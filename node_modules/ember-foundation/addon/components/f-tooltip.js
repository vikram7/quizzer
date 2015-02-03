import Ember from 'ember';
import FComponent from './f-component';

export default FComponent.extend({
  'aria-haspopup': 'true',

  attributeBindings: ['aria-haspopup', 'data-tooltip', 'data-width', 'title'],

  classNameBindings: ['positionClass'],

  classNames: ['has-tip'],

  'data-tooltip': '',

  'data-width': Ember.computed.alias('width'),

  position: 'bottom',

  positionClass: function() {
    return 'tip-' + this.get('position');
  }.property('position'),

  tagName: 'span'
});
