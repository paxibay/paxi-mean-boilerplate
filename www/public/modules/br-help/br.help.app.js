angular.module('br.helpModule', [])
    .config(require('./br.help.routes.js'))
    .controller('brHelpController', require('./br.help.controller.js'))
    .factory('brHelpService', require('./br.help.service.js'))
