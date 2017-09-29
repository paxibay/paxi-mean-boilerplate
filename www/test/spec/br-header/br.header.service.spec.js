var module = angular.mock.module;
var inject = angular.mock.inject;
var _ = require('underscore');
var _$httpBackend, $rootScope, brHeaderService, _coreConfig, URL, URL2;
describe('brHeaderService', function() {

  // Set up the module
  beforeEach(module('BrokerPortal'));

  beforeEach(function() {
    inject(function(brHeaderService, coreConfig, $httpBackend, $rootScope) {
      _coreConfig = coreConfig;
      brHeaderService = brHeaderService;
      _$httpBackend = $httpBackend;

      mockGet();
      mockPost();
    });
    // });
  });

  afterEach (
    inject(function(brHeaderService, $httpBackend) {
        _$httpBackend.verifyNoOutstandingExpectation ();
        _$httpBackend.verifyNoOutstandingRequest ();
    }));


  function mockGet(){
     URL = _coreConfig.urlPath() + '/api/clients/' + _coreConfig.getClient() + '/brHeader/get';
      // backend definition common for all tests
      _$httpBackend.when('GET', URL)
        .respond({
          userId: 'userX'
        }, {
          'A-Token': 'xxx'
        });
  }

  function mockPost(){
     URL2 = _coreConfig.urlPath() + '/api/clients/' + _coreConfig.getClient() + '/brHeader/post';
      _$httpBackend.when('POST', URL2)
        .respond({
          userId: 'userX'
        }, {
          'A-Token': 'xxx'
        });
  }

  it('Should be able to get information', function() {
    inject(function(brHeaderService, $httpBackend) {
      $httpBackend.expectGET(URL);
      brHeaderService.get();
      $httpBackend.flush();
    });
  });

  it('Should be able to post information', function() {    
    inject(function(brHeaderService, $httpBackend) {
      $httpBackend.expectPOST(URL2);
      brHeaderService.set({data:'data'});
      $httpBackend.flush();
    });
  });
});