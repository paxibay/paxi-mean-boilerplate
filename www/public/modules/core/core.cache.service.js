module.exports = ['$rootScope', '_', apCoreCacheService];

//id = apCache
function apCoreCacheService($rootScope, _) {
    var _cachedItems = [];
   
    return {
        getCachedItem: getCachedItem,
        setCachedItem: setCachedItem,
        setCacheDefaultValuesIfEmpty : setCacheDefaultValuesIfEmpty,
        clearAll: clearAll
    };

    function clearAll(){
        _cachedItems = [];
    }

    function getCachedItem(itemId){
    	return _.findWhere(_cachedItems, {id: itemId});
    }

    function setCachedItem(value){
        
    	if (getCachedItem(value.id)){
			updatedItem(value);
    	} else {
			addItem(value);
    	}
    }

    function setCacheDefaultValuesIfEmpty(value){
        
        var cachedItem = getCachedItem(value.id);
        if (!cachedItem) {
            setCachedItem(value);
        }
    }

    function updatedItem(value){
    	_.each(_cachedItems, function(item){
    		if (item.id === value.id){
                for(var attrib in item){
    			     item[attrib] = value[attrib];
                }
    		}
    	}); 
    }

    function addItem(value){
		_cachedItems.push(value);
    }
}
