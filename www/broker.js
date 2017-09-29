var fs = require('fs');

var args = process.argv;
var moduleName,
		dirName,
		fileName,
		moduleAbbrevName;
var APP_NAME = 'br'; 

if (args && args.length > 0){
	moduleName = args[2];
	dirName = APP_NAME + '-'+args[2];
	fileName = APP_NAME + '.'+args[2];
	moduleAbbrevName = APP_NAME + capitalizeFirstLetter(moduleName); 

	ensureExists(dirName, 0744, generateModule);

}

function generateModule(){
	// createApp();
	createController();
	createControllerSpec();
	createService();
	createServiceSpec();
	createRoute();
	createTemplate();
	createStyle();
	createApp();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function createController(){
	createModuleFile('controller', require('./public/moduleGenerator/defaultController.js')(moduleAbbrevName));
}

function createControllerSpec(){
	createSpecFile('controller.spec', require('./public/moduleGenerator/defaultController.spec.js', '.js')(moduleAbbrevName));
}

function createStyle(){
	createModuleFile('style', require('./public/moduleGenerator/defaultStyle.js')(dirName), '.less');
}

function createService(){
	createModuleFile('service', require('./public/moduleGenerator/defaultService.js')(moduleAbbrevName));
}

function createServiceSpec(){
	createSpecFile('service.spec', require('./public/moduleGenerator/defaultService.spec.js', '.js')(moduleAbbrevName));
}

function createRoute(){
	createModuleFile('routes', require('./public/moduleGenerator/defaultRoute.js')(moduleName, APP_NAME, moduleAbbrevName));
}

function createApp(){
	createModuleFile('app', require('./public/moduleGenerator/defaultApp.js')(moduleName, APP_NAME, moduleAbbrevName));
}

function createTemplate(){
  createModuleFile('tmpl', require('./public/moduleGenerator/defaultView.js')(dirName, APP_NAME), '.html');
	// createModuleFile('tmpl', '<h1>{{vm.title}}</h1>', '.html');
}

function createModuleFile(fileType, content, ext, filePathType){
	createFile(fileType, content, ext, '/public/modules/')
}

function createSpecFile(fileType, content, ext, filePathType){
	createFile(fileType, content, ext, '/test/spec/')
}

function createFile(fileType, content, ext, filePath){
	fs.writeFile(__dirname + filePath + dirName+ '/'+fileName+'.'+ fileType + (ext || '.js'), content, function (err) {
	  // if (err) return console.log(err);
	  // console.log('Hello World > helloworld.txt');
	});	
}


function ensureExists(path, mask, cb) {
		var pathOne = __dirname + '/public/modules/' + path;
		var pathTwo = __dirname + '/test/spec/' + path;
    if (typeof mask == 'function') { // allow the `mask` parameter to be optional
        cb = mask;
        mask = 0777;
    }

 		fs.mkdir(pathTwo, mask, function(){
	    fs.mkdir(pathOne, mask, function(err) {
	        if (err) {
	            if (err.code == 'EEXIST') {cb(null);} // ignore the error if the folder already exists
	            else cb(err); // something else went wrong
	        } else cb(null); // successfully created folder
	    });
 		});

}

