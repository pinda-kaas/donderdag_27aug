'use strict';

app.filter('showCurrency', function () {
    return function (input, symbol) {
      switch (symbol) {
        case 'AUD':
          return '$' + input;
      }
    };
  }
);
