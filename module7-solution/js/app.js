/*
   Step 12 
   Make sure all of your Javascript code is inside of an IIFE.
*/

(function() {

    'use strict';
    
    /*
        Step 7
        Create app.js in your project and declare an Angular module to match 
        your ng-app declaration.
    */
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)

    /*
        Step 9
        You will obviously need to share data between these controllers. Go 
        back to app.js and implement this data sharing using the singleton 
        approach with the .service declaration. Call the service 
        ShoppingListCheckOffService.
    */
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('custom', CustomFilter);

    /*
        Step 13
        Make sure all of your dependency injections are protected from 
        minification.
    */
    ToBuyController.$inject =['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this
        toBuy.items = ShoppingListCheckOffService.getToBuyList();
        
        toBuy.isEverythingBought = function() {
            return ShoppingListCheckOffService.getEverythingBoughtStatus();
        };

        toBuy.boughtItem = function(itemIndex) {
            ShoppingListCheckOffService.boughtItem(itemIndex);
        };

    }

    /*
        Step 13
        Make sure all of your dependency injections are protected from 
        minification.
    */
    AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getBoughtList();
        alreadyBought.isNothingBought = function() {
            return ShoppingListCheckOffService.getNothingBoughtStatus();
        };

    }


    function ShoppingListCheckOffService() {
        var service = this;


        /*
            JHU Additional Step 2a
            Add another property into each item called pricePerItem. It should 
            be a strictly numeric property.
        */

        var toBuyList = [{name: "cookie(s)", quantity: 10, pricePerItem: 2},
                         {name: "cake(s)", quantity: 3, pricePerItem: 10},
                         {name: "pie(s)", quantity: 2, pricePerItem: 8},
                         {name: "cannoli(s)", quantity: 4, pricePerItem: 5},
                         {name: "macaron(s)", quantity: 7, pricePerItem: 3}];

        var boughtList = [];

        var nothingBought = true;
        var everythingBought = false;


        service.getToBuyList = function() {
            return toBuyList;
        };

        service.getBoughtList = function() {
            return boughtList;
        };

        service.getEverythingBoughtStatus = function() {
            return everythingBought;
        };

        service.getNothingBoughtStatus = function() {
            return nothingBought;
        };


        service.boughtItem = function(itemIndex) {
            boughtList.push(toBuyList[itemIndex]);
            toBuyList.splice(itemIndex, 1);

            if(toBuyList.length == 0) {
                everythingBought = true;
            }
            
            if(boughtList.length > 0) {
                nothingBought = false;
            }
        };

        
    }
    
    /*
        JHU Additional Step 2d
        The tripple dollar sign for the price is not a typo. It’s the result of 
        the custom filter you are to build and apply to the total price 
        displayed in the template.
    */
    function CustomFilter(){
        return function(input) {
            input = input || "";
            input = "$$$" + input.toFixed(2);
            return input;
        };
    }

})();


//Tested minified version of script and it worked properly
//Step 13 confirmed
//!function(){"use strict";function t(t){this.items=t.getToBuyList(),this.isEverythingBought=function(){return t.getEverythingBoughtStatus()},this.boughtItem=function(e){t.boughtItem(e)}}function e(t){this.items=t.getBoughtList(),this.isNothingBought=function(){return t.getNothingBoughtStatus()}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",function(){var t=[{name:"cookie(s)",quantity:10,pricePerItem:2},{name:"cake(s)",quantity:3,pricePerItem:10},{name:"pie(s)",quantity:2,pricePerItem:8},{name:"cannoli(s)",quantity:4,pricePerItem:5},{name:"macaron(s)",quantity:7,pricePerItem:3}],e=[],i=!0,n=!1;this.getToBuyList=function(){return t},this.getBoughtList=function(){return e},this.getEverythingBoughtStatus=function(){return n},this.getNothingBoughtStatus=function(){return i},this.boughtItem=function(o){e.push(t[o]),t.splice(o,1),0==t.length&&(n=!0),e.length>0&&(i=!1)}}).filter("custom",function(){return function(t){return t="$$$"+(t=t||"").toFixed(2)}}),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();