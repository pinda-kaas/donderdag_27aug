app.controller('OrderDetailCtrl', function ($scope, $filter, $location, configService, orderDetails,$stateParams,wipService,DATA) {

  $scope.orderDetails = orderDetails;

  $scope.showAdvancedSearch=true;

  console.log('orderdetails in ctrl params NOW',$stateParams)
  console.log('data from resolve orderdetails in ctrl :',orderDetails)

  $scope.accountId = $stateParams.accountId;
  $scope.accountName =$stateParams.accountName;

  //debugger;
  //var referrer = $stateParams.myParam ;
  //
  console.log('state', $stateParams);

  $scope.collapsed = true;
  $scope.collapsedDetail=true;

  //$scope.detailRows= orderDetail.rows;
  //console.log('orderdetail ctrl', orderDetails);

  $scope.refresh= function(){
    console.log('refresh');
    console.log($stateParams);

    var accountId='D00072'

    console.log('src',$scope.orderSource);

    var url = DATA.WIPServiceClient + accountId
      + "/orders/search?orderSource="+ $scope.orderSource.code
      + '&orderStatus='+ $scope.orderStatus.code
      + '&orderType='+$scope.tradeType.code
      + '&fromDate='+'2015-01-01'
      + '&toDate=' +'2016-01-01'
      + '&security='+$scope.security;

    console.log('searchfilter url',url);

    //var url='https://itgsyddev252-vip1:8449/wealth/services/orders/wip/v1/account/D00072/orders/search?orderSource='+
    //  '&orderStatus='+'&orderType='+'&fromDate=13-01-2000&toDate=12-06-2015&security=';
    //

    wipService.getData(url).then(function(data){
      $scope.orderDetails =data;
    });

    console.log('success  ???',$scope.orderDetails.length >0 );
  }

});
