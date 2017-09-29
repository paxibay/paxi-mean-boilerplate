angular.module('br.loginModule', [])
    .controller('brLoginController', require('./br.login.controller.js'))
    .factory('brLoginService', require('./br.login.service.js'))
