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
      templateUrl: 'views/tabs.html',
      controller: 'OrdersCtrl',
      resolve: {
        orderData: function (wipService, configService, $stateParams,clientOrderEndpoint,clientEndpoint,clientDetailOrder)
        {

          debugger;

          var url =configService.config(clientEndpoint, clientOrderEndpoint, clientDetailOrder,'open');

          console.log('open url',url);

          //return wipService.getData(url.url);

        },
        settlementsData: function (wipService, configService, $stateParams,clientOrderEndpoint,clientEndpoint,clientDetailOrder)
        {
          console.log('resolve settlementData');

          debugger;
          var url =configService.config(clientEndpoint, clientOrderEndpoint, clientDetailOrder,'settlements');
          //
          //debugger;
          console.log('settlement url',url);
          //
          return wipService.getData(url.url);


          //return settlementsMockData;
          //return wipService.getData('https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/businesses/MPMSWP/advisers/PFALL/orders/statuses/awaitingsettlement');
        }
        ,
        completeOrders: function (wipService, configService, $stateParams,clientOrderEndpoint,clientEndpoint,clientDetailOrder)
        {
          console.log('resolve complete');

          debugger;
          var url =configService.config(clientEndpoint, clientOrderEndpoint, clientDetailOrder,'complete');
          //
          //debugger;
          console.log('complete url',url);
          //
          return wipService.getData(url.url);
        }

      }
    })
    .state('orderDetail', {
      templateUrl: 'views/detail.html',
      controller: 'OrderDetailCtrl',
      url: '/detail/:accountId',

      resolve: {
        orderDetails: function (wipService, configService, $stateParams,clientOrderEndpoint,clientEndpoint,clientDetailOrder) {

          var accountId = $stateParams.accountId;

          console.log('resolve detail');

          console.log('ACCOUNT ID', accountId);

          var url =configService.config(clientEndpoint, clientOrderEndpoint, clientDetailOrder,'detail',accountId);

          return wipService.getData(url.url);
        }
      }
    });

});

app.run(function ($state) {
  console.log('run');
  $state.go('tabs');
  //$state.go('orderDetail');
});
