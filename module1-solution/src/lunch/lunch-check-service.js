(function (){
'use strict';

angular.module('LunchCheck')
.service ('ServiceLunchCheck',ServiceLunchCheck);

function ServiceLunchCheck () {
  var service = this;
  //This function return how many element an array has.
  service.stringToArray = function (string) {
      if (string ==undefined){
      return undefined;
      }
      var arrClean = string.replace(/\s/g,''); //Clean the string eliminating white spaces
      var arr = arrClean.split(","); //Convert the string into an array (,) separated
      var i=0;
      var foodQuantity=0;
          for (i; i<arr.length; i++) {
              if  (arr[i]!==''){
              foodQuantity++;
              }
          }
  return foodQuantity;
   }
}

})();
