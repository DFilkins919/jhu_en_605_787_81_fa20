/*
    Step 3.
    Create a file called menuapp.module.js and declare an Angular module to
    match your ng-app declaration.
*/

//Make sure all of your Javascript code is inside an IIFE.
(function() {
    
    'use strict';

    /*
        Step 4 continued.
        Make sure the MenuApp module lists the data module as a dependency

        Step 9 continued.
        These routes should be defined in the MenuApp module.
    */
      angular.module('MenuApp', ['data', 'ui.router']);

})();

/*
    Important Implementation Notes.
    Make sure all of your dependency injections are protected from minification.

    Above code was minified and tested successfully.
    Minified code commented out below.
    Used https://javascript-minifier.com/ to generate minified code.
*/

//!function(){"use strict";angular.module("MenuApp",["data","ui.router"])}();