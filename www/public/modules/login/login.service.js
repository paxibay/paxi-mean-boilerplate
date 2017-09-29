module.exports = ['$http', 'syncHttp', 'coreConfig', '$rootScope', 'storage', '$window', '$location', 'userService', loginService];

function loginService($http, syncHttp, coreConfig, $rootScope, storage, $window, $location, userService) {
    var _currentAgent;
    var _loggedAgentProfile;
    var _loggedAgent;
    var stillLoading = false;

    return {
        getToken: getToken,
        removeToken: removeToken,
        getAgentUserName: getAgentUserName,
        getAgentSelf: getAgentSelf,
        getAgentSelfSync: getAgentSelfSync,
        setProfile: setProfile,
        reloadProfile: reloadProfile,
        reset: reset,
        logOut: logOut,
        getServiceInfo: getServiceInfo,
        setServiceInfo: setServiceInfo
    }

    function getServiceInfo() {
        // var _currentAgent;
        // var _loggedAgentProfile;
        // var _loggedAgent;
        return {
            currentAgent: _currentAgent,
            loggedAgentProfile: _loggedAgentProfile,
            loggedAgent: _loggedAgent
        }
    }

    function setServiceInfo(serverInfo) {
        if (!serverInfo) return;
        _currentAgent = serverInfo.currentAgent || undefined;
        _loggedAgentProfile = serverInfo.loggedAgentProfile || undefined;
        _loggedAgent = serverInfo.loggedAgent || undefined;
    }

    function reset() {
        _currentAgent = undefined;
        _loggedAgentProfile = undefined;
        _loggedAgent = undefined;
        stillLoading = false;
    }

    function logOut() {
        reset();
        if (coreConfig.isProduction()) {
            $window.location.href = '/account/signout';
        } else {
            $location.path('/login');
        }
    }

    function getAgentSelfSync() {
        return _loggedAgent;
    }

    function getAgentUserName() {
        return _currentAgent;
    }

    function getAgentProfile() {
        return _loggedAgentProfile;
    }

    function getAgentSelf() {
        if (_loggedAgent && _loggedAgent.Id) {
            return {
                then: function(fn) {
                    fn(_loggedAgent);
                }
            }
        } else {
            return setSelf();
        }
    }

    function setProfile() {
        if (!_currentAgent) {
            logOut();
        }
        $http.get(coreConfig.urlPath() + '/api/users/' + _currentAgent)
            .success(function(data) {
                _loggedAgentProfile = data;
                //setSelf().then(function(){});
            })
            .error(function(data) {
                console.error('Fail to get self data: ' + data);
            });
    }

    function proceedWithReloadAftergotTheCurrentUser(next, currentUserFromTheServer) {
        _currentAgent = currentUserFromTheServer;
        fireReloadProfile(next);
    }

    function reloadProfile(next) {
        if (!_currentAgent) {
            userService.getCurrentUser(proceedWithReloadAftergotTheCurrentUser, logOut, next)
        } else {
            return fireReloadProfile(next);
        }
    }

    function fireReloadProfile(next) {
        var data = syncHttp.post(coreConfig.urlPath() + '/api/users/' + _currentAgent, {});
        _loggedAgentProfile = data;
        setSelf();
        if (next) {
            next();
        }
        return true;
    }

    //Check whether the 
    function setSelf() {
        return $http.get(coreConfig.urlPath() + '/api/clients/' + coreConfig.getClient() + '/agents/self')
            .then(function(result) {
                _loggedAgent = result.data ? result.data : result;
            })
            .catch(function(data) {
                console.error('Fail to get self data: ' + data);
            });
    }


    function getToken(username, password) {
        _currentAgent = username;
        $http.post('/account/login', {
                username: username,
                password: password
            })
            .success(function(data) {
                //Log in successfully
                if (data && data.token) {
                    setProfile();
                    storage.put(data);
                    if (coreConfig.isProduction()) {
                        $window.location.href = '/';
                    } else {
                        $http.defaults.headers.xAuth = data;
                        $rootScope.$broadcast('login', data);
                    }
                } else {
                    $rootScope.$broadcast('failToLogin', data);
                    console.error('Fail to login: ' + data);
                }
            })
            .error(function(data, status, headers, config) {
                //Fail to log in
                $rootScope.$broadcast('failToLogin', data);
                console.error('Fail to login: ' + data);
            });
    }

    function removeToken(token) {
        $http.post('/account/logoff/?token=' + token)
            .success(function() {
                //Loged off successfully.
                $rootScope.$broadcast('logoff');
            })
            .error(function(data, status, headers, config) {
                $rootScope.$broadcast('logoffFail');
                console.error('Fail to logoff: ' + data);
            });
    }

}
