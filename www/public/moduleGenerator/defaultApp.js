// module.exports = moduleAbrevModuleNameModule;
module.exports = function(moduleName, moduleAbrev, moduleAbbrevName) {
    var controllerContent =  "angular.module('moduleAbrev.ModuleNameModule', [])\n    .config(require('./moduleAbrev.ModuleName.routes.js'))\n    .controller('moduleAbbrevNameController', require('./moduleAbrev.ModuleName.controller.js'))\n    .factory('moduleAbbrevNameService', require('./moduleAbrev.ModuleName.service.js'))\n"
		var formatedContent = controllerContent.replace(/ModuleName/g, moduleName)
																					 .replace(/moduleAbrev/g, moduleAbrev)
																					 .replace(/moduleAbbrevName/g, moduleAbbrevName)
    return  formatedContent;
  };
