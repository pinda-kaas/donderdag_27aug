'use strict';

app.controller('OrderDetailCtrl', function ($scope, $filter, $location, configService, orderDetails, $stateParams, wipService, DATA) {
  $scope.orderDetails = orderDetails;
  $scope.showAdvancedSearch = true;
  console.log('orderdetails in ctrl params NOW', $stateParams);
  console.log('data from resolve orderdetails in ctrl :', orderDetails);

  $scope.accountId = $stateParams.accountId;
  $scope.accountName = $stateParams.accountName;

  console.log('state', $stateParams);

  $scope.collapsed = true;
  $scope.collapsedDetail = true;

  $scope.refresh = function () {
    console.log('refresh');
    console.log($stateParams);
    console.log('src', $scope.orderSource);

    console.log(' $scope.tradeType.code ', $scope.tradeType );
    console.log('$scope.security;',$scope.security);

    debugger;

    var dtFrom=$filter('date')($scope.dateFrom, 'yyyy-mm-dd');
    var dtTo=$filter('date')($scope.dateTo, 'dd-mm-yy');


    console.log('datefrom', dtFrom);
    console.log('dateto', dtTo);

    console.log('$scope.orderSource.code ',$scope.orderSource.code );
    console.log('$scope.orderStatus.code',$scope.orderStatus.code);
    console.log('$scope.orderType.code',$scope.orderType.code);
    console.log('$scope.assetType.code',$scope.assetType.code);
    console.log('$scope.security',$scope.accountName);

//    var url = DATA.WIPServiceClient +DATA.detailsSuffix + $scope.accountId + '/orders/search?orderType=\'SELL\'' ;

    var url = DATA.WIPServiceClient +DATA.detailsSuffix + $scope.accountId + '/orders/search?orderSource=' +
      $scope.orderSource.code + '&status=' + $scope.orderStatus.code + '&orderType=' + $scope.orderType.code
      + '&fromDate=' + dtFrom + '&toDate=' + dtTo + '&security=' + $scope.accountName+ '&securityType=' +$scope.assetType.code;

    console.log('searchfilter url', url);

    wipService.getData(url).then(function (data) {
      $scope.orderDetails = data;
    });

  };
});
