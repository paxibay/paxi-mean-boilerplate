angular.module('br.settingsModule', [])
    .config(require('./br.settings.routes.js'))
    .controller('brSettingsController', require('./br.settings.controller.js'))
    .factory('brSettingsService', require('./br.settings.service.js'))
