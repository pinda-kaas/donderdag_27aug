'use strict';

//returns string url based on endpoint constants
angular.module('WIP').factory('configService', function (DATA) {
    return {
      config: function (tabType, id) {
        switch (tabType) {
          case 'open':
            console.log('DATA environment:', DATA.environment);
            if (DATA.environment !== 'mock') {
              return DATA.WIPServiceBusiness + DATA.businessId + '/advisers/' + DATA.adviserId + DATA.openOrdersSuffix;
            }
            else {
              return '/modules/common/orders/mock/ordersTabMockData.json';
            }
            break;

          case 'settlement':
            console.log('settlements switch');
            if (DATA.environment !== 'mock') {
              return DATA.WIPServiceBusiness + DATA.businessId + '/advisers/' + DATA.adviserId + '/' + DATA.awaitingSettlementsSuffix;
            }
            else {
              return '/modules/common/orders/mock/settlementsTabMockData.json';
            }
            break;

          case 'complete':
            if (DATA.environment !== 'mock') {
              return DATA.WIPServiceBusiness + DATA.businessId + '/advisers/' + DATA.adviserId + '/' + DATA.completedOrdersSuffix;
            }
            else {
              return '/modules/common/orders/mock/completeOrdersTabMockData.json';
            }
            break;

          case 'detail':
            if (DATA.environment !== 'mock') {
              return DATA.WIPServiceClient + DATA.detailsSuffix + id + '/orders';
            }
            else {
              return '/modules/common/orders/mock/orderDetailMock.json';
            }
            break;

          case 'auto':
            if (DATA.environment !== 'mock') {
              return DATA.WIPTypeAheadServicePrefix +id + DATA.WIPTypeAheadServiceSuffix;
            }
            break;

          case 'assetType':
            if (DATA.environment !== 'mock') {
              return DATA.WIPServiceClient + DATA.assetTypesSuffix;
            }
                else
            {
              return '/modules/common/orders/mock/assetTypes.json';
            }


          case 'orderType':
            if (DATA.environment !== 'mock') {
              return DATA.WIPServiceClient + DATA.orderTypesSuffix;
            }
                else
            {
              return '/modules/common/orders/mock/tradeTypes.json';
            }

          case 'orderStatus':
            if (DATA.environment !== 'mock') {
              return DATA.WIPServiceClient + DATA.orderStatussesSuffix;
            }
                else
            {
              return '/modules/common/orders/mock/orderStatus.json';
            }

          case 'orderSourceType':
            if (DATA.environment !== 'mock') {
              return DATA.WIPServiceClient + DATA.orderSourcesSuffix;
            }
                else {
              return '/modules/common/orders/mock/orderSourceTypes.json';

            }

        }
      }
    };
  }
);
