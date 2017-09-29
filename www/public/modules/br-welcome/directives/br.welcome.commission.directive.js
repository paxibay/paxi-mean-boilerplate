module.exports = {
  directive: ['coreConfig', 'brWelcomeService', brWelcomeCommissionDirective],
  controller: ['$scope', 'brWelcomeService', brWelcomeCommissionController]
};

/*
 * @name: welcomeSearch
 * @example <welcome-search></welcome-search>
 */
function brWelcomeCommissionDirective(coreConfig, brWelcomeService) {

  return {
    restrict: 'EC',
    scope: true,
    controller: 'brWelcomeCommissionController as welcomeCommissionVm',
    templateUrl: coreConfig.path() + '/modules/br-welcome/directives/br.welcome.commission.directive.tmpl.html',
    replace: true,
    link: function(scope, element, attrs, vm) {

    }
  };
}

function brWelcomeCommissionController($scope, brWelcomeService) {
  
}
