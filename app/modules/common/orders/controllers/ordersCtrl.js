app.controller('OrdersCtrl', function ($scope, $filter, $location, configService, orderData, settlementsData, completeOrders) {

  $scope.ordersTabActive=true;
  $scope.settlementsTabActive=false;
  $scope.completedTabActive=false;

  console.log('ordersctrl started');

  if (orderData.length ==0) {
    $scope.ordersTabActive=false;
    $scope.settlementsTabActive=true;
  }
  else {
    $scope.accounts = orderData;
  }

  $scope.settlements = settlementsData;
  $scope.completeOrders = completeOrders;

  console.log($scope.accounts);

  $scope.selectAdviser = function (adviser) {
    $scope.adviser = adviser;
  }



});
