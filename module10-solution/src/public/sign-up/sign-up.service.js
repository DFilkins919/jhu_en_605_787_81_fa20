(function () {
    "use strict";
    
    angular.module('public')
    .service('SignUpService', SignUpService);
    
    
    function SignUpService() {
      var service = this;


      service.submit = function (firstname,lastname,email,phone,shortname) {
        
        service.firstname = firstname;
        service.lastname = lastname;
        service.email = email;
        service.phone = phone;
        service.shortname = shortname.toUpperCase();

        return true;
      };

      service.validateShortName = function(allMenuItems, shortname) {

        if(shortname != null) {

            for(let i = 0; i < allMenuItems.menu_items.length; i++) {
                if (allMenuItems.menu_items[i].short_name === shortname.toUpperCase())
                {
                    service.selectedMenuItem = allMenuItems.menu_items[i];
                    return true;
                }
            }
        }

        return false;
      };

      //This function will pass the user info to the My-Info Page controller
      service.getUserInfo = function(query) {

        if (query == "firstname") {
          return service.firstname;
        }

        if (query == "lastname") {
          return service.lastname;
        }

        if (query == "email") {
          return service.email;
        }

        if (query == "phone") {
          return service.phone;
        }

        if (query == "shortname") {
          return service.shortname;
        }

        if(query == "menuItem") {
          return service.selectedMenuItem;
        }

        //If user field requested does not exist
        return "error";
      }

    }

})();
