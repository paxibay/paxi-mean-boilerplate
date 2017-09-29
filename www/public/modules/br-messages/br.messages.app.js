angular.module('br.messagesModule', [])
    .config(require('./br.messages.routes.js'))
    .controller('brMessagesController', require('./br.messages.controller.js'))
    .factory('brMessagesService', require('./br.messages.service.js'))
