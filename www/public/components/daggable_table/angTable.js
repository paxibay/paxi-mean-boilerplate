module.exports = ['$compile', angTable];

function angTable($compile) {
    return {
        restrict: 'E',
        templateUrl: './modules/case/tabletemplate.html',
        replace: true,
        scope: {
            conf: "="
        },
        controller: function($scope) {

            $scope.dragHead = '';
            $scope.dragImageId = "dragtable";

            $scope.handleDrop = function(draggedData,
                targetElem) {

                var swapArrayElements = function(array_object, index_a, index_b) {
                    var temp = array_object[index_a];
                    array_object[index_a] = array_object[index_b];
                    array_object[index_b] = temp;
                };
                var srcInd = $scope.conf.heads.indexOf(draggedData);
                var destInd = $scope.conf.heads.indexOf(targetElem.textContent);
                if(destInd == -1)
                         destInd = targetElem.cellIndex;
                swapArrayElements($scope.conf.heads, srcInd, destInd);
            };

            $scope.handleDrag = function(columnName) {
                $scope.dragHead = columnName.replace(/["']/g, "");
            };

        },
        compile: function(elem) {
            return function(ielem, $scope) {
                $compile(ielem)($scope);
            };
        }

    };
}
