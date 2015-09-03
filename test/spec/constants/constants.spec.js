'use strict';

describe('Constants', function () {

  var clientEndpoint;

  beforeEach(module('config'));

  beforeEach( inject(function (_clientEndpoint_) {
    clientEndpoint=_clientEndpoint_;
  }));

  it('should return devconfig settings',function(){
    expect(clientEndpoint.prefix).toEqual('https://itgsyddev252-vip1:8449/');
  });

});

