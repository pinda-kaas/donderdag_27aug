'use strict';

app.filter('dateRange', function () {
  return function (input, dateFrom, dateTo, dateName) {
    //console.log('daterange filter kicksin');
    //console.log('df', dateFrom);
    //console.log('dt', dateTo);
    return _.filter(input, function (d) {
      if (d[dateName]) {
        //console.log('dateName', d[dateName]);
        var res = Date.parse(d[dateName]) >= Date.parse(dateFrom) && Date.parse(d[dateName]) <= Date.parse(dateTo);
        //console.log('input',input);
        //console.log('res',res);
        if (res===undefined) {
          res = false;
        }
        return res;
      }
      else {
       // console.log('false daterange');
        return null;
      }
    });
  };
});
