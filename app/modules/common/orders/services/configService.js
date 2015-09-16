'use strict';
var prefix='';

//returns string url based on endpoint constants
angular.module('WIP').factory('configService', function (DATA,$location) {
    return {
      config: function (tabType, id) {
        //var host=$location.absUrl();
        var host='www-masdev.macquarie.com.au';

        console.log('location.absUrl',host);

        switch (tabType) {
          case 'open':
            console.log('DATA environment:', DATA.environment);
            if (DATA.environment !== 'mock') {

              if (host.indexOf('localhost') >= 0)
              {
                prefix=DATA.WIPServiceBusiness;
              }

              if (host.indexOf('sit1') >= 0 || host.indexOf('www-masdev.macquarie.com.au') >=0)
              {
                prefix=DATA.WIPServiceBusiness_sit1;
              }

              if (host.indexOf('uat1') >= 0)
              {
                prefix=DATA.WIPServiceBusiness_uat1;
              }

              console.log('hier',prefix + DATA.businessId + '/advisers/' + DATA.adviserId + DATA.openOrdersSuffix);
              return prefix + DATA.businessId + '/advisers/' + DATA.adviserId + DATA.openOrdersSuffix;
            }
            else {
              return '/modules/common/orders/mock/ordersTabMockData.json';
            }
            break;

          case 'settlement':
            console.log('settlements switch');
            if (DATA.environment !== 'mock') {
              if (host.indexOf('localhost') >= 0)
              {
                prefix=DATA.WIPServiceBusiness;
              }

              if (host.indexOf('sit1') >= 0 || host.indexOf('www-masdev.macquarie.com.au') >=0 )
              {
                prefix=DATA.WIPServiceBusiness_sit1;
              }

              if (host.indexOf('uat1') >= 0)
              {
                prefix=DATA.WIPServiceBusiness_uat1;
              }

              return prefix+ DATA.businessId + '/advisers/' + DATA.adviserId + '/' + DATA.awaitingSettlementsSuffix;
            }
            else {
              return '/modules/common/orders/mock/settlementsTabMockData.json';
            }
            break;

          case 'complete':
            if (DATA.environment !== 'mock') {
              if (host.indexOf('localhost') >= 0)
              {
                prefix=DATA.WIPServiceBusiness;
              }

              if (host.indexOf('sit1') >= 0 || host.indexOf('www-masdev.macquarie.com.au') >=0)
              {
                prefix=DATA.WIPServiceBusiness_sit1;
              }

              if (host.indexOf('uat1') >= 0)
              {
                prefix=DATA.WIPServiceBusiness_uat1;
              }

              return prefix+ DATA.businessId + '/advisers/' + DATA.adviserId + '/' + DATA.completedOrdersSuffix;
            }
            else {
              return '/modules/common/orders/mock/completeOrdersTabMockData.json';
            }
            break;

          case 'detail':
            if (DATA.environment !== 'mock') {
              if (host.indexOf('localhost') >= 0)
              {
                prefix=DATA.WIPServiceClient;
              }

              if (host.indexOf('sit1') >= 0 || host.indexOf('www-masdev.macquarie.com.au') >=0)
              {
                prefix=DATA.WIPServiceClient_sit1;
              }

              if (host.indexOf('uat1') >= 0)
              {
                prefix=DATA.WIPServiceClient_uat1;
              }

              console.log('hier',prefix + DATA.detailsSuffix + id + '/orders');
              return prefix + DATA.detailsSuffix + id + '/orders';

            }
            else {
              return '/modules/common/orders/mock/orderDetailMock.json';
            }
            break;

          case 'auto':
            if (DATA.environment !== 'mock') {
              if (host.indexOf('localhost') >= 0)
              {
                prefix=DATA.WIPServiceBusiness;
              }

              if (host.indexOf('sit1') >= 0 || host.indexOf('www-masdev.macquarie.com.au') >=0)
              {
                prefix=DATA.WIPServiceBusiness_sit1;
              }

              if (host.indexOf('uat1') >= 0)
              {
                prefix=DATA.WIPServiceBusiness_uat1;
              }

              return DATA.WIPTypeAheadServicePrefix +id + DATA.WIPTypeAheadServiceSuffix;
            }
            break;

          case 'assetType':
            if (DATA.environment !== 'mock') {

              if (host.indexOf('localhost') >= 0)
              {
                prefix=DATA.WIPServiceClient;
              }

              if (host.indexOf('sit1') >= 0 || host.indexOf('www-masdev.macquarie.com.au') >=0)
              {
                prefix=DATA.WIPServiceClient_sit1;
              }

              if (host.indexOf('uat1') >= 0)
              {
                prefix=DATA.WIPServiceClient_uat1;
              }

              return prefix+ DATA.assetTypesSuffix;
            }
                else
            {
              return '/modules/common/orders/mock/assetTypes.json';
            }


          case 'orderType':
            if (DATA.environment !== 'mock') {
              if (host.indexOf('localhost') >= 0)
              {
                prefix=DATA.WIPServiceClient;
              }

              if (host.indexOf('sit1') >= 0 || host.indexOf('www-masdev.macquarie.com.au') >=0)
              {
                prefix=DATA.WIPServiceClient_sit1;
              }

              if (host.indexOf('uat1') >= 0)
              {
                prefix=DATA.WIPServiceClient_uat1;
              }

              return prefix+ DATA.orderTypesSuffix;
            }
                else
            {
              return '/modules/common/orders/mock/tradeTypes.json';
            }

          case 'orderStatus':
            if (DATA.environment !== 'mock') {
              if (host.indexOf('localhost') >= 0)
              {
                prefix=DATA.WIPServiceClient;
              }

              if (host.indexOf('sit1') >= 0 || host.indexOf('www-masdev.macquarie.com.au') >=0)
              {
                prefix=DATA.WIPServiceClient_sit1;
              }

              if (host.indexOf('uat1') >= 0)
              {
                prefix=DATA.WIPServiceClient_uat1;
              }

              return prefix+ DATA.orderStatussesSuffix;
            }
                else
            {
              return '/modules/common/orders/mock/orderStatus.json';
            }

          case 'orderSourceType':
            if (DATA.environment !== 'mock') {
              if (host.indexOf('localhost') >= 0)
              {
                prefix=DATA.WIPServiceClient;
              }

              if (host.indexOf('sit1') >= 0 || host.indexOf('www-masdev.macquarie.com.au') >=0)
              {
                prefix=DATA.WIPServiceClient_sit1;
              }

              if (host.indexOf('uat1') >= 0)
              {
                prefix=DATA.WIPServiceClient_uat1;
              }

              return prefix+ DATA.orderSourcesSuffix;
            }
                else {
              return '/modules/common/orders/mock/orderSourceTypes.json';

            }

        }
      }
    };
  }
);
