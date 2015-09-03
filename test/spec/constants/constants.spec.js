'use strict';

describe('Constants', function () {

  var config;

  beforeEach(function () {
    module('WIP');
    module('config');
  });

  beforeEach( inject(function (_config_) {
    config =_config_;
  }));

  it('should return devconfig settings',function(){
    expect(config.constant('clientEndpoint').prefix).toEqual('https_hhh://itgsyddev252-vip1:8449/');
  });

});

