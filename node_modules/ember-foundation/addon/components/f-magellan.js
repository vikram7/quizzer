import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: ['data-magellan-expedition'],

  'data-magellan-expedition': 'fixed',

  tagName: 'div'
});
