module.exports = ['$scope','loggingService', '$rootScope', errorMessageController];

function errorMessageController($scope, loggingService, $rootScope) {
    var vm = this;
 	vm.ErrorMessages = [];
     vm.dismissErrors = dismissErrors;
     $scope.$on('errorOccured', handleErrorMessage);
	$scope.$on('$locationChangeStart', dismissErrors);    

    function handleErrorMessage(event, data) {
        $rootScope.$broadcast('scrollTop');
        loggingService.logWarning(data);
        vm.ErrorMessages.push(data);

    }

    function dismissErrors() {
        vm.ErrorMessages = [];
    }



}