app.controller('OrderDetailCtrl', function ($scope, $filter, $location, configService, orderDetails,$stateParams,searchFilterService,DATA) {

  debugger;
  $scope.orderDetails = orderDetails;

  //$scope.showAdvancedSearch=false;

  //accountid

  console.log('orderdetails in ctrl params NOW',$stateParams)
  console.log('data from resolve orderdetails in ctrl :',orderDetails)

  //debugger;
  //var referrer = $stateParams.myParam ;
  //
  //console.log('state', referrer);

  $scope.collapsed = true;
  $scope.collapsedDetail=true;

  //$scope.detailRows= orderDetail.rows;
  //console.log('orderdetail ctrl', orderDetails);

  $scope.refresh= function(){
    console.log('refresh');

    debugger;
   // var accountId =$stateParams.accountId;

    console.log($stateParams);

    var accountId='D00072'


    console.log('src',$scope.orderSource);


    var url = DATA.WIPServiceClient + accountId + "/orders/search?orderSource="
      + $scope.orderSource
      + '&orderStatus='+ $scope.orderStatus
      + '&orderType='+$scope.orderType
      + '&fromDate='+$scope.fromDate
      + '&toDate=' +$scope.toDate
      + '&security='+$scope.security;

    console.log('searchfilter url',url);

    //var url='https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/D00072/orders/search?orderSource='+
    //  '&orderStatus='+'&orderType='+'&fromDate=13-01-2000&toDate=12-06-2015&security=';
    //

    searchFilterService.filter(url).then(function(data){
      $scope.orderDetails =data;

    });

    console.log($scope.orderDetails );

  }

});
