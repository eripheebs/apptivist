apptivistApp.controller('apptivistController',['$http', function ($http) {

  var eventData = {
    title: "sampleEvent",
    description:"sampleDescription",
    time:"sampleTime",
    location:"sampleLocation"};

  this.postEvent = function(){
    $http.post('/events', eventData);
  };

}]);
