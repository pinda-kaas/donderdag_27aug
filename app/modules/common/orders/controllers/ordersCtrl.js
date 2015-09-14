'use strict';

app.controller('OrdersCtrl', function ($scope, $filter, $location, configService, orderData, settlementsData, completeOrders, $state) {

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



  $scope.hello = 'hi therskfdjskje';

  $scope.resetHello = function() {
    console.log('reset');
    $scope.hello = '';
  };

  //$scope.resetFilter = function() {
  //  console.log('reset');
  // // $scope.hello = '';
  //  $scope.accountName='';
  //};



});
