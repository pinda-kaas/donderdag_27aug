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

  //it('should call getdata.', function (){
  //  var returnData = { test:'helloss'};
  //  httpBackend.expectGET('/modules/common/orders/mock/settlementsTabMockData.json').respond(returnData);
  //  var returnedPromise = wipService.getData('mock_settlements');
  //  var result;
  //  returnedPromise.then(function(response) {
  //    result = response;
  //  });
  //  httpBackend.flush();
  //  expect(result).toEqual(returnData);
  //});

  //it('should call wipservice.getData()', function (){
  //  var returnData = {"id":"S2233","name":"Jack"};
  //
  //  httpBackend.expectGET('hsjdfhjsdhjfhsjd').respond(returnData);
  //
  //  httpBackend.expectGET('views/tabs.html').respond('');
  //
  //  httpBackend.expectGET('/modules/common/orders/mock/orderData').respond(returnData);
  //
  //  var returnedPromise = wipService.getData('hsjdfhjsdhjfhsjd');
  //  var result;
  //  returnedPromise.then(function(response) {
  //    result = response;
  //  });
  //
  //  httpBackend.flush();
  //  expect(result).toEqual(returnData);
  //});



});
