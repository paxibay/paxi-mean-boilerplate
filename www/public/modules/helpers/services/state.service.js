
module.exports = [ 'coreConfig', '$http','_','syncHttp',  stateService];

function stateService( coreConfig, $http, _,syncHttp) {

     return {
        push: push,
        fetch: fetch
    };



	// values can ne one object {key, value} or a collection of [{key, value}]
    //The retrieve is synchronous
    function push(values){

    	if(coreConfig.isProduction()){
    		$http.post("/WPAPI/SessionPush", values);

    	}
    }

    // keys can be one value or a collection of values to be returned.
    // it will return an object of type {key, value}, or a collection of [{key, value}] if a collection is paasd
    //The retrieve is synchronous
	 function fetch(keys){
	 	if(coreConfig.isProduction()){
	 		return syncHttp.post("/WPAPI/SessionFetch", keys);
	 	}
	}

}


