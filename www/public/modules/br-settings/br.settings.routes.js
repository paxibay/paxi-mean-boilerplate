var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/settings', {
    controller : 'brSettingsController as vm',
    templateUrl :  config.path() + '/modules/br-settings/br.settings.tmpl.html'
  });
}]