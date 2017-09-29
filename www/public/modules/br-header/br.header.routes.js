var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/header', {
    controller : 'brHeaderController as vm',
    templateUrl :  config.path() + '/modules/br-header/br.header.tmpl.html'
  });
}]