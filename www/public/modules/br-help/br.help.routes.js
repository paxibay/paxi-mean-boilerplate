var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/help', {
    controller : 'brHelpController as vm',
    templateUrl :  config.path() + '/modules/br-help/br.help.tmpl.html'
  });
}]