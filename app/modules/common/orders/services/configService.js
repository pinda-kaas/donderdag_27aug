//returns string url based on endpoint constants
angular.module('WIP').factory('configService', function (DATA) {
    return {
      config: function (tabType, id) {
        switch (tabType) {
          case 'open':
            console.log('DATA environment:', DATA.environment);
            if (DATA.environment != 'mock') {
              var url = DATA.WIPServiceBusiness + DATA.businessId + '/advisers/' + DATA.adviserId + DATA.openOrdersSuffix;
              //console.log('url from configservice',url);
              return url;
            }
            else {
              return '/modules/common/orders/mock/ordersTabMockData.json';
            }

          case 'settlement':
            //console.log('settlements switch');
            if (DATA.environment != 'mock') {
              var url = DATA.WIPServiceBusiness + DATA.businessId + '/advisers/' + DATA.adviserId + '/' + DATA.awaitingSettlementsSuffix;
              //console.log('settlements url from configservice',url);
              return url;
            }
            else {
              return '/modules/common/orders/mock/settlementsTabMockData.json';
            }

          case 'complete':
            if (DATA.environment != 'mock') {
              var url = DATA.WIPServiceBusiness + DATA.businessId + '/advisers/' + DATA.adviserId + '/' + DATA.completedOrdersSuffix
              //console.log('url from configservice',url);
              return url;
            }
            else {
              return '/modules/common/orders/mock/completeOrdersTabMockData.json'
            }

          case 'detail':
            if (DATA.environment != 'mock') {
              console.log('ACC', id);
              var url = DATA.WIPServiceClient +DATA.detailsSuffix+ id + "/orders";
              console.log('DETAIL url from configservice', url);
              return url;
            }
            else {
              return '/modules/common/orders/mock/orderDetailMock.json';
            }

          case 'assetType':
           // if (DATA.environment != 'mock') {
              var url = DATA.WIPServiceClient +DATA.assetTypesSuffix;
              return url;
            //}
            //else {
            //  return '/modules/common/orders/mock/assetType.json';
            //}

          case 'orderType':
            //if (DATA.environment != 'mock') {
              var url = DATA.WIPServiceClient +DATA.orderTypesSuffix;
              return url;
            //}
            //else {
            //  return '/modules/common/orders/mock/orderType.json';
            //}

          case 'orderStatus':
            //if (DATA.environment != 'mock') {
              var url = DATA.WIPServiceClient +DATA.orderStatussesSuffix;
              return url;
            //}
            //else {
            //  return '/modules/common/orders/mock/orderStatusses.json';
            //}

          case 'orderSourceType':
           // if (DATA.environment != 'mock') {
              var url = DATA.WIPServiceClient +DATA.orderSourcesSuffix;
              return url;
            //}
            //else {
            //  return '/modules/common/orders/mock/orderSource.json';
            //}

        }
      }
    }
  }
);
