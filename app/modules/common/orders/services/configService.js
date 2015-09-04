//returns string url based on endpoint constants
angular.module('WIP').factory('configService', function () {
    return {
      config: function (WIPServiceClient, WIPServiceBusiness, businessId, adviserId, accountId,openOrdersSuffix,tabType) {

          //console.log('clientEndpoint.prefix ',clientEndpoint.prefix);
          switch (tabType) {
          case 'open':
            if (WIPServiceClient != 'mock')
            {
              //https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/open/minimum
              //https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/open/minimum
              var url=WIPServiceBusiness+ +businessId+adviserId+openOrdersSuffix;
              console.log('hiero',url);
              return url;
            }
            else {
              return '/modules/common/orders/mock/ordersTabMockData.json'
            };

          case 'settlements':
            if (clientEndpoint.prefix != 'mock') {
              var url = clientEndpoint.prefix + clientOrderEndpoint.suffix + accountId + clientDetailOrder.suffix;
              console.log(url);
              return url;
            }
            else {
              return '/modules/common/orders/mock/settlementsTabMockData.json';
            }

          case 'complete':
            if (clientEndpoint.prefix != 'mock')
            {
              //https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/open/minimum
              var url = clientEndpoint.prefix + clientOrderEndpoint.suffix + accountId + clientDetailOrder.suffix;
              console.log(url);
              return url
            }
            else {
              return '/modules/common/orders/mock/completeOrdersTabMockData.json'
            }

          case 'detail':
            if (clientEndpoint.prefix != 'mock') {
              //https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/open/minimum
              var url = clientEndpoint.prefix + clientOrderEndpoint.suffix + accountId + clientDetailOrder.suffix;
              console.log(url);
            }
            else {
              return {
                url: '/modules/common/orders/mock/orderDetailMock.json'
              };
            }
        }
      }
    }
  }
);
