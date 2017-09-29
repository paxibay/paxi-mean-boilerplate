module.exports = ['$timeout', '$parse', focusMe];

function focusMe($timeout, $parse) {
    return {
        //scope: true,   // optionally create a child scope
        link: function(scope, element, attrs) {
            var model = $parse(attrs.focusMe);
            scope.$watch(model, function(value) {
                // console.log('value=', value);
                if (value === true) {
                    $timeout(function() {
                        var $state = $("#navbar-state");
                        var navbar = $state.hasClass("navbar-fixed");
                        var toolbar = $state.hasClass("toolbar-fixed");

                        var current = $(window).scrollTop();
                        var target = $(element[0]).offset().top;
                        var goingup = (current > target);

                        // values must match LESS variables @navbar-height @toolbar-height
                        var bars = (navbar ? 40 : 0) + (toolbar ? 50 : 0);
                        var result = ((goingup || current === 0) ? (target - bars - 16) : (target));

                        if (result < 200) {
                            result = 0;
                        }
                        // console.log('focus:', goingup, current, target, result);
                        $(window).scrollTop(result);
                        element[0].focus();
                    });
                }
            });
            // to address @blesh's comment, set attribute value to 'false'
            // on blur event:
            element.bind('blur', function() {
                //console.log('blur');
                try {
                    scope.$apply(model.assign(scope, false));
                } catch (e) {
                    //didn't find any element to have focus.
                }

            });
        }
    };
}
