app.filter('dateRange', function () {
  return function (input, dateFrom, dateTo, dateName) {
    //console.log('daterange filter kicksin');
    //console.log('df', dateFrom);
    //console.log('dt', dateTo);
    var result = false;
    return _.filter(input, function (d) {
      var tst = dateName;

      if (d[dateName]) {
        //console.log('dateName', d[dateName]);
        var res = Date.parse(d[dateName]) >= Date.parse(dateFrom) && Date.parse(d[dateName]) <= Date.parse(dateTo);

        //console.log('input',input);
        //console.log(result);
        //console.log('res',res);
        if (res==undefined) {
          res = false;
        }
        return res;
      }
      else {
        //console.log('false daterange');
        return null;
      }

    });
    //console.log('result',result);
    //return result;
  }
});

//app.filter('dateRangefilter',function(){
//  return function(dateFrom,dateTo)
//  {
//    //console.log('rangefilter');
//    _.where($scope.data,function(row){
//      row.date>= dateFrom && row.date<= dateTo
//    });
//  }
//});

