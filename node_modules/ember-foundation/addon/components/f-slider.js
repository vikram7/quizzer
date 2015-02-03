import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: ['data-slider'],

  classNames: ['range-slider'],

  'data-slider': '',

  setup: function() {
    var self = this;
    var slider = this.$();
    var value = this.get('value');

    if (value) {
      slider.foundation('slider', 'set_value', value);
    }

    slider.on('change.fndtn.slider', function() {
      var sliderValue = slider.attr('data-slider');

      self.set('value', sliderValue);
      self.sendAction('change', sliderValue);
    });
  }.on('didInsertElement'),

  tagName: 'div',

  updateSliderValue: function() {
    var slider = this.$();
    var value = this.get('value');

    if (slider.attr('data-slider') !== value) {
      slider.foundation('slider', 'set_value', value);
    }
  }.observes('value')
});
