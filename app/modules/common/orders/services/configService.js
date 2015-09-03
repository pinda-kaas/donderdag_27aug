//returns url based on enviroment
angular.module('WIP').factory('configService', function ($http) {

  return {

    config: function (clientEndpoint, clientOrderEndpoint, clientDetailOrder,tabType) {

      console.log(clientEndpoint);

      debugger;
      if (clientEndpoint.prefix == 'mock') {

        switch (tabType) {
          case 'open':
            return {
              url: '/modules/common/orders/mock/ordersTabMockData.json'
            };
          case 'settlements':
            return {
              url: '/modules/common/orders/mock/settlementsTabMockData.json'
            };
          case 'complete':
            return {
              url: '/modules/common/orders/mock/completeOrdersTabMockData.json'
            };

          case 'detail':
            return {
              url: '/modules/common/orders/mock/orderDetailMock.json'
            };
        }
      }
      else {
        var url = clientEndpoint.prefix + clientOrderEndpoint.suffix + accountId + clientDetailOrder.suffix;
      }

    }
  };

});
