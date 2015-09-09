'use strict';

describe('Filter: remove underscore', function () {
  var $filter;
  beforeEach(function () {
    module('WIP');
  });

  beforeEach( inject(function (_$filter_) {
    $filter = _$filter_;
  }));

  it('should be free from _',function(){
    var word='_hello_';
    expect($filter('removeUnderscore')(word)).toEqual(' hello ');
  });

});

