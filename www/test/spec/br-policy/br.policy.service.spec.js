var module = angular.mock.module;
var inject = angular.mock.inject;
var _ = require('underscore');
var _$httpBackend, $rootScope, brPolicyService, _coreConfig, URL, URL2;
describe('brPolicyService', function() {

  // Set up the module
  beforeEach(module('BrokerPortal'));

  beforeEach(function() {
    inject(function(brPolicyService, coreConfig, $httpBackend, $rootScope) {
      _coreConfig = coreConfig;
      brPolicyService = brPolicyService;
      _$httpBackend = $httpBackend;

      mockGet();
      mockPost();
    });
    // });
  });

  afterEach (
    inject(function(brPolicyService, $httpBackend) {
        _$httpBackend.verifyNoOutstandingExpectation ();
        _$httpBackend.verifyNoOutstandingRequest ();
    }));


  function mockGet(){
     URL = _coreConfig.urlPath() + '/api/clients/' + _coreConfig.getClient() + '/brPolicy/get';
      // backend definition common for all tests
      _$httpBackend.when('GET', URL)
        .respond({
          userId: 'userX'
        }, {
          'A-Token': 'xxx'
        });
  }

  function mockPost(){
     URL2 = _coreConfig.urlPath() + '/api/clients/' + _coreConfig.getClient() + '/brPolicy/post';
      _$httpBackend.when('POST', URL2)
        .respond({
          userId: 'userX'
        }, {
          'A-Token': 'xxx'
        });
  }

  it('Should be able to get information', function() {
    inject(function(brPolicyService, $httpBackend) {
      $httpBackend.expectGET(URL);
      brPolicyService.get();
      $httpBackend.flush();
    });
  });

  it('Should be able to post information', function() {    
    inject(function(brPolicyService, $httpBackend) {
      $httpBackend.expectPOST(URL2);
      brPolicyService.set({data:'data'});
      $httpBackend.flush();
    });
  });
});