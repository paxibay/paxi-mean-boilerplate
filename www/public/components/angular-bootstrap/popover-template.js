// custom popover module
angular.module("ui.misc", ["ui.misc.tpls", "ui.misc.popover"]);
angular.module("ui.misc.tpls", ["template/popover/popover-html.html"]);

// create popover with html template content
angular.module( 'ui.misc.popover', [ 'ui.bootstrap.tooltip' ] )

.directive("popoverHtmlPopup", function () {
    return {
        restrict: "EA",
        replace: true,
        scope: { title: "@", content: "@", placement: "@", animation: "&", isOpen: "&" },
        templateUrl: "template/popover/popover-html.html"
    };
})

.directive("popoverHtml", [ "$tooltip", function ($tooltip) {
    return $tooltip("popoverHtml", "popover", "click");
}])

.directive('popoverTemplate', [ '$templateCache', '$compile', function ( $templateCache, $compile) {
    return {
        restrict: 'EA',
        link: function( scope, element, attrs ) {
            var template = scope.$eval(attrs.popoverTemplate);
            var cache = $templateCache.get(template);
            var content = $compile(cache)(scope);

            var options = {
                animation: attrs.popoverAnimation,
                content: content,
                delay: parseInt(attrs.popoverPopupDelay, 10),
                html: attrs.popoverHtml || true,
                placement: attrs.popoverPlacement,
                title: attrs.popoverTitle,
                trigger: attrs.popoverTrigger
            };
            $(element).popover(options);
        }
    };
}])

// allow popover content to be unsafe html (using unsafe filter)
angular.module("template/popover/popover-html.html", []).run(["$templateCache", function ($templateCache) {
    $templateCache.put("template/popover/popover-html.html",
        "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
        "  <div class=\"arrow\"></div>\n" +
        "\n" +
        "  <div class=\"popover-inner\">\n" +
        "      <h3 class=\"popover-title\" ng-bind-html=\"title | unsafe\" ng-show=\"title\"></h3>\n" +
        "      <div class=\"popover-content\"ng-bind-html=\"content | unsafe\"></div>\n" +
        "  </div>\n" +
        "</div>\n" +
        "");
}]);
