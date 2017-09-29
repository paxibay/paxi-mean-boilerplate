var coreConfig = require('../core.config.js')[0]();

module.exports = [errorMessage];
function errorMessage(){
	return {
		controller : 'errorMessageController as vm',
		templateUrl : coreConfig.path() + '/modules/core/errorMessage/errorMessage.tmpl.html'
	}
}