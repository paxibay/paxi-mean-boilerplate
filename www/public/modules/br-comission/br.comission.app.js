angular.module('br.comissionModule', [])
    .config(require('./br.comission.routes.js'))
    .controller('brComissionController', require('./br.comission.controller.js'))
    .factory('brComissionService', require('./br.comission.service.js'))
