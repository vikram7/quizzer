import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('component-demos', { path: '/components/' }, function () {
    this.route('accordion');
    this.route('alerts');
    this.route('breadcrumbs');
    this.route('buttons');
    this.route('clearing');
    this.route('dropdowns');
    this.route('joyride');
    this.route('magellan');
    this.route('pagination');
    this.route('progress-bars');
    this.route('reveal-modal');
    this.route('sliders');
    this.route('switches');
    this.route('tabs');
    this.route('tooltips');
  });

  this.route('kitchen-sink');
});

export default Router;
