var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mock', {
    controller : 'mockController as vm',
    templateUrl :  config.path() + '/modules/mock/mock.tmpl.html'
  });
}]
