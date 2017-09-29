module.exports = ['$scope', 'brMessagesService', brMessagesController] 

function brMessagesController($scope, brMessagesService) {
  var vm = this; 
  vm.title = 'brMessages'
}