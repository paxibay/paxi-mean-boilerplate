module.exports = function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
};
