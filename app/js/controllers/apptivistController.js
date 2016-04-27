apptivistApp.controller('apptivistController',['$http', function ($http) {

  self = this;

  self.events = [];

  self.updateEvents = function() {
    $http.get('/events')
      .then(function(returnValue) {
        self.events = returnValue.data;
      });
  };

}]);
