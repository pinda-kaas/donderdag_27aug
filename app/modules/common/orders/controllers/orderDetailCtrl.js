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

    var dtFrom=$filter('date')($scope.dateFrom, 'yyyy-mm-dd');
    var dtTo=$filter('date')($scope.dateTo, 'yyyy-mm-dd');

    console.log('datefrom', dtFrom);
    console.log('dateto', dtTo);

    var url = DATA.WIPServiceClient +DATA.detailsSuffix + $scope.accountId + '/orders/search?orderSource=' + $scope.orderSource.code + '&orderStatus=' + $scope.orderStatus.code + '&orderType=' + $scope.tradeType.code + '&fromDate=' + dtFrom + '&toDate=' + dtTo + '&security=' + $scope.security;

    console.log('searchfilter url', url);

    wipService.getData(url).then(function (data) {
      $scope.orderDetails = data;
    });

  };
});
