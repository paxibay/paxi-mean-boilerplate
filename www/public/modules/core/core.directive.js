var coreConfig = require('../core/core.config.js')[0]();

module.exports = [adminPortal];
function adminPortal(){
	return {
		controller : 'coreController as coreVm',
		templateUrl : coreConfig.path() + '/modules/core/core.tmpl.html'
	}
}
