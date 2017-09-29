
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
	module:['CoreModule',[]],
	controller:'coreController as coreVm',
	service:'./modules/core/core.service.js',
	storage:'./modules/core/storage.service.js',
	directive:'./modules/core/core.directive.js'
};
