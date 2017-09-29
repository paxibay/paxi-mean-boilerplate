module.exports = ['$timeout', tooltip];

// backstretch full screen photo
function tooltip($timeout) { 
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $timeout(function(){
        element.tooltip({placement:attrs.$attr["placement"]});
      },0);
      attrs.$observe("placement", function(val){
        element.tooltip({placement:val});
      });
    }
  }
}