module.exports = [backstretch];

// backstretch full screen photo
function backstretch() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            // scope.$watch(function() {
                // return element.attr("backstretch-image");
            // }, function(newValue){
                var img = element.attr("backstretch-image");
                if (img === "login") {
                    $("html").addClass("bg-login");
                } else {
                    $("html").removeClass("bg-login");
                }
            // });
        }
    }
}