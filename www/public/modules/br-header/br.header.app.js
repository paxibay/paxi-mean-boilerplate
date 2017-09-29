angular.module('br.headerModule', [])
    .config(require('./br.header.routes.js'))
    .controller('brHeaderController', require('./br.header.controller.js'))
    .factory('brHeaderService', require('./br.header.service.js'))
