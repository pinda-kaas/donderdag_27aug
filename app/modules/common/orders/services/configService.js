//returns url based on enviroment
angular.module('WIP').factory('configService', function ($http) {

  return {

    config: function (clientEndpoint, clientOrderEndpoint, clientDetailOrder) {

      console.log(clientEndpoint);


      debugger;
      if (clientEndpoint.prefix == 'mock') {

        switch (clientEndpoint) {
          case 'open':
            return {
              url: '/modules/common/orders/mock/ordersTabMockData.json'
            };
          case 'settlements':
            return {
              url: '/modules/common/orders/mock/settlementsTabMockData.json'
            };
          case 'completeOrders':
            return {
              url: '/modules/common/orders/mock/completeOrdersTabMockData.json'
            };

          case 'orderDetail':
            return {
              url: '/modules/common/orders/mock/orderDetailMock.json'
            };

            return url;
        }
      }
      else {
        var url = clientEndpoint.prefix + clientOrderEndpoint.suffix + accountId + clientDetailOrder.suffix;
      }

    }
  };

});
