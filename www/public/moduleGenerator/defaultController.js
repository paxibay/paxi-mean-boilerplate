module.exports = function(moduleName) {
    var controllerContent =  "module.exports = ['$scope', 'moduleNameService', moduleNameController] \n\nfunction moduleNameController($scope, moduleNameService) {\n  var vm = this; \n  vm.title = 'moduleName'\n}" 
		var formatedContent = controllerContent.replace(/moduleName/g, moduleName)
    return  formatedContent;
  };