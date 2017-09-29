angular.module('br.coreModule', [])
    .controller('brCoreController', require('./br.core.controller.js'))
    .factory('brCoreService', require('./br.core.service.js'))
