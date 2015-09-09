var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function () {
  return $window._;
}]);

"use strict";
var app = angular.module('WIP', ['ui.router', 'underscore', 'ui.bootstrap', 'smart-table', 'ngAnimate', 'config']);

console.log('IS THIS CLEANED??? SHOULD NOT BEthis is the app starting up');

app.config(function ($stateProvider) {
  $stateProvider
    .state('tabs', {
      url:'/',
      templateUrl: 'views/tabs.html',
      controller: 'OrdersCtrl',
      resolve: {
        orderData: function (wipService,configService) {
          //return orderMockData;
          return wipService.getData(configService.config('open', ''));
        },
        settlementsData: function (wipService,configService) {
          //return settlementsMockData;
          return wipService.getData(configService.config('settlements', ''));
        }
        ,
        completeOrders: function (wipService, configService) {
          //return completeOrdersMockData;
          return wipService.getData(configService.config('complete', ''));
        }
      }
    })
    .state('orderDetail', {
      templateUrl: 'views/detail.html',
      controller: 'OrderDetailCtrl',
      params:{'accountId':null,'accountName':null},
      resolve: {
        orderDetails: function (wipService,configService,$stateParams) {
          debugger;
          var accountId = $stateParams.accountId;
          //return detailMockData;
          return wipService.getData(configService.config('detail',accountId));
        }
      }
    });


});

app.run(function ($state) {
  debugger;
 $state.go('tabs');
 //$state.go('orderDetail');
});


