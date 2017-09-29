
/**
 * Default login system with the portal
 * @class LoginApp.
 */
// module.exports = angular.module('LoginModule',
//   [])

//   .config(
//     require('./js/login/login.routes.js')
//   )
//   .directive({
//     'apLogin' : require('./js/login/directies/login.js')
//   })
//   .controller({
//     'loginController' : require('./js/login/login.controller.js')
//   })

module.exports = {
	module:['LoginModule',[]],
	controller:'loginController as vm',
	service:'./modules/login/login.service.js',
	directive:'./modules/login/login.directive.js'
};
