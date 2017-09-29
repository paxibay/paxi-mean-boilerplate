module.exports = fakeHelpers;

/**
 * Mocked components for testing purpose.
 * @class fakeHelpers.
 */
function fakeHelpers() {
    return {
        $http: fakeHttp,
        $scope: {$on: f, $watch: f},
        loginService : { getToken: f, removeToken: f },
        $location: { path: fa },
        storage:{getByName: f},
        memberAuthenticationService: memberAuthenticationService,
        memberAccountService: memberAccountService,
        coreConfig: {path: fa, urlPath: fs},
        $rootScope: {$on:f, $broadcast:f},
        $sce: {trustAsHtml:f},
        memberService: { fastSearch: f,
                         advancedSearch: f,
                         accountSearch: f,
                         planAdminsOfAccount: f,
                         selectedMember: f,
                         getSelectedMember: f,
                         returnMember: f},
        apCache: {
            getCachedItem: f,
            setCachedItem: f,
            clearAll: f,
            setCacheDefaultValuesIfEmpty:f
        },
        $window: {
            history: { back: f}
        },
        apCoreService : {
            getCurrentContext: f
        }
    };

    //Fake function
    function f(){ }

    //Fake function returning string
    function fs(){ return ''; }
    
    //Fake function returning an array
    function fa(fake){ return [0]; }

    function fakeHttp() {
        return {
            post: post
        };

        function post() {
            return { success: f, error: f };
        }
    }

    function memberAuthenticationService(){
        return {
            getAuthenticationType:f,
            getQuestions: f,
            setAuthenticationType: f,
            getAuthenticationDestinationCaseId: f,
            setAuthenticationDestinationCaseId: f,
            clearAuthenticationDestionation: f
        };
    }

    function memberAccountService(){
        return {
           addMembers : f,
           getMembers : f,
           resetValues: f
        };
    }
}
