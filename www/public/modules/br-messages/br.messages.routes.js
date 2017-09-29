var config = require('../core/core.config.js')[0]();

module.exports = ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/messages', {
    controller : 'brMessagesController as vm',
    templateUrl :  config.path() + '/modules/br-messages/br.messages.tmpl.html'
  });
}]