'use strict';

app.directive('datePicker', function () {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'views/datepicker.html',
    scope: {dt: '=par1'},
    link: function (scope, element, attrs) {

      debugger;
      console.log('attrs',attrs);

      if (attrs.par1=='dateFrom')
      {
        var today = new Date();
        var monthAgo = new Date();
        monthAgo.setDate(today.getDate() -30);
        scope.dt = monthAgo;
        console.log('month ago',scope.dt);
      }

      if (attrs.par1=='dateTo')
      {
        var today = new Date();
        scope.dt = today;
        //console.log('month ago',scope.dt);

      }
    },
    controller: function ($scope) {
      $scope.today = function () {
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() +1);
        $scope.dt = tomorrow;
      };


      //$scope.today();
      console.log('datepicker controller');

      $scope.clear = function () {
        $scope.dt = null;
      };

      $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
      };
      $scope.toggleMin();

      $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
      };

      $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[2];

      $scope.status = {
        opened: false
      };

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date();
      afterTomorrow.setDate(tomorrow.getDate() + 2);
      $scope.events =
        [
          {
            date: tomorrow,
            status: 'full'
          },
          {
            date: afterTomorrow,
            status: 'partially'
          }
        ];

      $scope.getDayClass = function (date, mode) {
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

          for (var i = 0; i < $scope.events.length; i++) {
            var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

            if (dayToCheck === currentDay) {
              return $scope.events[i].status;
            }
          }
        }
        return '';
      };
    }

  //
  };
});

//app.directive('datepickerPopup', function () {
//  return {
//    restrict: 'EAC',
//    require: 'ngModel',
//    link: function (scope, element, attr, controller) {
//      //remove the default formatter from the input directive to prevent conflict
//      console.log('daetpicker extra popup');
//      controller.$formatters.shift();
//    }
//  };
//});
