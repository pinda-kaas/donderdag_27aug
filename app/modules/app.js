var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function () {
    return $window._;
}]);

var app = angular.module('WIP', ['ui.router', 'underscore', 'ui.bootstrap', 'smart-table', 'ngAnimate']);

console.log('this is the app starting up');

app.config(function ($stateProvider) {
    // Now set up the states

    $stateProvider
        .state('tabs', {
            templateUrl: 'modules/common/orders/partials/tabs.html',
            controller: 'OrdersCtrl',
            resolve: {
                orderData: function (wipService, configService) {
                    console.log('resolve orderdata');
                    return wipService.getData(configService.config('mock_orders').url);
                },
                settlementsData: function (wipService, configService) {
                    console.log('resolve settlementData');
                    return wipService.getData(configService.config('mock_settlements').url);
                }
                ,
                completeOrders: function (wipService, configService) {
                    return wipService.getData(configService.config('mock_complete_orders').url);
                }

            }
        })

        .state('orderDetail', {
            templateUrl: 'modules/common/orders/partials/detail.html',
            controller: 'OrderDetailCtrl',
            url: '/detail/:myParam',
            resolve: {

                orderDetails: function (wipService, configService, $stateParams) {
                    console.log('resolve');
                    var referrer = $stateParams.myParam;
                    debugger;
                    console.log('stateParm', referrer.accountID);
                    console.log('order detail resolving');
                    //todo remove hardcoded
                    return wipService.getDetail(configService.config('mock_order_detail').url + '?accountId=2233');
                }
            }
        });
});

app.run(function ($state) {
    console.log('run');
    $state.go('tabs');
    //$state.go('orderDetail');
});

