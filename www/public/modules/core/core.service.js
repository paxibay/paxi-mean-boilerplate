module.exports = ['$http', 'syncHttp', '$rootScope', 'coreConfig', '$location', 'loggingService', 'helper', apCoreService];

var __ = require('../helpers/helperFunctions.js')();

function apCoreService($http, syncHttp, $rootScope, coreConfig, $location, loggingService, helper) {

    var _memberSearch = {};
    var _metaData = {};
    var inCall = false;
    var previousroute = "";
    return {
        getMemberSearch: getMemberSearch,
        setMemberSearch: setMemberSearch,
        loadMetaData: loadMetaData,
        getMetaData: getMetaData,
        getCurrentContext: getCurrentContext,
        setCurrentContext: setCurrentContext,
        isInCall: isInCall,
        changeContext: changeContext,
        setPrevRoute: setPrevRoute,
        getPrevRoute: getPrevRoute,
        getServiceInfo: getServiceInfo,
        setServiceInfo: setServiceInfo
    };

    function getServiceInfo() {
        return {
            memberSearch: _memberSearch,
            metaData: _metaData,
            inCall: inCall
        }
    }

    function setServiceInfo(serverInfo) {
        if (!serverInfo) return;

        _memberSearch = serverInfo.memberSearch;
        _metaData = serverInfo.metaData;
        inCall = serverInfo.inCall;
    }

    function setPrevRoute(route) {
        previousroute = route;
    }

    function getPrevRoute() {
        return previousroute;
    }

    function isInCall(status, avoidBackEndReach) {
        if (status !== undefined) {
            inCall = status;
            if (!avoidBackEndReach) {
                setServerCAllStatus(inCall);
            }
        } else {
            return inCall;
        }
    }

    function setServerCAllStatus(data) {
        if (coreConfig.isProduction()) {
            $http.post("http://CaseManagerAdminWidget/ChangeCallStatus?status=" + data.toString());
        }
    }

    function setCurrentContext(data) {
        // if (coreConfig.isProduction()) {
        var safeData = angular.copy(data)
        var dataToSend = __.removeDuppes(safeData);
        $http.post(coreConfig.widgetPath() + '/SaveCurrentContext', angular.toJson(dataToSend));
        // $http.post("http://HRIWidget/SaveCurrentContext", angular.toJson(data));
        // }
    }

    function changeContext(_context) {
        $http.post(coreConfig.widgetPath() + '/ChangeCurrentClientContext', {
            context: helper.lowerCapsAttribs(_context)
        });
        // $http.post("http://HRIWidget/ChangeCurrentClientContext", { context: _context });
    }

    function getCurrentContext(next) {
        try {
            var result = {};
            // if (coreConfig.isProduction()) {
            $rootScope.$broadcast('systemIsLoading');

            $http.get(coreConfig.widgetPath() + '/GetCurrentContext')
                .success(function(data) {
                    // }
                    result = helper.lowerCapsAttribs(data);
                    if (result === null) {
                        result = {};
                    }

                    if (result.clientSelected === undefined) {
                        result.clientSelected = 'N/A'; //TODO: Wire the service.
                        result.memberSelected = ''; //TODO: Wire the service.
                        result.eligibilitySet = 'NY - On Exchange Individual'; //TODO: Wire the service.
                        result.userName = '';

                        result.inCall = false;
                        result.isLoading = 0;
                        result.isAuthenticated = false;
                        result.planAdmin = false;
                        result.currentContext = 'New York';
                    }
                    result.currentContext = 'New York';
                    next(result);
                    $rootScope.$broadcast('systemIsLoaded');

                })
                .error(function(e) {
                    loggingService.logError(e, "failed to get current context");
                    $rootScope.$broadcast('systemIsLoaded');
                })
                // result = syncHttp.get("http://HRIWidget/GetCurrentContext");

            // return result;
        } catch (e) {
            loggingService.logError(e, "failed to get current context");
        }
    }

    function getMemberSearch() {
        return _memberSearch;
    }

    function setMemberSearch(value) {
        _memberSearch = value;
    }

    function loadMetaData() {
        $rootScope.$broadcast('systemIsLoading');
        return $http.get(coreConfig.urlPath() + '/api/clients/HRINY/configuration')
            .success(function(data) {
                _metaData = helper.lowerCapsAttribs(data);
                $rootScope.$broadcast('systemIsLoaded');
            })
            .error(function(data, error) {
                $location.path('/login');
                $rootScope.$broadcast('systemIsLoaded');
            });
    }

    function getMetaData() {
        return _metaData;
    }
}
