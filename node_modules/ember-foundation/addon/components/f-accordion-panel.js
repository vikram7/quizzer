import FComponent from './f-component';

export default FComponent.extend({
  href: function() {
    return '#' + this.get('panelId');
  }.property('panelId'),

  panelId: function() {
    return this.get('elementId') + '-panel';
  }.property('elementId'),

  tagName: 'dd'
});
