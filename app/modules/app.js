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
            templateUrl: '../views/tabs.html',
            controller: 'OrdersCtrl',
            resolve: {
                orderData: function (wipService, configService) {
                    console.log('resolve orderdata');
                  return [
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

                  //return wipService.getData(configService.config('mock_orders').url);
                },
                settlementsData: function (wipService, configService) {
                    console.log('resolve settlementData');
                    //return wipService.getData(configService.config('mock_settlements').url);
                }
                ,
                completeOrders: function (wipService, configService) {
                    //return wipService.getData(configService.config('mock_complete_orders').url);
                }

            }
        })


      .state('orderDetail', {
        templateUrl: '../views/detail.html',
        controller: 'OrderDetailCtrl',
        url: '/detail/:myParam',

        resolve: {
          orderDetails: function (wipService, configService, $stateParams) {
            var accountId = $stateParams.myParam;
           // debugger;
            console.log('ACCOUNT ID', accountId);
            return wipService.getDetail(configService.config('mock_order_detail').url + '?accountId='+ accountId);
          }
        }
      });
        //.state('orderDetail', {
        //    templateUrl: 'modules/common/orders/partials/detail.html',
        //    controller: 'OrderDetailCtrl',
        //    url: '/detail/:myParam',
        //    resolve: {
        //
        //        orderDetails: function (wipService, configService, $stateParams) {
        //            console.log('resolve');
        //            var referrer = angular.toJson($stateParams.myParam);
        //            debugger;
        //            console.log('stateParm', referrer.accountID);
        //            console.log('order detail resolving');
        //            //todo remove hardcoded
        //            return wipService.getDetail(configService.config('mock_order_detail').url + '?accountId=2233');
        //        }
        //    }
        //});



});

app.run(function ($state) {
    console.log('run');
    $state.go('tabs');
    //$state.go('orderDetail');
});

