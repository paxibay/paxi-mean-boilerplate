// var coreConfig = require('../core/core.config.js')[0]();
module.exports = ['$location', '$rootScope', interpectAuthenticationError];

function interpectAuthenticationError($location, $rootScope){
    return {
        // response: function(myResponse){
        //     if (myResponse.status === 401) {
        //         $location.path('/login');
        //     }
        // },
        responseError: function(rejection) {
            if (rejection.status === 401) {
               
                $location.path('/login');
            } 
            else {
            	$rootScope.$broadcast('errorOccured', loggingService.handleHttpError('getCases', httpError));
            }
        }
    }
}