import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: ['data-reveal'],

  classNames: ['reveal-modal'],

  'data-reveal': '',

  tagName: 'div'
});
