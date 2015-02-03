import FComponent from './f-component';

export default FComponent.extend({
  classNames: ['progress'],

  meterStyle: function() {
    return 'width: ' + this.get('value') + '%;';
  }.property('value'),

  tagName: 'div',

  value: 0
});
