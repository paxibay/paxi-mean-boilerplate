module.exports = ['loggingService', '$q','$window', proxy];

function proxy(loggingService, $q, $window) {
    return {
        request: function(config) {


            if (config && config.url.indexOf("http") >= 0) {
                if (config.params) {

                }

                config.headers['X-Requested-With']= 'XMLHttpRequest';
                config.headers['angular-$http-service'] = 'proxy';
                config.url = "/WPAPI/Inter?wppxpath=" + btoa(config.url);
            }

            // return config || $q.when(config);

            return config;
        },
        response: function (response, data, data2) {

            if (response && response.status && response.status === 500) {
                return $q.reject(response);
            }

            return response || $q.when(response);
        },
        'responseError': function(rejection) {
      // do something on error
      if(rejection && rejection.status && rejection.status === 419 && $window.location.pathname != '/account/login/MustAuthLogin' ){
                $window.location.href='/account/login/MustAuthLogin';

      }
      return $q.reject(rejection);
    }
   /*     , // optional method
   'requestError': function(rejection) {
      // do something on error
      if (canRecover(rejection)) {
        return responseOrNewPromise
      }
      return $q.reject(rejection);
    }*/



    };
}
