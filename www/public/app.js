var config = require('./modules/core/core.config.js')[0]();

if (!config.production){
    require('./modules/br-comission/br.comission.app.js');
    require('./modules/br-policy/br.policy.app.js');
    require('./modules/br-settings/br.settings.app.js');
    require('./modules/br-welcome/br.welcome.app.js');
    require('./modules/br-notification/br.notification.app.js');
    require('./modules/br-messages/br.messages.app.js');
    require('./modules/br-settings/br.settings.app.js');
    require('./modules/br-help/br.help.app.js');
    require('./modules/br-header/br.header.app.js');
    require('./modules/br-core/br.core.app.js');
    require('./modules/br-login/br.login.app.js');
    require('./modules/br-footer/br.footer.app.js');
}

/* 
 * LOAD THE MODULE AS IT IS ABOVE.
 * INJECT THE MODULE IN THE BrokerPortal MODULE, SO IT IS BELLOW.
 */

var ngModule = angular.module('BrokerPortal', ['ngAnimate', 'ngRoute', 'ngMessages',
        'LoginModule', 'CoreModule', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.bootstrap', 'ui.select',
        'underscore', 'UtilModule', 'draggableTable',
        'angular-loading-bar', 'mockModule', 'ui.misc', 'ApUser', 
        'br.comissionModule', 'br.policyModule', 'br.settingsModule',
        'br.welcomeModule', 'br.notificationModule', 'br.messagesModule'
        ,'br.helpModule', 'br.headerModule', 'br.coreModule', 'br.loginModule'
        ,'smart-table', 'br.footerModule'
    ])
    .factory('WidgetServiceInterceptor', require('./modules/helpers/proxy.js'))
    .factory('loggingService', require('./modules/helpers/loggingService.js'))
    .factory('resourcesService', require('./modules/helpers/services/resourcesService.js'))
    .factory('stateService', require('./modules/helpers/services/state.service.js'))
    .factory('syncHttp', require('./modules/helpers/synchttp.js'))
    .factory('$exceptionHandler',['loggingService' , '$log',  function(loggingService, $log) {
  return function(exception, cause) {
   loggingService.logError(exception, cause);
   $log.error(exception);
    // throw exception;
  };
  }])
      .config(require('./app/routes.js'))
      .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
      }])
    .controller({
        'homeController': require('./app/home-page-controller.js')
    });

angular.module('draggableTable', [])
    .directive('angTable', require('./components/daggable_table/angTable.js'))
    .directive('droppable', require('./components/daggable_table/droppable.js'))
    .directive('draggable', require('./components/daggable_table/draggable.js'));

angular.module('mockModule', [])
    .config(require('./modules/mock/mock.routes.js'))
    .controller('mockController', require('./modules/mock/mock.controller.js'));

angular.module('LoginModule', ['CoreModule'])
    .config(require('./modules/login/login.routes.js'))
    .controller({
        'loginController': require('./modules/login/login.controller.js')
    })
    .directive('msLogin', require('./modules/login/login.directive.js'))
    .factory('loginService', require('./modules/login/login.service.js'));

angular.module('CoreModule', [])
    .controller({
        'coreController': require('./modules/core/core.controller.js')
    })
    // .directive('brokerPortal', require('./modules/core/core.directive.js'))
    .directive('myMaxlength', require('./modules/helpers/directives/maxlength.directive.js'))
    .directive('focusMe', require('./modules/helpers/directives/focus_me.directive.js'))
    // .factory('interpectAuthenticationError', require('./modules/core/core.interceptors.js'))
    .directive('backstretch', require('./modules/helpers/directives/backstretch.directive.js'))
    .directive('draggableModule', require('./modules/helpers/directives/draggable.directive.js'))
    .directive('draggableModuleHandle', require('./modules/helpers/directives/draggable-handle.directive.js'))
    .directive('tooltip', require('./modules/helpers/directives/tooltip.directive.js'))
    .factory('apCoreService', require('./modules/core/core.service.js'))
    .factory('apCache', require('./modules/core/core.cache.service.js'))
    .factory('storage', require('./modules/core/storage.service.js'))
    .factory('helper', require('./modules/helpers/helperFunctions.js'))
    .factory('coreConfig', require('./modules/core/core.config.js'))
    .controller({
        'errorMessageController': require('./modules/core/errorMessage/errorMessage.controller.js')
          })
    .directive('errorMessage', require('./modules/core/errorMessage/errorMessage.directive.js'));

angular.module('UtilModule', [])
    .service('anchorSmoothScroll', require('./modules/helpers/services/anchorSmoothScroll.js'));

angular.module('ApUser', [])
    .factory('userService', require('./modules/user/user.service.js'));

angular.module('underscore', [])
    .factory('_', function() {
        return window._; // assumes underscore has already been loaded on the page
    });


if (!config.isProduction()){
    angular.module('csr.desktop.atl', []);
}
// Begin of MemberModule

// slight update to account for browsers not supporting e.which
// $(function(){
//    var ctrlKeyDown = false;

//     $(document).ready(function(){
//         $(document).on("keydown", keydown);
//         $(document).on("keyup", keyup);
//     });

//     function keydown(e) {

//         if ((e.which || e.keyCode) == 116) {
//             // Pressing F5
//             e.preventDefault();
//         } else if ((e.which || e.keyCode) == 17) {
//             // Pressing  only Ctrl
//             ctrlKeyDown = true;
//         }
//     };

//     function keyup(e){
//         // Key up Ctrl
//         if ((e.which || e.keyCode) == 17)
//             ctrlKeyDown = false;
//     };

//      $(this).bind("contextmenu", function(e) {
//             e.preventDefault();
//         });
// });
