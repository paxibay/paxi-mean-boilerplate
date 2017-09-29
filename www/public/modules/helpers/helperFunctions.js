/**
 * Helper functions to be used and reused in the system.
 * @class helpers.
 */
var _ = window._;

module.exports = function() {

    return {
        lastItemIn: lastItemIn,
        angularFn: angularFn,
        lowerCapsAttribs: lowerCapsAttribs,
        removeDuppes: removeDuppes,
        _: _
    };

    /**
     * Rename to Lower Caps all of the Object's Attributes
     * @method lowerCapsObjectAttributes
     */
    function lowerCapsObjectAttributes(data) {
        for (var attrib in data) {

            // if (typeof data[attrib] === 'object' && (!Array.isArray(data[attrib]))) {
            //     lowerCapsAttribs(data[attrib]);
            // }

            // if (Array.isArray(data[attrib])) {
            //     data[attrib] = lowerCapsAttribs(data[attrib]);
            // }

            var newAttribNameLower = attrib.charAt(0).toLowerCase() + attrib.slice(1);
            var newAttribNameUpper = attrib.charAt(0).toUpperCase() + attrib.slice(1);
            if (!data[newAttribNameLower]) {
                data[newAttribNameLower] = data[attrib];
            }
            if (!data[newAttribNameUpper]) {
                data[newAttribNameUpper] = data[attrib];
            }
        }
        return data;
    }

    /**
     * Rename to Lower Caps all attributes of any object or array.
     * @method lowerCapsAttribs.
     */
    function lowerCapsAttribs(data) {
        return Array.isArray(data) ? _.each(data, function(item) {
            lowerCapsAttribs(item);
        }) : lowerCapsObjectAttributes(data);
    }

    function removeDuppesFromObject(data) {
        for (var attrib in data) {

            if (typeof data[attrib] === 'object' && (!Array.isArray(data[attrib]))) {
                removeDuppes(data[attrib]);
            }

            if (Array.isArray(data[attrib])) {
                data[attrib] = removeDuppes(data[attrib]);
            }

            var newAttribNameLower = attrib.charAt(0).toLowerCase() + attrib.slice(1);
            var newAttribNameUpper = attrib.charAt(0).toUpperCase() + attrib.slice(1);

            if (data[newAttribNameLower] && data[newAttribNameUpper] || (data[attrib] === "") || (data[attrib] === null) || (data[attrib] === undefined) && (attrib !== '0')) {
                if (typeof data === 'string' || data instanceof Date) {} else {
                    delete data[newAttribNameLower];
                }
            }
        }

        return data;
    }

    function removeDuppes(data) {
        return Array.isArray(data) ? _.each(data, function(item) {
            removeDuppes(item);
        }) : removeDuppesFromObject(data);
    }

    /**
     * Return the last element in the array.
     * @method lastIn
     */
    function lastItemIn(array) {
        return (Array.isArray(array) && array.length > 0) ? array[array.length - 1] : null;
    }

    /**
     * Return the last item of the last item
     * @method angularFn.
     * @example ['controller', ['$scope', controllerFunction]]
     * This would return the function itself. --- controllerFunction ---
     */
    function angularFn(array) {
        return lastItemIn(lastItemIn(array));
    }
};
