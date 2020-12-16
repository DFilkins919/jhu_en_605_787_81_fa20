(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['allMenuItems', 'SignUpService'];

    function SignUpController(allMenuItems, SignUpService) {

      var $ctrl = this;

      $ctrl.submit = function (firstname,lastname,email,phone,shortname) {
        $ctrl.completed = SignUpService.submit(firstname, lastname, email, phone, shortname);
      }

      $ctrl.validateShortName = function(shortname) {
        return SignUpService.validateShortName(allMenuItems,shortname)
      }
    }
    
})();
