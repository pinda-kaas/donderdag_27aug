var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function () {
  return $window._;
}]);

"use strict";

var app = angular.module('WIP', ['ui.router', 'underscore', 'ui.bootstrap', 'smart-table', 'ngAnimate', 'config']);

console.log('this is the app starting up');

app.config(function ($stateProvider) {
  $stateProvider
    .state('tabs', {
      url:'/',
      templateUrl: 'views/tabs.html',
      controller: 'OrdersCtrl',
      resolve: {
        orderData: function (wipService,configService) {
          debugger;
          console.log('resolve orderdata');
          debugger;
          //return orderMockData;
          //return wipService.getData('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/open/minimum');
          return wipService.getData(configService.config('open', ''));

        },
        settlementsData: function (wipService) {
          console.log('resolve settlementData');
          return settlementsMockData;
          //return wipService.getData('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/awaitingsettlement');
        }
        ,
        completeOrders: function (wipService, configService) {
          //return wipService.getData('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/complete');
          return completeOrdersMockData;
        }
      }
    })
    .state('orderDetail', {
      templateUrl: 'views/detail.html',
      controller: 'OrderDetailCtrl',
      params:{'accountId':null},
      resolve: {
        orderDetails: function () {
          var accountId = $stateParams.accountId;
          console.log('ACCOUNT ID', accountId);
          return detailMockData;
          var url=  configService.config('details');
          return url;
        }
      }
    });


});

app.run(function ($state) {
  console.log('run');
  debugger;
  $state.go('tabs');
  //$state.go('orderDetail');
});

var orderMockData = [
  {
    "account": {
      "accountId": {
        "key": "S43566"
      },
      "accountName": "JEFFERY CHRISTOPHER R",
      "productName": "Warrants",
      "adviser": "Mark",
      "accountServiceType": "SUPERANNUATION"
    },
    "minOpenOrderState": "REJECTED"
  },
  {
    "account": {
      "accountId": {
        "key": "V11233"
      },
      "accountName": "RISZKO SUPERANNUATION",
      "productName": "Warrants",
      "adviser": "Mark",
      "accountServiceType": "INVESTMENT"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "I67661"
      },
      "accountName": "SMALES SUPERANNUATION FUND",
      "productName": "Warrants",
      "adviser": "Ed",
      "accountServiceType": "INVESTMENT"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "V57294"
      },
      "accountName": "PAKIRI SUPERANNUATION FUND",
      "productName": "Warrants",
      "adviser": "Ed",
      "accountServiceType": "INVESTMENT"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "O08263"
      },
      "accountName": "HILL GREGORY JOHN",
      "productName": "Term deposits",
      "adviser": "Ed",
      "accountServiceType": "PENSION"
    },
    "minOpenOrderState": "EXECUTION FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "U05631"
      },
      "accountName": "GROOM FIONA",
      "productName": "Term deposits",
      "adviser": "Ed",
      "accountServiceType": "SUPERANNUATION"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "P85824"
      },
      "accountName": "READ PHILIP ALAN",
      "productName": "Term deposits",
      "adviser": "Ed",
      "accountServiceType": "PENSION"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "O22076"
      },
      "accountName": "WARD ELLEN",
      "productName": "SMA",
      "adviser": "Ed",
      "accountServiceType": "PENSION"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "O15073"
      },
      "accountName": "READ PHILIP ALAN",
      "productName": "SMA",
      "adviser": "Fred",
      "accountServiceType": "PENSION"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "U05824"
      },
      "accountName": "COLEMAN KAREN",
      "productName": "SMA",
      "adviser": "Fred",
      "accountServiceType": "SUPERANNUATION"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "U12067"
      },
      "accountName": "CABARKAPA ALEKSANDRA",
      "productName": "Managed funds",
      "adviser": "Fred",
      "accountServiceType": "SUPERANNUATION"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "U18380"
      },
      "accountName": "KITCHEN ALLICIA",
      "productName": "Managed funds",
      "adviser": "Fred",
      "accountServiceType": "SUPERANNUATION"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "C04489"
      },
      "accountName": "CHAN WILLIAM",
      "productName": "Managed funds",
      "adviser": "Fred",
      "accountServiceType": "SUPERANNUATION"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "U19543"
      },
      "accountName": "HARRINGTON AARON",
      "productName": "Managed funds",
      "adviser": "Fred",
      "accountServiceType": "SUPERANNUATION"
    },
    "minOpenOrderState": "FAILED"
  },
  {
    "account": {
      "accountId": {
        "key": "U21812"
      },
      "accountName": "LUKATELICH AARON NICHOLAS",
      "productName": "Managed funds",
      "adviser": "Fred",
      "accountServiceType": "SUPERANNUATION"
    },
    "minOpenOrderState": "FAILED"
  }
];

var settlementsMockData = [
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "08-22-2015",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 24162,
    "fee": "$100.00",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 10056.75
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "08-22-2015",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 24162,
    "fee": "$100.00",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 10056.75
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "08-22-2015",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 24162,
    "fee": "$100.00",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 10056.75
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "08-22-2015",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 24162,
    "fee": "$100.00",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 10056.75
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities",
      "type": "WHOLESALE_MANAGED_FUND "
    },
    "settlementDate": "08-22-2015",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 24162,
    "fee": "$100.00",
    "price": {
      "currency": "AUD",
      "value": 0.41623
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 10056.75
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "08-22-2015",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 24162,
    "fee": "$100.00",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 10056.75
    },
    "orderState": "AWAITING SETTLEMENT"
  }
];

var completeOrdersMockData = [
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "08-24-2015",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 24162,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 10056.75
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-01-2010",
    "tradeDate": "22-01-2010",
    "orderType": "REDEMPTION",
    "units": 4662,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.9968
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 4646.73
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "20-04-2010",
    "tradeDate": "20-04-2010",
    "orderType": "REDEMPTION",
    "units": 1562,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0115
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1580.26
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "17-06-2010",
    "tradeDate": "17-06-2010",
    "orderType": "REDEMPTION",
    "units": 4133,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.031
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 4260.74
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-02-2011",
    "tradeDate": "22-02-2011",
    "orderType": "REDEMPTION",
    "units": 3640,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0703
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 3896.46
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V00169"
      },
      "accountName": "ROBERG SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "14-02-2012",
    "tradeDate": "14-02-2012",
    "orderType": "REDEMPTION",
    "units": 3487,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0949
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 3817.74
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V03589"
      },
      "accountName": "GILL FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "29-06-2009",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 21388,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 8902.2
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V03589"
      },
      "accountName": "GILL FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-01-2010",
    "tradeDate": "22-01-2010",
    "orderType": "REDEMPTION",
    "units": 2345,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.9966
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 2337
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V03589"
      },
      "accountName": "GILL FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "20-04-2010",
    "tradeDate": "20-04-2010",
    "orderType": "REDEMPTION",
    "units": 786,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0115
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 794.77
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V03589"
      },
      "accountName": "GILL FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "17-06-2010",
    "tradeDate": "17-06-2010",
    "orderType": "REDEMPTION",
    "units": 2079,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0308
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 2142.87
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V03589"
      },
      "accountName": "GILL FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-02-2011",
    "tradeDate": "22-02-2011",
    "orderType": "REDEMPTION",
    "units": 1831,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0705
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1959.66
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V03589"
      },
      "accountName": "GILL FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "14-02-2012",
    "tradeDate": "14-02-2012",
    "orderType": "REDEMPTION",
    "units": 1754,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0946
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1920.08
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04021"
      },
      "accountName": "CLARK STEPHEN J & CLARK GILLIAN T (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "29-06-2009",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 15805,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 6578.47
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04021"
      },
      "accountName": "CLARK STEPHEN J & CLARK GILLIAN T (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-01-2010",
    "tradeDate": "22-01-2010",
    "orderType": "REDEMPTION",
    "units": 1972,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.9965
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1964.99
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04021"
      },
      "accountName": "CLARK STEPHEN J & CLARK GILLIAN T (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "20-04-2010",
    "tradeDate": "20-04-2010",
    "orderType": "REDEMPTION",
    "units": 661,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0106
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 668.26
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04021"
      },
      "accountName": "CLARK STEPHEN J & CLARK GILLIAN T (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "17-06-2010",
    "tradeDate": "17-06-2010",
    "orderType": "REDEMPTION",
    "units": 1748,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0309
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1801.77
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04021"
      },
      "accountName": "CLARK STEPHEN J & CLARK GILLIAN T (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-02-2011",
    "tradeDate": "22-02-2011",
    "orderType": "REDEMPTION",
    "units": 1539,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0708
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1647.72
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04021"
      },
      "accountName": "CLARK STEPHEN J & CLARK GILLIAN T (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "14-02-2012",
    "tradeDate": "14-02-2012",
    "orderType": "REDEMPTION",
    "units": 1475,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0942
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1614.43
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04171"
      },
      "accountName": "WITTS ANTHONY S & WITTS KERRIE J (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "29-06-2009",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 7560,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.4163
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 3146.71
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04171"
      },
      "accountName": "WITTS ANTHONY S & WITTS KERRIE J (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "20-04-2010",
    "tradeDate": "20-04-2010",
    "orderType": "REDEMPTION",
    "units": 284,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0106
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 287.36
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04171"
      },
      "accountName": "WITTS ANTHONY S & WITTS KERRIE J (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "17-06-2010",
    "tradeDate": "17-06-2010",
    "orderType": "REDEMPTION",
    "units": 752,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0306
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 774.79
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04171"
      },
      "accountName": "WITTS ANTHONY S & WITTS KERRIE J (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-02-2011",
    "tradeDate": "22-02-2011",
    "orderType": "REDEMPTION",
    "units": 662,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.071
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 708.55
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04171"
      },
      "accountName": "WITTS ANTHONY S & WITTS KERRIE J (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "14-02-2012",
    "tradeDate": "14-02-2012",
    "orderType": "REDEMPTION",
    "units": 634,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0946
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 694.24
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04864"
      },
      "accountName": "DENYER FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "29-06-2009",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 93871,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 39071.71
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04864"
      },
      "accountName": "DENYER FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-01-2010",
    "tradeDate": "22-01-2010",
    "orderType": "REDEMPTION",
    "units": 1734,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.9965
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1727.95
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04864"
      },
      "accountName": "DENYER FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "20-04-2010",
    "tradeDate": "20-04-2010",
    "orderType": "REDEMPTION",
    "units": 581,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.012
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 587.64
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04864"
      },
      "accountName": "DENYER FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "17-06-2010",
    "tradeDate": "17-06-2010",
    "orderType": "REDEMPTION",
    "units": 1537,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0306
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1584.41
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04864"
      },
      "accountName": "DENYER FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-02-2011",
    "tradeDate": "22-02-2011",
    "orderType": "REDEMPTION",
    "units": 1354,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0702
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1448.95
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04864"
      },
      "accountName": "DENYER FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "14-02-2012",
    "tradeDate": "14-02-2012",
    "orderType": "REDEMPTION",
    "units": 1297,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0948
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1419.68
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V06236"
      },
      "accountName": "COLEEN EDGAR SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "29-06-2009",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 39354,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 16380.27
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V19247"
      },
      "accountName": "SWIATKIWSKY TARA (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "29-06-2009",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 2249,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 935.97
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V19247"
      },
      "accountName": "SWIATKIWSKY TARA (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-01-2010",
    "tradeDate": "22-01-2010",
    "orderType": "REDEMPTION",
    "units": 1270,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.9961
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1265.39
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V19247"
      },
      "accountName": "SWIATKIWSKY TARA (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "20-04-2010",
    "tradeDate": "20-04-2010",
    "orderType": "REDEMPTION",
    "units": 425,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0118
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 430.33
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V19247"
      },
      "accountName": "SWIATKIWSKY TARA (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "17-06-2010",
    "tradeDate": "17-06-2010",
    "orderType": "REDEMPTION",
    "units": 1126,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0302
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1160.28
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V19247"
      },
      "accountName": "SWIATKIWSKY TARA (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-02-2011",
    "tradeDate": "22-02-2011",
    "orderType": "REDEMPTION",
    "units": 991,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0706
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1061.08
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V19247"
      },
      "accountName": "SWIATKIWSKY TARA (MARGIN LOAN A/C)",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "14-02-2012",
    "tradeDate": "14-02-2012",
    "orderType": "REDEMPTION",
    "units": 950,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0947
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1039.64
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V80675"
      },
      "accountName": "RAYJAY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "29-06-2009",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 12192,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.4163
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 5074.83
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V80675"
      },
      "accountName": "RAYJAY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-01-2010",
    "tradeDate": "22-01-2010",
    "orderType": "REDEMPTION",
    "units": 5680,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.9967
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 5660.77
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V80675"
      },
      "accountName": "RAYJAY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "20-04-2010",
    "tradeDate": "20-04-2010",
    "orderType": "REDEMPTION",
    "units": 1903,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0116
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 1925.12
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V80675"
      },
      "accountName": "RAYJAY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "17-06-2010",
    "tradeDate": "17-06-2010",
    "orderType": "REDEMPTION",
    "units": 5035,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.031
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 5190.55
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V80675"
      },
      "accountName": "RAYJAY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-02-2011",
    "tradeDate": "22-02-2011",
    "orderType": "REDEMPTION",
    "units": 4435,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0703
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 4746.77
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V80675"
      },
      "accountName": "RAYJAY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "14-02-2012",
    "tradeDate": "14-02-2012",
    "orderType": "REDEMPTION",
    "units": 4248,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0949
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 4650.88
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V80675"
      },
      "accountName": "RAYJAY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "ETL0120AU"
      },
      "name": "EQT Wsale High Inc Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "09-04-2013",
    "tradeDate": "09-04-2013",
    "orderType": "REDEMPTION",
    "units": 22920,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.0216
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 494.83
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V92004"
      },
      "accountName": "NEIMANIS FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "29-06-2009",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 37936,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 15790.27
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V92004"
      },
      "accountName": "NEIMANIS FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "20-04-2010",
    "tradeDate": "20-04-2010",
    "orderType": "REDEMPTION",
    "units": 2549,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0118
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 2578.82
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V92004"
      },
      "accountName": "NEIMANIS FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "17-06-2010",
    "tradeDate": "17-06-2010",
    "orderType": "REDEMPTION",
    "units": 6745,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0308
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 6953.08
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V92004"
      },
      "accountName": "NEIMANIS FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "22-02-2011",
    "tradeDate": "22-02-2011",
    "orderType": "REDEMPTION",
    "units": 5940,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0705
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 6358.6
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V92004"
      },
      "accountName": "NEIMANIS FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "HFL0104AU"
      },
      "name": "LHP Diversified Investments Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "14-02-2012",
    "tradeDate": "14-02-2012",
    "orderType": "REDEMPTION",
    "units": 5691,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 1.0947
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 6230.15
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V92004"
      },
      "accountName": "NEIMANIS FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "ETL0120AU"
      },
      "name": "EQT Wsale High Inc Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "09-04-2013",
    "tradeDate": "09-04-2013",
    "orderType": "REDEMPTION",
    "units": 34908,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.0216
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 753.63
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "YS0172"
      },
      "accountName": "YARRAGAND SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "PER0076AU"
      },
      "name": "Pengana Property Securities Fund",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "29-06-2009",
    "tradeDate": "29-06-2009",
    "orderType": "REDEMPTION",
    "units": 6473,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.4162
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 2694.36
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V04776"
      },
      "accountName": "BARNES FAMILY SUPERANNUATION FUND",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "AUS0037AU"
      },
      "name": "Aust Unity Healthcare Prop Trust A Units",
      "type": "WHOLESALE_MANAGED_FUND"
    },
    "settlementDate": "30-06-2015",
    "tradeDate": "30-06-2015",
    "orderType": "REDEMPTION",
    "units": 10061,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 0.9348
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 9405.48
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V06637"
      },
      "accountName": "SHAW MARGARET JOAN",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "AIO"
      },
      "name": "Asciano Limited",
      "type": "AUSTRALIAN_EQUITY"
    },
    "settlementDate": "26-06-2015",
    "tradeDate": "26-06-2015",
    "orderType": "BUY",
    "units": 80,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 6.63
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 504
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V06637"
      },
      "accountName": "SHAW MARGARET JOAN",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "AIO"
      },
      "name": "Asciano Limited",
      "type": "AUSTRALIAN_EQUITY"
    },
    "settlementDate": "26-06-2015",
    "tradeDate": "26-06-2015",
    "orderType": "BUY",
    "units": 80,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 6.63
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 504
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V06637"
      },
      "accountName": "SHAW MARGARET JOAN",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "AIO"
      },
      "name": "Asciano Limited",
      "type": "AUSTRALIAN_EQUITY"
    },
    "settlementDate": "26-06-2015",
    "tradeDate": "26-06-2015",
    "orderType": "BUY",
    "units": 80,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 6.63
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 504
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V06637"
      },
      "accountName": "SHAW MARGARET JOAN",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "AIO"
      },
      "name": "Asciano Limited",
      "type": "AUSTRALIAN_EQUITY"
    },
    "settlementDate": "26-06-2015",
    "tradeDate": "26-06-2015",
    "orderType": "BUY",
    "units": 80,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 6.63
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 504
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V06637"
      },
      "accountName": "SHAW MARGARET JOAN",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "AIO"
      },
      "name": "Asciano Limited",
      "type": "AUSTRALIAN_EQUITY"
    },
    "settlementDate": "26-06-2015",
    "tradeDate": "26-06-2015",
    "orderType": "BUY",
    "units": 80,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 6.63
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 504
    },
    "orderState": "AWAITING SETTLEMENT"
  },
  {
    "account": {
      "accountId": {
        "key": "V06637"
      },
      "accountName": "SHAW MARGARET JOAN",
      "productName": "Investment Consolidator",
      "adviser": {
        "key": "PFALL"
      },
      "accountServiceType": "INVESTMENT"
    },
    "asset": {
      "id": {
        "key": "AIO"
      },
      "name": "Asciano Limited",
      "type": "AUSTRALIAN_EQUITY"
    },
    "settlementDate": "26-06-2015",
    "tradeDate": "26-06-2015",
    "orderType": "BUY",
    "units": 80,
    "fee": "$100,-",
    "price": {
      "currency": "AUD",
      "value": 6.63
    },
    "settlementValue": {
      "currency": "AUD",
      "value": 504
    },
    "orderState": "AWAITING SETTLEMENT"
  }
];

var detailMockData = {
    "accountId": "D1234",
    "accountName": "Sherry Gates",
    "accountType": "Investment Account",
    "orders": [
      {
        "orderDate": "12-06-2015",
        "investment": "ANZ",
        "type": "BUY",
        "units": 100,
        "filledUnits": 200,
        "limitPrice": "$200",
        "valid": "today only",
        "fee": "$130.50",
        "amount": "$1000",
        "orderSource": "Transacting",
        "status": "In progress",
        "transactions": {
          "reference": 1234567,
          "orderTaker": 20000000,
          "lastUpdated": "02-09-2014 12:36 PM",
          "filledUnits": 950,
          "price": 50922.47,
          "amount": 111222.00,
          "fundingPriority": "level 1",
          "status": "ON_MARKET",
          "detailTransactions": [

            {

              "lastUpdated": "02-09-2014 12:36 PM",
              "filledUnits": 950,
              "price": 50922.47,
              "amount": 111222.00,
              "fundingPriority": "proceeds(1)",
              "status": "ON_MARKET"
            },
            {

              "lastUpdated": "02-09-2014 12:36 PM",
              "filledUnits": 950,
              "price": 50922.47,
              "amount": 111222.00,
              "fundingPriority": "proceeds(1)",
              "status": "ON_MARKET"
            }
            ,
            {

              "lastUpdated": "02-09-2014 12:36 PM",
              "filledUnits": 950,
              "price": 50922.47,
              "amount": 111222.00,
              "fundingPriority": "proceeds(1)",
              "status": "ON_MARKET"
            }
          ]
        }

      }
    ],
    "_id": "55d926a61cc52afc19e363de",
    "index": 0,
    "guid": "7f46ddc1-3e50-464c-b0fc-01c5e477ca29",
    "isActive": false,
    "balance": "$3,800.65",
    "gender": "female",
    "company": "SHEPARD",
    "email": "sherrygates@shepard.com",
    "phone": "+1 (852) 570-2571",
    "address": "711 Bristol Street, Kempton, Florida, 7984",
    "about": "Voluptate proident Lorem aute ut officia. Aliquip occaecat irure et pariatur ex aute et velit voluptate nostrud nostrud. Elit qui aliquip magna cillum tempor Lorem. Excepteur ea veniam occaecat adipisicing culpa irure consectetur ipsum labore duis.\r\n",
    "registered": "2015-01-21T05:05:21 -11:00",
    "latitude": 3.334665,
    "longitude": -119.601154,
    "tags": [
      "aliqua",
      "anim",
      "esse",
      "sunt",
      "irure",
      "esse",
      "sint"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Concepcion Small"
      },
      {
        "id": 1,
        "name": "Mcdaniel West"
      },
      {
        "id": 2,
        "name": "Jayne Combs"
      }
    ],
    "greeting": "Hello, undefined! You have 4 unread messages.",
    "favoriteFruit": "apple"
  }
  ;

