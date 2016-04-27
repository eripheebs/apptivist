apptivistApp.service('ApptivistService', ['$http', 'ApptivistFactory', function($http, ApptivistFactory){

  this.getEvents = function() {
    return $http.get('/events')
      .then(this.eventsCreator);
  };

  this.eventsCreator = function(eArr) {
    ret = [];
    for(var i = 0; i < eArr.data.length; i++) {
      ret.push(new ApptivistFactory(eArr.data[i].title, eArr.data[i].description, eArr.data[i].time, eArr.data[i].location));
    }
    return ret;
  };


}]);
