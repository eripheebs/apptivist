apptivistApp.controller('apptivistController',['$http', function ($http) {

  self = this;

  self.events = [{
   title: "testTitle",
   description: "testDescription",
   time: "testTime",
   location: "testLocation"
 }];

  self.updateEvents = function() {
    $http.get('/events')
      .then(function(returnValue) {
        self.events = returnValue.data;
      });
  };

}]);
