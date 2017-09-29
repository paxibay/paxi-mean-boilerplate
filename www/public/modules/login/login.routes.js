var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    controller : 'loginController as vm',
    templateUrl :  config.path() + '/modules/login/login.tmpl.html'
  });
}]
