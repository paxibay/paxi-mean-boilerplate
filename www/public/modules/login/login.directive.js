module.exports = ['coreConfig', msLogin];
function msLogin(coreConfig){
	return {
		controller : 'loginController as vm',
		templateUrl : coreConfig.path() + '/modules/login/login.tmpl.html'
	}
}
