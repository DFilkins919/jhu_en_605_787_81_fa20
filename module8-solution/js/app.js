/*
    Important Implementation Notes
    1. Make sure all of your Javascript code is inside of an IIFE.
*/

(function() {

    'use strict';
    

    /*
        Step 2.
        Create app.js in your project and declare an Angular module to match 
        your ng-app declaration.
    */

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)

    /*
        Step 4a.
        Declare and create MenuSearchService.
    */

    .service('MenuSearchService', MenuSearchService)

    /*
        From lecture 25 Part 2, create a constant for the URL for best practices
        and to only change once.
    */

    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")

    /*
        Step 6a.
        Declare and create foundItems directive.
    */

    .directive("foundItems", FoundItems);

    /*
        Step 6b.
        The list should be displayed using this directive which takes the found 
        array of items specified on it as an attribute (think one-way binding 
        with '<'). To implement the functionality of the "Don't want this one!" 
        button, the directive should also provide an on-remove attribute that 
        will use function reference binding to invoke the parent controller 
        removal an item from the found array based on an index into the found 
        array.
    */

    function FoundItems() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'narrowItDown',
            bindToController: true
        };

        return ddo;
    }


    /*
        Important Implementation Notes
        2. Make sure all of your dependency injections are protected from 
        minification.
    */

    /*
        Step 5a.
        The NarrowItDownController should be injected with the MenuSearchService.
    */

    NarrowItDownController.$inject =['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        
        var narrowItDown = this
        
        narrowItDown.found = [];

        /*
            General idea.
            If nothing is found as a result of the search OR if the user leaves 
            the textbox empty and clicks the "Narrow It Down For Me!" button, 
            you should simply display the message "Nothing found".
        */
        narrowItDown.emptySearch = false;

        /*
            Step 5b.
            The controller should call the getMatchedMenuItems method when 
            appropriate and store the result in a property called found attached 
            to the controller instance.
        */

        narrowItDown.getMatchedMenuItems = function() {
            if(narrowItDown.searchTerm) {

                var promise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);
                
                promise
                .then(function(response) {

                    //If the search returned results
                    if(response.length !=0) {
                        narrowItDown.found = response;
                        narrowItDown.emptySearch = false;
                        
                    } else{
                        //If the search returned no results
                        narrowItDown.found = [];
                        narrowItDown.emptySearch = true;
                    }
                    
                })
                .catch(function(error) {
                    console.log("Error retrieving found items");
                })
            } else {
                //If the user clicks "narrow It Down For Me!" without typing
                narrowItDown.found = [];
                narrowItDown.emptySearch = true;
            }
            
        };

        /*
            Step 6c.
            In the NarrowItDownController, simply remove that item from the 
            found array. You can do that using the Array's splice() method.
        */

        narrowItDown.removeItem = function(itemIndex) {
            narrowItDown.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {
        
        var service = this;

        /*
            Step 4b.
            The service should have the following method: 
            getMatchedMenuItems(searchTerm).
        */

        service.getMatchedMenuItems = function(searchTerm) {
            /*
                Step 4c.
                That method will be responsible for reaching out to the server 
                (using the $http service) to retrieve the list of all the menu 
                items.
            */
            return $http({
                url:(ApiBasePath + "/menu_items.json"),  
            })
            .then(function(result) {
                
                var foundItems = [];
                /*
                    Step 4d.
                    Once it gets all the menu items, it should loop through them 
                    to pick out the ones whose description matches the 
                    searchTerm. 
                */
                for(var i = 0; i < result.data.menu_items.length; i++) {

                    if(result.data.menu_items[i].description.indexOf(searchTerm) != -1) {
                        foundItems.push(result.data.menu_items[i]);
                    }
                }

                /*
                    Step 4e.
                    Once a list of found items is compiled, it should return 
                    that list (wrapped in a promise)
                */

                return foundItems;
            });
        }
    };

})();


//Confirmed all dependency injections are protected from minification.
//Used https://javascript-minifier.com/ to minify above.
//Below minified code was tested and works properly.

//!function(){"use strict";function e(e){var t=this;t.found=[],t.emptySearch=!1,t.getMatchedMenuItems=function(){t.searchTerm?e.getMatchedMenuItems(t.searchTerm).then(function(e){0!=e.length?(t.found=e,t.emptySearch=!1):(t.found=[],t.emptySearch=!0)}).catch(function(e){console.log("Error retrieving found items")}):(t.found=[],t.emptySearch=!0)},t.removeItem=function(e){t.found.splice(e,1)}}function t(e,t){this.getMatchedMenuItems=function(n){return e({url:t+"/menu_items.json"}).then(function(e){for(var t=[],r=0;r<e.data.menu_items.length;r++)-1!=e.data.menu_items[r].description.indexOf(n)&&t.push(e.data.menu_items[r]);return t})}}angular.module("NarrowItDownApp",[]).controller("NarrowItDownController",e).service("MenuSearchService",t).constant("ApiBasePath","https://davids-restaurant.herokuapp.com").directive("foundItems",function(){return{restrict:"E",templateUrl:"foundItems.html",scope:{foundItems:"<",onRemove:"&"},controller:e,controllerAs:"narrowItDown",bindToController:!0}}),e.$inject=["MenuSearchService"],t.$inject=["$http","ApiBasePath"]}();