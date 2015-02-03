import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: ['data-alert'],

  classNames: ['alert-box'],

  'data-alert': ''
});
