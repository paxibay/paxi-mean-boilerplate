module.exports = ['$http', 'coreConfig', '$rootScope', 'storage', '_', 'helper', userService];

function userService($http, coreConfig, $rootScope, storage, _, helper) {
    var _user = '';
    return {
        getCurrentUser: getCurrentUser,
        getCachedUser: getCachedUser,
        clearCachedUser: clearCachedUser,
        getServiceInfo: getServiceInfo,
        setServiceInfo: setServiceInfo
    };

    function getServiceInfo() {
        return {
            user: _user
        }
    }

    function setServiceInfo(serverInfo) {
        if (!serverInfo) return;

        _user = serverInfo.user;
    }

    function clearCachedUser() {
        _user = '';
    }

    function getCachedUser() {
        return _user;
    }

    function getCurrentUser(next, fail, paramForNext) {
        // if (coreConfig.isProduction()) {
        $rootScope.$broadcast('systemIsLoading');
        $http.get(coreConfig.widgetPath() + '/getCurrentUser').success(function(data) {
            $rootScope.$broadcast('retrieveCurrentUser', data);
            $rootScope.$broadcast('systemIsLoaded');
            _user = data;   
            if (next) {
                next(paramForNext);
            }
        }).error(function() {
            fail();
            $rootScope.$broadcast('systemIsLoaded');
        });
        // } else {
        //     var tmpData = {};
        //     tmpData.userName = 'test user';
        //     $rootScope.$broadcast('retrieveCurrentUser', tmpData);
        //     if (next){
        //         next();
        //     }

        // }
    }




    function getListClients() {
        $rootScope.$broadcast('systemIsLoading');
        $http.get(coreConfig.widgetPath() + '/getListClients').success(function(data) {
            $rootScope.$broadcast('retrieveClientList');
            $rootScope.$broadcast('systemIsLoaded');
        }).error(function() {
            $rootScope.$broadcast('systemIsLoaded');
        });
    }
}
