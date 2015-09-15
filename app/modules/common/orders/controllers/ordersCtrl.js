'use strict';

app.controller('OrdersCtrl', function ($scope, $filter, $location, configService, orderData, settlementsData, completeOrders, $state) {

  $scope.accountName='';

  console.log('orderdata in controller:',orderData);
  $scope.ordersTabActive = true;
  $scope.settlementsTabActive = false;
  $scope.completedTabActive = false;

  $scope.showAdvancedSearch=true;

   console.log('ordersctrl started');

  if (orderData.length === 0) {
    $scope.ordersTabActive = false;
    $scope.settlementsTabActive = true;;
  }
  else {
    $scope.displayedRows = orderData;
    $scope.accounts = orderData;//typeAheadAccounts;
  }

  $scope.settlements = settlementsData;
  $scope.completeOrders = completeOrders;

  $scope.advisers = ['Mark', 'Ed', 'Fred',''];

  $scope.onSelect = function ($item, $model, $label) {
    $scope.$item = $item;
    $scope.$model = $model;
    $scope.$label = $label;

    $state.go('orderDetail', {accountId: $item.account.accountId.key});
  };


  $scope.resetFilter = function() {

   // console.log('datfrom:', $scope.$$childTail.$$childHead.account.dateFrom);
    $scope.$$childTail.$$childHead.accountName='';

    debugger;
    $scope.$$childTail.$$childHead.account.assetType={};
    $scope.$$childTail.$$childHead.account.orderType={};
    $scope.$$childTail.$$childHead.dateFrom=new Date();
    $scope.$$childTail.$$childHead.dateTo=new Date();


  };

});
