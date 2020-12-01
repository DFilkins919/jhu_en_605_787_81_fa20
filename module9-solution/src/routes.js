/*
    Step 9.
    Create routes.js file and configure your routes and view states in it. 
*/

//Make sure all of your Javascript code is inside an IIFE.
(function() {
    
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        /*
            General Idea.
            Your application should have 3 views (i.e., 3 view states): 
            home (home), categories list (categories), items list (items).
        */
        $stateProvider

        // Home Page
        // Hint: The home state will not need a controller. Just a template.
        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })

        // Categories Page
        // Hint: The categories state can have a controller as well as a resolve
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/templates/categories.template.html',
            controller: 'CategoriesController as categoriesList',
            resolve: {
                items: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        // Items Page
        // Hint: The items state can have the same type of setup as the 
        // categories state.
        .state('items', {
            url: '/items/{shortName}',
            templateUrl: 'src/templates/items.template.html',
            controller: 'ItemsController as itemsList',
            resolve: {
                items: ['MenuDataService', '$stateParams', 
                function(MenuDataService, $stateParams) {
                    return MenuDataService.getItemsForCategory($stateParams.shortName);
                }]
            }
        });
    }

})();

/*
    Important Implementation Notes.
    Make sure all of your dependency injections are protected from minification.

    Above code was minified and tested successfully.
    Minified code commented out below.
    Used https://javascript-minifier.com/ to generate minified code.
*/

//!function(){"use strict";function e(e,t){t.otherwise("/"),e.state("home",{url:"/",templateUrl:"src/templates/home.template.html"}).state("categories",{url:"/categories",templateUrl:"src/templates/categories.template.html",controller:"CategoriesController as categoriesList",resolve:{items:["MenuDataService",function(e){return e.getAllCategories()}]}}).state("items",{url:"/items/{shortName}",templateUrl:"src/templates/items.template.html",controller:"ItemsController as itemsList",resolve:{items:["MenuDataService","$stateParams",function(e,t){return e.getItemsForCategory(t.shortName)}]}})}angular.module("MenuApp").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}();