//returns string url based on endpoint constants
angular.module('WIP').factory('configService', function (DATA) {
    return {
      config: function (tabType, accountId) {
        switch (tabType) {
          case 'open':
            console.log('data envr',DATA);
            debugger;
            if (DATA.enviroment != 'mock') {
              var url = DATA.WIPServiceBusiness + DATA.businessId + '/advisers/' + DATA.adviserId + DATA.openOrdersSuffix;
              return url;
            }
            else {
              return '/modules/common/orders/mock/ordersTabMockData.json';
            }

          case 'settlements':
            if (MOCK.url != 'mock') {
              var url = WIPServiceBusiness + config.businessId + '/advisers/' + config.adviserId + config.openOrdersSuffix;
              console.log(url);
              return url;
            }
            else {
              return '/modules/common/orders/mock/settlementsTabMockData.json';
            }

          case 'complete':
            if (MOCK.url != 'mock') {
              var url = WIPServiceBusiness + config.businessId + '/advisers/' + config.adviserId + config.openOrdersSuffix;
              console.log(url);
              return url
            }
            else {
              return '/modules/common/orders/mock/completeOrdersTabMockData.json'
            }

          case 'detail':
            if (MOCK.url != 'mock') {
              var url = DEVELOPMENT.WIPServiceClient + accountId + "/orders";
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
