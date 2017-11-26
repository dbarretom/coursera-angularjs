(function (){
'use strict';

angular.module('LunchCheck', [])
.controller ('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
$scope.FavFood;

$scope.Message = function(){
  var TFood = Qfood ($scope.FavFood);
    if (TFood == undefined||TFood == 0) {
      $scope.MessageDisplay="Please enter data first";
      $scope.color="red";
    }else if (TFood <=3) {
      $scope.MessageDisplay = "Enjoy";
      $scope.color="green";
    }else {
      $scope.MessageDisplay = "Too much!"
      $scope.color="green";
    }
};

function Qfood (str) {
  if (str ==undefined){
    return undefined;
  }
  var ArrClean = str.replace(/ /g,""); //Clean the string eliminating white spaces
  var Arr = ArrClean.split(",");
  var i=0;
  var Food=0;
      for (i; i<Arr.length; i++) {
      if  (Arr[i]!==''){
       Food++;
    }
  }
  return Food;
}
}

})();
