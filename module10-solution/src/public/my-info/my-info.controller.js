(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['firstname', 'lastname', 'email', 'phone', 'shortname', 'selectedMenuItem', 'ApiPath'];

    function MyInfoController(firstname, lastname, email, phone, shortname, selectedMenuItem, ApiPath) {

      var $ctrl = this;
      console.log(ApiPath);
        $ctrl.firstname = firstname;
        $ctrl.lastname = lastname;
        $ctrl.email = email;
        $ctrl.phone = phone;
        $ctrl.shortname = shortname;
        $ctrl.menuItem = selectedMenuItem;
        $ctrl.basePath = ApiPath;
    }
    
})();
