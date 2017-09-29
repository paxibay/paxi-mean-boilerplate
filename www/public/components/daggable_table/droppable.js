module.exports = ['$parse', droppable];

        function droppable($parse) {
            return {

                link: function(scope, element, attr) {

                    function onDragOver(e) {

                        if (e.preventDefault) {
                            e.preventDefault();
                        }

                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }
                        e.dataTransfer = e.originalEvent.dataTransfer;
                        e.dataTransfer.dropEffect = 'move';
                        return false;
                    }

                    function onDrop(e) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }
                        e.dataTransfer = e.originalEvent.dataTransfer;
                        var data = e.dataTransfer.getData("Text");

                        data = angular.fromJson(data);

                        var dropfn = attr.drop;
                        var fn = $parse(attr.drop);
                        scope.$apply(function() {
                            scope[dropfn](data, e.target);
                        });

                    }

                    element.bind("dragover", onDragOver);
                    element.bind("drop", onDrop);

                }
            };


        }