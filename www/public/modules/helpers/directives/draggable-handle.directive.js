module.exports = [draggableModuleHandle];

// the drag handler, passes click event to parent controller
function draggableModuleHandle() {
    return {
        scope: {},
        restrict: 'A',
        require: '^draggableModule',
        link: function(scope, elm, attrs, controllerInstance) {
            elm.css({
                cursor: 'move'
            });

            elm.on('mousedown', function($event) {
                $event.preventDefault();
                scope.event = $event;
                controllerInstance.handleClick(scope);
            });
        }
    }
}