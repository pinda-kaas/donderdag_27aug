app.controller('OrdersCtrl', function ($scope, $filter, $location, configService, orderData, settlementsData, completeOrders) {

  $scope.ordersTabActive = true;
  $scope.settlementsTabActive = false;
  $scope.completedTabActive = false;

  console.log('ordersctr2cbvsl startesd');

  if (orderData.length == 0) {
    $scope.ordersTabActive = false;
    $scope.settlementsTabActive = true;
  }
  else {
    $scope.displayedRows=orderData;
    $scope.accounts = orderData;
  }

  $scope.settlements = settlementsData;
  $scope.completeOrders = completeOrders;

  console.log($scope.accounts);

  $scope.selectAdviser = function (adviser) {
    $scope.adviser = adviser;
  }

  $scope.selectAccount = function () {
    var accountName = $scope.selectedAccount.account.accountName;
    console.log(accountName);

    var filt = _.filter($scope.accounts, function (acct) {
      return acct.account.accountName == accountName;
    });

    console.log('filt', filt);

    debugger;

    $scope.displayedRows=filt;

    console.log( $scope.displayedRows);

  }


});
