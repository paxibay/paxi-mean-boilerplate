var _ = require('underscore');

module.exports = ['$scope', '$location', function($scope, $location) {
  var vm = this;
  vm.title = 'Admin Portal';
  vm.location = $location; 
}];
 