app.controller('carCtrl',['$scope','dataService',function($scope,dataService){
$scope.ladies=dataService.carData;
    $scope.removeCar = function(x){
        dataService.removeCar(x.id);
    }
}])