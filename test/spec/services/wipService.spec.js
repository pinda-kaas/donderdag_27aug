describe('wipService', function () {
  var wipService,
      httpBackend;

  beforeEach(function (){
    // load the module.
    module('WIP');

    inject(function($httpBackend, _wipService_) {
      wipService = _wipService_;
      httpBackend = $httpBackend;
    });
  });

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  xit('should call getdata.', function (){
    var returnData = { test:'helloss'};
    httpBackend.expectGET('/modules/common/orders/mock/settlementsTabMockData.json').respond(returnData);
    var returnedPromise = wipService.getData('mock_settlements');
    var result;
    returnedPromise.then(function(response) {
      result = response;
    });
    httpBackend.flush();
    expect(result).toEqual(returnData);
  });

  it('should call wipservice.getData()', function (){
    var returnData = {"id":"S2233","name":"Jack"};

    httpBackend.expectGET('api/accounts/accountId=S2233').respond(returnData);

    httpBackend.expectGET('views/tabs.html').respond('');

    var returnedPromise = wipService.getData('api/accounts/accountId='+'S2233');
    var result;
    returnedPromise.then(function(response) {
      result = response;
    });

    httpBackend.flush();
    expect(result).toEqual(returnData);
  });



});
