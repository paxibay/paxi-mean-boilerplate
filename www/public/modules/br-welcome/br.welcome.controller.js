module.exports = ['$scope', 'brWelcomeService', brWelcomeController] 

function brWelcomeController($scope, brWelcomeService) {
  var vm = this; 
  vm.logedUser = 'Pete Hogans';
  vm.title = 'Welcome, ' + vm.logedUser;

  vm.existingPolicies = {
    itemsByPage:10,
    userid:1,
    role:"qwerty",
    title:"Existing Policies"
  };

  vm.newPolicies = {
    itemsByPage:10,
    userid:1,
    role:"qwerty",
    title:"New Policies"
  };
}