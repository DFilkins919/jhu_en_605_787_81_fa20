/*
    Step 4.
    Create data.module.js file and declare another module in it called data.
*/

//Make sure all of your Javascript code is inside an IIFE.
(function() {
    
    'use strict';

    angular.module('data', []);
    
})();


/*
    Important Implementation Notes.
    Make sure all of your dependency injections are protected from minification.

    Above code was minified and tested successfully.
    Minified code commented out below.
    Used https://javascript-minifier.com/ to generate minified code.
*/

//!function(){"use strict";angular.module("data",[])}();