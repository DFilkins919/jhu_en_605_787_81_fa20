/*
   Hint: The categories state can have a controller as well as a resolve
*/


//Make sure all of your Javascript code is inside an IIFE.
(function () {

    'use strict';
    
    angular.module('data')
    .controller('CategoriesController', CategoriesController);
    
    CategoriesController.$inject = ['items'];
    function CategoriesController(items) {
      var mainlist = this;
      mainlist.items = items.data;
    }
    
})();

/*
    Important Implementation Notes.
    Make sure all of your dependency injections are protected from minification.

    Above code was minified and tested successfully.
    Minified code commented out below.
    Used https://javascript-minifier.com/ to generate minified code.
*/

//!function(){"use strict";function t(t){this.items=t.data}angular.module("data").controller("CategoriesController",t),t.$inject=["items"]}();