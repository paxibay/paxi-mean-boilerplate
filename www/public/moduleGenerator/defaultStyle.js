module.exports = function(moduleDashName) {
    var styleContent =  "/* Use public/css/vars.less to define global variables */ \n\n.moduleDashName{\n	width: 100%;\n\n	h1 {\n	  color: @font-color;\n	}\n}"
    var formatedContent = styleContent.replace(/moduleDashName/g, moduleDashName)
    return  formatedContent;
  };
