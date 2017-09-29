module.exports = ['coreConfig', "$log", "$window", "loggingService", syncHttp];

function syncHttp(coreConfig, $log, $window, loggingService) {
    return {
        get: get,
        post: post
    };

    function get(url) {
        try {
            if (url.indexOf("http") >= 0) {
                url = "/WPAPI/Inter?wppxpath=" + btoa(url);
            }
            var request = new XMLHttpRequest();
            request.open('GET', url, false); // `false` makes the request synchronous
            request.send(null);

            return request.responseText ? angular.fromJson(request.responseText) : null;

        } catch (e) {
            loggingService.logError(e, "Failed to execute " + url);
        }
    }

    function post(url, data) {
        try {
        	//avoid sending wrong requests to the server;
            if (hasUndefinedParameter(url)) return;

            //parse url if it's a full url with http or https  
            var newUrl = parseUrl(url);

            var request = new XMLHttpRequest();
            request.open('post', newUrl, false); // `false` makes the request synchronous
            request.send(angular.toJson(data));
            return request.responseText ? angular.fromJson(request.responseText) : null;
        } catch (e) {
            loggingService.logError(e, "Failed to execute " + url);
        }
    }

    function parseUrl(url) {
        if (url.indexOf("http") >= 0) {
            return "/WPAPI/Inter?wppxpath=" + btoa(url);
        }
        return url;
    }

    //If there is a wrong parameter, log a javascript error.
    function hasUndefinedParameter(url) {
        if (url.indexOf("undefined") >= 0) {
            // loggingService.logError('Parameter error', 'Url contains undefine element: ' + url);
            return true;
        }
        return false;
    }
}
