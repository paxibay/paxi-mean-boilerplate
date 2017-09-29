module.exports = {
  directive: ['coreConfig', 'brWelcomeService', brWelcomeSearchDirective],
  controller: ['$scope', 'brWelcomeService', brWelcomeSearchController]
};

/*
 * @name: welcomeSearch
 * @example <welcome-search></welcome-search>
 */
function brWelcomeSearchDirective(coreConfig, brWelcomeService) {

  return {
    restrict: 'EC',
    scope: true,
    controller: 'brWelcomeSearchController as welcomeSearchVm',
    templateUrl: coreConfig.path() + '/modules/br-welcome/directives/br.welcome.search.directive.tmpl.html',
    replace: true,
    link: function(scope, element, attrs, vm) {

    }
  };
}

function brWelcomeSearchController($scope, brWelcomeService) {
  
}
