import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: ['data-accordion'],

  classNames: ['accordion'],

  'data-accordion': '',

  tagName: 'dl'
});
