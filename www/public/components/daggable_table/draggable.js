module.exports = [draggable];

        function draggable() {

            return {
                    link: function(scope, elem, attr) {

                    elem.attr("draggable", true);
                    var dragDataVal = '';
                    var draggedGhostImgElemId = '';
                    attr.$observe('dragdata', function(newVal) {
                        dragDataVal = newVal;

                    });

                    attr.$observe('dragimage', function(newVal) {
                        draggedGhostImgElemId = newVal;
                    });

                    elem.bind("dragstart", function(e) {
                        var sendData = angular.toJson(dragDataVal);
                        e.dataTransfer = e.originalEvent.dataTransfer;
                        e.dataTransfer.setData("Text", sendData);
                        if (attr.dragimage !== 'undefined') {
                            e.dataTransfer.setDragImage(document.getElementById(draggedGhostImgElemId), 0, 0);
                        }

                        var dragFn = attr.drag;
                        if (dragFn !== 'undefined') {
                            scope.$apply(function() {
                                scope[dragFn](sendData);
                            })
                        }
                    });
                }
            };

        }