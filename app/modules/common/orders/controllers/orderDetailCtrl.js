'use strict';

app.controller('OrderDetailCtrl', function ($scope, $filter, $location, configService, orderDetails,$stateParams,wipService,DATA) {
  $scope.orderDetails = orderDetails;
  $scope.showAdvancedSearch=true;
  console.log('orderdetails in ctrl params NOW',$stateParams);
  console.log('data from resolve orderdetails in ctrl :',orderDetails);

  $scope.accountId = $stateParams.accountId;
  $scope.accountName =$stateParams.accountName;

  console.log('state', $stateParams);

  $scope.collapsed = true;
  $scope.collapsedDetail=true;

  $scope.refresh= function(){
    console.log('refresh');
    console.log($stateParams);
    console.log('src',$scope.orderSource);
    console.log('datefrom',$scope.dateFrom);


    var url = DATA.WIPServiceClient + $scope.accountId + '/orders/search?orderSource='+ $scope.orderSource.code+ '&orderStatus='+ $scope.orderStatus.code+ '&orderType='+$scope.tradeType.code + '&fromDate='+$scope.dateFrom + '&toDate=' +$scope.dateTo + '&security='+$scope.security;

    console.log('searchfilter url',url);


    wipService.getData(url).then(function(data){
      $scope.orderDetails =data;
    });

    console.log('success  ???',$scope.orderDetails.length >0 );
  };
});
