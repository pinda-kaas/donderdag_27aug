app.controller('OrdersCtrl', function ($scope, $filter, $location, configService, orderData, settlementsData, completeOrders, $state, $http) {

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

  ///console.log($scope.accounts);

  $scope.selectAdviser = function (adviser) {
    $scope.adviser = adviser;
  }

  //$scope.getAccount = function (val) {
  //  return $http.get('/modules/common/orders/mock/ordersTabMockData.json', {
  //    params: {
  //      accountName: val
  //    }
  //  })
  //    .then(function (response) {
  //      return response.data.map(function (item) {
  //        //console.log (item.account.accountName);
  //        return item.account.accountId.key;//+ "-"+ item.account.accountName;
  //      });
  //    });
  //};

  $scope.onSelect = function ($item, $model, $label) {
    $scope.$item = $item;
    $scope.$model = $model;
    $scope.$label = $label;

    console.log('id=',$item);

    $state.go('orderDetail', {myParam: $item.account.accountId.key});
  };



  $scope.resetFilter= function(){
    console.log('reset filter',$scope.assetType);
    $scope.assetType ='All';
  }


});
