import FComponent from './f-component';

export default FComponent.extend({
  'aria-hidden': 'true',

  attributeBindings: ['aria-hidden', 'data-dropdown-content'],

  classNameBindings: ['content'],

  classNames: ['f-dropdown'],

  'data-dropdown-content': function() {
    if (this.classNames.indexOf('content') > -1) {
      return '';
    }

    return;
  }.property('class'),

  tabindex: -1,

  tagName: function() {
    if (this.get('content')) {
      return 'div';
    }

    return 'ul';
  }.property('content')
});
