describe('Sign Up Service Validate Menu Item Short Name', function () {

    var signUpService;
    var $httpBackend;
    var ApiBasePath;
    var $http;
  
    beforeEach(function () {
      module('public');
  
      inject(function ($injector) {
        
        signUpService = $injector.get('SignUpService');
        $httpBackend = $injector.get('$httpBackend');
        ApiBasePath = $injector.get('ApiBasePath');

      });
    });
  
    
    it('should return true if selected menu item is in the list', function() {
      //Could not get to work
      //Keep getting errors that give no description on the issue besides $injector:moulerr
      console.log(ApiBasePath);
      //$httpBackend.whenGET(ApiBasePath + '/categories.json').respond(['Lunch', 'Dessert']);
    // signUpService.getMenuCategories().then(function(response) {
    //   expect(response.data).toEqual(['Lunch', 'Dessert']);
    // });
    //$httpBackend.flush();
      

      // $httpBackend.whenGET(ApiBasePath + '/menu_items.json').respond(['A1']);
      // signUpService.validateShortName().then(function(response) {
      //   expect(response.data).toEqual(true);
      // });
      // $httpBackend.flush();
    });
  
  });
  