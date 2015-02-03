import Ember from 'ember';

export default Ember.Controller.extend({
  switchesOptions: [
    {
      id: 'a',
      label: 'Off',
      value: 'off'
    }, {
      id: 'a1',
      label: 'On',
      value: 'on'
    }
  ],

  switchesValue: 'off'
});
