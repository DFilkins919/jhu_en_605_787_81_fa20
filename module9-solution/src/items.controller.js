/*
   Hint: The items state can have the same type of setup as the categories state.
*/


//Make sure all of your Javascript code is inside an IIFE.
(function () {

    'use strict';
    
    angular.module('data')
    .controller('ItemsController', ItemsController);
    
    ItemsController.$inject = ['items'];
    function ItemsController(items) {
      var mainList = this;
      mainList.items = items;
    
    }
    
})();

/*
    Important Implementation Notes.
    Make sure all of your dependency injections are protected from minification.

    Above code was minified and tested successfully.
    Minified code commented out below.
    Used https://javascript-minifier.com/ to generate minified code.
*/

//!function(){"use strict";function t(t){this.items=t}angular.module("data").controller("ItemsController",t),t.$inject=["items"]}();