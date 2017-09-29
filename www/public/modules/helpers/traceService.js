
module.exports = [ 'coreConfig', '$rootScope', 'storage', '_', 'helper',"$log","$window", "loggingService",  traceService];

function traceService( coreConfig, $rootScope, storage, _, helper,$log,$window, loggingService){
	 return{
            print : printFn,
            trace: traceFn

        };


	 function printFn(log){
	 	if (log.error && log.error === 401){
	 	  
	 	    $location.path('/login');
	 	}
	 	return log.message + ' [Exception :]' + log.e.toString();
	 }

	 function traceFn(action, message){

	 	try{
                // use our traceService to generate a stack trace

				if(coreConfig.isProduction()){
                // use AJAX (in this example jQuery) and NOT
                // an angular service such as $http
	                $.ajax({
	                    type: "POST",
	                    url: "/WPApi/Trace",
	                    contentType: "application/json",
	                    data: angular.toJson({
	                       action : action, message: message
	                    })
	                });
            	}
            } catch (loggingError){
                loggingService.log(loggingError,"Failed to capture trace");
            }
	 }
}