module.exports = ['$scope', 'brHeaderService', brHeaderController] 

function brHeaderController($scope, brHeaderService) {
  var vm = this; 
  vm.title = 'Broker Portal'
}