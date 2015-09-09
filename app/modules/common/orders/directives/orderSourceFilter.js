app.directive('orderSourceFilter', function () {
  return {
    templateUrl: 'views/orderSourceFilter.html',
    controller: function ($scope) {
      console.log($scope.showAdvancedSearch);
      $scope.showAdvancedSearch = false;


      $scope.orderStatuses = [{"code": "CANCELLED", "name": "CANCELLED"}, {
        "code": "EXECUTION_FAILED",
        "name": "EXECUTION FAILED"
      }, {"code": "COMPLETE", "name": "COMPLETE"}, {
        "code": "COMPLETE_WITH_FAILURES",
        "name": "COMPLETE WITH FAILURES"
      }, {"code": "AWAITING_SETTLEMENT", "name": "AWAITING SETTLEMENT"}, {
        "code": "IN_PROGRESS_WITH_FAILURES",
        "name": "IN PROGRESS WITH FAILURES"
      }, {"code": "IN_PROGRESS", "name": "IN PROGRESS"}, {"code": "PENDING", "name": "PENDING"}]
    }
  };
});
