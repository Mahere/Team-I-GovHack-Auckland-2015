myApp.controller('mainController', ['$scope', function ($scope) {
    $scope.random = "hurry and work";

    //Dimension Selection
    $scope.dimensions = [];

    $scope.addDimensionToSelection = function (selectedDim) {
        $scope.selectedDimensions.push(selectedDim);
        console.log(selectedDim);
        console.log(selecedDimensions);
    };

    //GET data
    var getData = function() {
        return "test";
    };

    

}]);