import FComponent from './f-component';

export default FComponent.extend({
  applicationController: null,

  breadCrumbs: function() {
    var breadCrumbs = [];
    var controllers = this.get('controllers');
    var defaultPaths = this.get('pathNames');

    controllers.forEach(function(controller, index) {
      var crumbName = controller.get('breadCrumbName');

      if (crumbName) {
        return breadCrumbs.addObject({
          isCurrent: false,
          name: crumbName,
          path: defaultPaths[index]
        });
      }
    });

    if (breadCrumbs.length > 0) {
      breadCrumbs[breadCrumbs.length - 1].isCurrent = true;
    }

    return breadCrumbs;
  }.property(
    'controllers.@each.breadCrumbName',
    'pathNames.[]'
  ),

  classNames: ['breadcrumbs'],

  controllers: function() {
    return this.get('handlerInfos').map(function(handlerInfo) {
      return handlerInfo.handler.controller;
    });
  }.property('handlerInfos.[]'),

  handlerInfos: function() {
    return this.get('router').router.currentHandlerInfos;
  }.property('applicationController.currentPath'),

  tagName: 'ul',

  pathNames: function() {
    return this.get('handlerInfos').map(function(handlerInfo) {
      return handlerInfo.name;
    });
  }.property('handlerInfos.[]'),

  router: null
});
