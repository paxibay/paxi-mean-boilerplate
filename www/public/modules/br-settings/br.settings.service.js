module.exports = ['$http', '$rootScope', 'coreConfig', brSettingsService];

function brSettingsService($http, $rootScope, coreConfig) {
  return {
    get: get,
    set: set
  }

  function get() {
    $rootScope.$broadcast('systemIsLoading');

    var url = coreConfig.urlPath() + '/api/clients/' + coreConfig.getClient() + '/brSettings/get';
    return $http.get(url)
      .success(function(data, status, headers) {
        $rootScope.$broadcast('systemIsLoaded');

        // console.log('configuration loaded');	    
      })
      .error(function(data, status, headers) {
        console.log('brSettingsService failed to get');
        $rootScope.$broadcast('systemIsLoaded');

      });
  }

  function set(info) {
    $rootScope.$broadcast('systemIsLoading');

    var url = coreConfig.urlPath() + '/api/clients/' + coreConfig.getClient() + '/brSettings/post';
    return $http.post(url, info)
      .success(function(data, status, headers) {
        $rootScope.$broadcast('systemIsLoaded');

        // console.log('configuration loaded');	    
      })
      .error(function(data, status, headers) {
        console.log('brSettingsService failed to post');
        $rootScope.$broadcast('systemIsLoaded');

      });
  }
}