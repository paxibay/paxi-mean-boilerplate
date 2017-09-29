module.exports = [spellCheckAsYouType];

// show red spelling errors when you type
function spellCheckAsYouType() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            // http://www.javascriptspellcheck.com/Object_Reference
            // fyi: more of these params are default values
            // element.spellAsYouType({
            //     defaultDictionary: 'English (USA)',
            //     userInterfaceTranslation: 'en',
            //     theme: "modern",
            //     caseSensitive: true,
            //     checkGrammar: true,
            //     ignoreAllCaps: true,
            //     ignoreNumbers: true,
            //     showThesaurus: true,
            //     showLanguagesInContextMenu: false,
            //     serverModel: "auto", // php, asp, asp.net, aspx, auto
            //     popUpStyle: "modal"
            // });
        }
    }
}
