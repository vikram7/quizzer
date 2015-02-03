import FComponent from './f-component';

export default FComponent.extend({
  classNames: ['switch'],

  inputId: function() {
    return this.get('elementId') + '-input';
  }.property(),

  tagName: 'fieldset',

  tabindex: 0,

  type: 'checkbox'
});
