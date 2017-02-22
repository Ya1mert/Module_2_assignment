(function(){
  "use strict";

  angular.module('app',[])
    .controller('ListToBuy', list1Controller)
    .controller('ListBought', list2Controller)
    .service('Service', ListService);

    list1Controller.$inject = ['Service'];
    list2Controller.$inject = ['Service'];

    function list1Controller(ListService){
      var list1 = this;

      list1.inputN = '';
      list1.inputQ = '';

      list1.list = ListService.show();
      // list1.listBought = ListService.showBought();

      list1.add = function () {
        ListService.add(list1.inputN, list1.inputQ);
      };

      list1.moveItem = function (index) {
        ListService.move(index);

      }


    };

    function list2Controller(ListService){
      var here = this;

      // var ListService = ServiceFactory();
      here.list = ListService.showBought();
    };

    // function ListServiceFactory() {
    //   var factory=function () {
    //     return new ListService();
    //   }
    //   return factory;
    // };

    function ListService() {

      var service = this;
      var listToBuy = [{
          name: "Apples",
          quantity: 10
        },{
          name: "Milk",
          quantity: 10
        },{
          name: "Pop-Corn",
          quantity: 5
        },{
          name: "Soda",
          quantity: 3
        },{
          name: "Stuff",
          quantity: "Some"
        }
      ];
      var listBought = [];

      service.add = function (itemN,itemQ) {
        var inputs = {
          name: itemN,
          quantity: itemQ
        };
        listToBuy.push(inputs);
      };

      service.show = function () {
        return listToBuy ;
      };
      service.showBought = function () {
        return listBought ;
      };



      service.move = function (index) {
        var movedItem = listToBuy[index];
        listToBuy.splice(index,1);
        listBought.push(movedItem);
      }
    }

})();
