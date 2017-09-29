module.exports = function(moduleDashName, moduleAbbrev) {
    var controllerContent =  '<div class="moduleAbbrev-core moduleDashName">\n  <h1>{{vm.title}}</h1>\n</div>';
		var formatedContent = controllerContent.replace(/moduleDashName/g, moduleDashName)
			  																	 .replace(/moduleAbbrev/g, moduleAbbrev)
    return  formatedContent;
  };