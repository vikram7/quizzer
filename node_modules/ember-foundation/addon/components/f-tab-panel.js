import FComponent from './f-component';

export default FComponent.extend({
  setup: function() {
    var tabs = [];

    this.$('.content').each(function() {
      tabs.push({
        href: '#' + this.getAttribute('id'),
        title: this.getAttribute('data-tab-title')
      });
    });

    this.set('tabs', tabs);
  }.on('didInsertElement'),

  tagName: 'div'
});
