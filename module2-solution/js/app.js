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
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    //Get the bought list array
    bought.items = ShoppingListCheckOffService.getBoughtItems();

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
