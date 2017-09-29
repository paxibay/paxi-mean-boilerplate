var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/comission', {
    controller : 'brComissionController as vm',
    templateUrl :  config.path() + '/modules/br-comission/br.comission.tmpl.html'
  });
}]