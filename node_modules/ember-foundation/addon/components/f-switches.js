import FComponent from './f-component';

export default FComponent.extend({
  classNames: ['switch'],

  setup: function () {
    var self = this;

    this.$('input[value="' + this.get('value') + '"]').prop('checked', true);

    this.$('input').on('change', function() {
      self.set('value', self.$(this).val());
    });
  }.on('didInsertElement'),

  tabindex: 0,

  tagName: 'fieldset',

  type: 'radio'
});
