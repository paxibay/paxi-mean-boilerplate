module.exports = ['$rootScope', storageFactory];

function storageFactory($rootScope) {

    var STORAGE_ID = 'storage';
    
    // $rootScope.$on("$routeChangeStart", function routeChange(event, newUrl, oldUrl) {
    //     if (newUrl.originalPath === "/login") {
    //         localStorage.clear();
    //         console.log("local storage cleared");
    //     }
    // });

    return {
        get: function() {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        getByName: function(params) {
            var items = angular.fromJson(localStorage.getItem(STORAGE_ID) || '[]');

            for (var i = 0; i < items.length; i++) {
                if (params.name === items[i].name) {
                    return items[i];
                }
            }

            return null;
        },

        put: function(params) {
            var items = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');

            for (var i = 0; i < items.length; i++) {
                if (params.name === items[i].name) {
                    items[i].value = params.value;
                    localStorage.setItem(STORAGE_ID, JSON.stringify(items));
                    return;
                }
            }

            items.push(params);
            localStorage.setItem(STORAGE_ID, JSON.stringify(items));

        }
    };

}
