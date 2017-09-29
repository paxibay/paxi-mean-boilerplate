module.exports = ['$document', draggableModule];

// draggable module, that contains drag handler and form
function draggableModule($document) {
    return {
        scope: {},
        restrict: 'A',
        controller: function($scope, $element) {
            var startX, startY, initialMouseX, initialMouseY;

            $element.css({
                position: 'absolute'
            });

            this.handleClick = function(nestedDirective) {
                startX = $element.prop('offsetLeft');
                startY = $element.prop('offsetTop');
                initialMouseX = nestedDirective.event.clientX;
                initialMouseY = nestedDirective.event.clientY;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            }

            function mousemove($event) {
                var dx = $event.clientX - initialMouseX;
                var dy = $event.clientY - initialMouseY;
                $element.css({
                    top:  startY + dy + 'px',
                    left: startX + dx + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        }
    }
}
