module.exports = 
module.exports = function(moduleName, moduleAbrev, moduleAbbrevName) {
    var configContent =  "var config = require('../core/core.config.js')[0]();\n\nmodule.exports = ['$routeProvider', function($routeProvider) {\n  $routeProvider.when('/moduleName', {\n    controller : 'moduleAbbrevNameController as vm',\n    templateUrl :  config.path() + '/modules/moduleAbrev-moduleName/moduleAbrev.moduleName.tmpl.html'\n  });\n}]"
		var formatedContent = configContent.replace(/moduleName/g, moduleName)
																			 .replace(/moduleAbrev/g, moduleAbrev)
																			 .replace(/moduleAbbrevName/g, moduleAbbrevName)
    return  formatedContent;
  };