var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    controller : 'brWelcomeController as vm',
    templateUrl :  config.path() + '/modules/br-welcome/br.welcome.tmpl.html'
  });
}]