/*
    Step 7.
    Create items.component.js file and create a component called items that 
    shows all of the menu items for a particular category.
*/

//Make sure all of your Javascript code is inside an IIFE.
(function() {
    
    'use strict';

    /*
        Step 8.
        The categories and the items components should NOT directly use the 
        MenuDataService to fetch their own data. Instead, the proper data should 
        be simply passed into the component. (Hint: use the one-way < binding).
    */
    angular.module('data')
    .component('itemsList', {
        templateUrl: "src/templates/items.template.html",
        bindings: {
            items: '<'
        }
    });
    
})();

/*
    Important Implementation Notes.
    Make sure all of your dependency injections are protected from minification.

    Above code was minified and tested successfully.
    Minified code commented out below.
    Used https://javascript-minifier.com/ to generate minified code.
*/

//!function(){"use strict";angular.module("data").component("itemsList",{templateUrl:"src/templates/items.template.html",bindings:{items:"<"}})}();