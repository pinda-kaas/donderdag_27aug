app.controller('OrdersCtrl', function ($scope, $filter, $location, configService, orderData, settlementsData, completeOrders, $state, $http) {

  console.log('orderdata from devserver:',orderData);
  $scope.ordersTabActive = true;
  $scope.settlementsTabActive = false;
  $scope.completedTabActive = false;

  console.log('ordersctrk started');

  if (orderData.length == 0) {
    $scope.ordersTabActive = false;
    $scope.settlementsTabActive = true;
  }
  else {
    $scope.displayedRows = orderData;
    $scope.accounts = orderData;
  }

  $scope.settlements = settlementsData;
  $scope.completeOrders = completeOrders;

  $scope.advisers = ['Mark', 'Ed', 'Fred',''];

  $scope.onSelect = function ($item, $model, $label) {
    $scope.$item = $item;
    $scope.$model = $model;
    $scope.$label = $label;

    console.log('id=', $item);

    $state.go('orderDetail', {accountId: $item.account.accountId.key});
  };


  $scope.resetFilter = function () {
    console.log('reset filter', $scope.assetType);
    $scope.assetType = 'All';
  }


});
