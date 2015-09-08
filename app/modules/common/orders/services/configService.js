//returns string url based on endpoint constants
angular.module('WIP').factory('configService', function (DATA) {
    return {
      config: function (tabType, id) {
        switch (tabType) {
          case 'open':
            console.log('data envr',DATA);
            debugger;
            if (DATA.enviroment != 'mock') {
              var url = DATA.WIPServiceBusiness + DATA.businessId + '/advisers/' + DATA.adviserId + DATA.openOrdersSuffix;
              console.log('url from configservice',url);
              return url;
            }
            else {
              return '/modules/common/orders/mock/ordersTabMockData.json';
            }

          case 'settlements':
            if (DATA.enviroment != 'mock') {
              var url = DATA.WIPServiceBusiness + DATA.businessId + '/advisers/' + DATA.adviserId +'/'+ DATA.awaitingSettlementsSuffix;
              console.log('url from configservice',url);
              return url;
            }
            else {
              return '/modules/common/orders/mock/settlementsTabMockData.json';
            }

          case 'complete':
            if (DATA.enviroment != 'mock') {
              var url = DATA.WIPServiceBusiness + DATA.businessId + '/advisers/' + DATA.adviserId +'/'+ DATA.completedOrdersSuffix
              console.log('url from configservice',url);
              return url;
            }
            else {
              return '/modules/common/orders/mock/completeOrdersTabMockData.json'
            }

          case 'detail':
            console.log('env:',DATA.enviroment );
            if (DATA.enviroment != 'mock') {
              debugger;
              console.log('ACC',id);
              var url = DATA.WIPServiceClient + id + "/orders";
              console.log('DETAIL url from configservice',url);
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
