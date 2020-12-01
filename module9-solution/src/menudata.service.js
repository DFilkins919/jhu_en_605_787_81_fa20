/*
    Step 5a.
    Create menudata.service.js file and create a service called MenuDataService
    in it.
*/

//Make sure all of your Javascript code is inside an IIFE.
(function() {
    
    'use strict';

    //Step 5b. This service should be declared on the data module.
    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];

    /*
        Step 5c.
        The MenuDataService should have 2 methods:

        getAllCategories and getItemsForCategory(categoryShortName)
    */

    function MenuDataService($http) {

        var service = this;

        /*
            Step 5d.
            getAllCategories - this method should return a promise which is a 
            result of using the $http service, using the following REST API 
            endpoint: https://davids-restaurant.herokuapp.com/categories.json
        */
        service.getAllCategories = function() {
            var response = $http({
                url:"https://davids-restaurant.herokuapp.com/categories.json"
            });

            return response;
        };

        /*
            Step 5e.
            getItemsForCategory(categoryShortName) - this method should return 
            a promise which is a result of using the $http service, using the 
            following REST API endpoint: 
            https://davids-restaurant.herokuapp.com/menu_items.json?category=, 
            where, before the call to the server, your code should append 
            whatever categoryShortName value was passed in as an argument into 
            the getItemsForCategory method.
        */
        service.getItemsForCategory = function(categoryShortName) {
            var response = $http({
                url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" 
                + categoryShortName
            }).then(function (result) {
                var items = result.data.menu_items;
                return items;
            });

            return response;
        };
    }
    
})();

/*
    Important Implementation Notes.
    Make sure all of your dependency injections are protected from minification.

    Above code was minified and tested successfully.
    Minified code commented out below.
    Used https://javascript-minifier.com/ to generate minified code.
*/

//!function(){"use strict";function t(t){this.getAllCategories=function(){return t({url:"https://davids-restaurant.herokuapp.com/categories.json"})},this.getItemsForCategory=function(e){return t({url:"https://davids-restaurant.herokuapp.com/menu_items.json?category="+e}).then(function(t){return t.data.menu_items})}}angular.module("data").service("MenuDataService",t),t.$inject=["$http"]}();
