(function (){
'use strict';

angular.module('LunchCheck')
.component('lunchCheck', {
  templateUrl: 'src/lunch/lunch-component.html',
  controller: LunchCheckController,
  bindings: {
    item: '<'
  }
  });

LunchCheckController.$inject = ['ServiceLunchCheck', '$element']
function LunchCheckController (ServiceLunchCheck, $element) {
var $ctrl = this;

$ctrl.$onInit = function () {
  $ctrl.FavFood = "";
};

$ctrl.$doCheck = function () {
  $ctrl.quantity = ServiceLunchCheck.stringToArray($ctrl.FavFood);
};

$ctrl.CheckIfTooMuch = function(){
  if ($ctrl.quantity == undefined||$ctrl.quantity == 0) {
    $ctrl.messageEnterData = true;
    $ctrl.messageEnjoy = false;
    $ctrl.messageToMuch = false;
    $ctrl.color = "red";
  }else if ($ctrl.quantity <=3) {
    $ctrl.messageEnjoy = true;
    $ctrl.color = "green";
    $ctrl.messageEnterData = false;
    $ctrl.messageToMuch = false;
  }else {
    $ctrl.messageToMuch = true;
    $ctrl.messageEnterData = false;
    $ctrl.messageEnjoy = false;
    $ctrl.color = "green";
  }
};
}

})();
