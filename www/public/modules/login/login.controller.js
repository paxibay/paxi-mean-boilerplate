module.exports = ['$scope', '$rootScope', 'loginService', '$timeout', '$location', 'coreConfig', 'apCache', '$sce', LoginController];

function LoginController($scope, $rootScope, loginService, $timeout, $location, coreConfig, apCache, $sce) {
    var vm = this;
    var _isLoggedIn = false;
    var _isTryingToLogin = 0;
    var loginMessages = [];

    vm.eraseStatus = eraseStatus;
    vm.isLoggedIn = isLoggedIn;
    vm.isTryingToLogin = isTryingToLogin;

    /**
     * User the Login service to login the portal
     * @event login
     */
    vm.login = login;

    /**
     * User the Login service to logoff the portal
     * @event logoff
     */
    vm.logoff = loginService.removeToken;

    $scope.$watch(onUrlChange, ifLoginClearAll);
    $scope.$on('login', afterLogin);
    $scope.$on('failToLogin', displayErrorMessage);
    $scope.$on('logoff', displayLogoffMessage);

    loadContent();
    
    loginService.reset();

    function login() {
        _isTryingToLogin = _isTryingToLogin + 1;
        loginService.getToken(vm.username, vm.password);
    }

    function isTryingToLogin() {
        return (_isTryingToLogin);
    }

    function afterLogin(){
        vm.loginStatus = '';
        $location.path(coreConfig && coreConfig.landingPage ? coreConfig.landingPage() : '/search');
        // $location.path('/member/search');
        _isTryingToLogin = _isTryingToLogin - 1;
        _isLoggedIn = true;
        $rootScope.$broadcast('userLogedIn');
        clearPassword();
    }

    function displayLogoffMessage(){
        vm.loginStatus = loginMessages[2];
    }

    function displayErrorMessage() {
        vm.loginStatus = loginMessages[0];
        _isTryingToLogin = _isTryingToLogin - 1;
        eraseStatus();
    }

    function onUrlChange() {
        return $location.path();
    }

    function ifLoginClearAll(path) {
        if (path === '/login') {
            $rootScope.$broadcast('endCall', true);
            localStorage.clear();
            apCache.clearAll();
        }
    }

    function eraseStatus() {
        $timeout(function() {
            if (_isTryingToLogin <= 0) {
                vm.loginStatus = null;
            }
        }, 3500);
    }

    /**
     * Load all the content for the login page.
     * @event loadContent
     */
    function loadContent() {
        vm.isLoginVisible = ($location.path().indexOf('login/') > 0);
        vm.title = 'Call Center Agent';
        vm.enterCredentials = 'Please sign in';
        vm.imageSrc = coreConfig ? coreConfig.path() + '/img' : '/img';
        vm.messages = [{
            title: 'Need Help?',
            message: $sce.trustAsHtml('Call helpdesk for issues. Use the agent id and password assigned to you. You can reset your password by calling: <a href="tel:18881234567">1-888-123-4567</a>')
        }, {
            title: 'Message of the Day',
            message: 'It takes an effort to perceive unexpected success as one\'s own best opportunity'
        }];

        loginMessages = [
            'Failed to login, please check your credentials and try again.',
            'User logged In',
            'The user loged off successfully'
        ];
    }

    function isLoggedIn() {
        return _isLoggedIn;
    }

    function clearPassword() {
        vm.password = '';
    }
}
