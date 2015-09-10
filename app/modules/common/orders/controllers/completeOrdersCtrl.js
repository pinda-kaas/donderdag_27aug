'use strict';

app.controller('CompleteOrdersCtrl', function ($scope, $filter, $location,configService, completeOrders) {

    $scope.completeOrders=  completeOrders;

  console.log('conmplete orders',completeOrders);
});
