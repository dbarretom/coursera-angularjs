(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    //Get the to buy list array
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    // Add and remove items by index
    toBuy.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.addAndRemoveItem(itemIndex);
    };

    toBuy.message = function () {
        return ShoppingListCheckOffService.toBuyMessage();
    }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    //Get the bought list array
    bought.items = ShoppingListCheckOffService.getBoughtItems();

    //Show the message using ng-if
    bought.message = function() {
        return ShoppingListCheckOffService.boughtMessage();
    };
}


function ShoppingListCheckOffService() {
  var service = this;

  // To buy list items
  var toBuy = [
      {name: "Apple", quantity:5 },
      {name: "Banana", quantity:6 },
      {name: "Pinapple", quantity:4 },
      {name: "Apricot", quantity:10 },
      {name: "Mango", quantity:2 }
  ];
  //Bought list items
  var bought = [];

  service.toBuyMessage = function () {
        service.toBuymss = (toBuy.length < 1)? 1 : 0;
        return service.toBuymss;
  };

  service.boughtMessage = function () {
      service.boughtmss = (bought.length < 1)? 1 : 0;
      return service.boughtmss;
  };

  service.addAndRemoveItem = function (itemIndex) {
      bought.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex, 1);
  };

  service.getBoughtItems = function () {
     return bought;
  };

  service.getToBuyItems = function () {
     return toBuy;
  };
}
})();
