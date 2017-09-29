module.exports = function(moduleName) {
    var controllerSpecContent =  "var module = angular.mock.module;\nvar inject = angular.mock.inject;\nvar _ = require('underscore');\ndescribe('moduleNameController', function() {\n    var scope, ctrl;\n\n    beforeEach(module('BrokerPortal'));\n\n    // load the mocked controller\n    beforeEach(function() {\n        inject(function($controller, $rootScope) {\n            scope = $rootScope.$new();\n\n            ctrl = $controller('moduleNameController', {\n                $scope: scope\n            });\n        });\n    });\n\n    // destroy the current scope\n    afterEach(function() {\n        inject(function($rootScope) {\n            $rootScope.$destroy();\n        });\n    });\n\n    it('should exist', function() {\n        expect(ctrl).toBeDefined();\n    });\n\n    it('should have a title', function() {\n        expect(ctrl.title).toBe('moduleName');\n    });\n    \n});"
		var formatedContent = controllerSpecContent.replace(/moduleName/g, moduleName)
    return  formatedContent;
  };