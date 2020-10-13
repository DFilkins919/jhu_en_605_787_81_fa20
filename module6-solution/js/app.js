/*
   Step 11 hint
   Make sure that none of your variables/objects/functions "leak to the global 
   scope". (Hint: IIFE)
*/

(function() {

'use strict';

/*
    Step 7
    Create app.js in your project and declare an Angular module to match your 
    ng-app declaration.
*/

angular.module('LunchCheck', [])

/*
    Step 10
    Declare and define a LunchCheckController. Properly inject $scope into the 
    controller using the $inject property to make sure to protect your code 
    from minification.
*/

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

    /*  
        Step 11
        Create and implement properties and method(s) in order to implement the 
        functionality outlined in General Idea section.
    */

    $scope.menuTextBox = '';
    $scope.borderColor = "#000000";
    $scope.textColor = "#000000";

    $scope.checkIfTooMuch = function () {
        
        //If the textbox is empty and the user clicks the 
        //"Check If Too Much" button, the message 
        //"Please enter data first" should show up.

        if($scope.menuTextBox === '') {

            /*
                Bonus Part:
                If the message is "Please enter data first", make the font color 
                red.

                If the message is "Please enter data first", make the border color 
                around the textbox red.
            */
            
            $scope.textColor = "#FF0000";
            $scope.borderColor = "#FF0000";
            $scope.lunchMessage = "Please enter data first";
            
            return;
        }

        //Looked up how to replace white space and found the 
        //Regular Expressions tutorial from w3Schools
        //source: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
        //source: https://www.w3schools.com/jsref/jsref_replace.asp

        //Remove all white space from string
        //Singular items with space inbetween will still count as one item
        var foodItems = $scope.menuTextBox.replace(/\s/g, "");
        
        //Split the string into an array of food items.
        foodItems = foodItems.split(',');
        
        //Remove the blank entries
        for(var i = 0; i < foodItems.length; i++) {
            if(foodItems[i] === '') {
                foodItems.splice(i, 1);
            }
        }

        if(foodItems.length <= 3) {
            $scope.lunchMessage = "Enjoy!";
        }

        if(foodItems.length > 3) {
            $scope.lunchMessage = "Too much!";
        }

        /*
            Bonus Part:
            If the message is "Enjoy!" or "Too much!", make the font color 
            green.
            
            If the message is "Enjoy!" or "Too much!", make the border color 
            around the textbox green.
        */

        $scope.textColor = "#00FF00"; 
        $scope.borderColor = "#00FF00";
    };
}
    
})();