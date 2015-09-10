'use strict';

app.filter('removeUnderscore', function () {
  return function (input) {
    return input.replace(/_/g,' ');
  };
});
