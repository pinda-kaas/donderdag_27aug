//returns string url based on endpoint constants
angular.module('WIP').factory('configService', function (MOCK) {
    return {
      config: function (tabType, accountId) {
        switch (tabType) {
          case 'open':
            console.log(MOCK);
            debugger;
            if (MOCK.url != 'mock') {
              var url = WIPServiceBusiness + config.businessId + '/advisers/' + config.adviserId + config.openOrdersSuffix;
              return url;
            }
            else {
              return '/modules/common/orders/mock/ordersTabMockData.json';
            }

          case 'settlements':
            if (MOCK.url != 'mock') {
              var url = clientEndpoint.prefix + clientOrderEndpoint.suffix + accountId + clientDetailOrder.suffix;
              console.log(url);
              return url;
            }
            else {
              return '/modules/common/orders/mock/settlementsTabMockData.json';
            }

          case 'complete':
            if (MOCK.url != 'mock') {
              var url = clientEndpoint.prefix + clientOrderEndpoint.suffix + accountId + clientDetailOrder.suffix;
              console.log(url);
              return url
            }
            else {
              return '/modules/common/orders/mock/completeOrdersTabMockData.json'
            }

          case 'detail':
            if (MOCK.url != 'mock') {
              var url = config.WIPServiceClient + accountId + "/orders";
              return url;
            }
            else {
              return '/modules/common/orders/mock/orderDetailMock.json';

            }
        }
      }
    }
  }
);
