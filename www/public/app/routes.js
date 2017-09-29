var coreConfig = require('../modules/core/core.config.js')[0]();

module.exports = ["$httpProvider", "$routeProvider", "$locationProvider", "$sceDelegateProvider", function($httpProvider, $routeProvider, $locationProvider, $sceDelegateProvider) {

    $httpProvider.defaults.useXDomain = true;
    if (coreConfig.isProduction()){
    	$httpProvider.interceptors.push("WidgetServiceInterceptor");
    }

    delete $httpProvider.defaults.headers.common["X-Requested-With"];

    $routeProvider.when('/', {
	    controller : 'homeController as vm',
	    templateUrl : coreConfig.path() + '/views/home-page.html'
	  });
    //.otherwise({ redirectTo: "/login" });

}]


// ['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/', {
//     controller : 'homeController as vm',
//     templateUrl : coreConfig.path() + '/views/home-page.html'
//   });
// }]
