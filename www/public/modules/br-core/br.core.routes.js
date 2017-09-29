var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/core', {
    controller : 'brCoreController as vm',
    templateUrl :  config.path() + '/modules/br-core/br.core.tmpl.html'
  });
}]