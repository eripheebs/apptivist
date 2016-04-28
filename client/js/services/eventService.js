apptivistApp.service('EventService', ['$http', 'EventFactory', function($http, EventFactory){

  this.getEvents = function() {
    return $http.get('/api/events')
      .then(_createEvent);
  };

  _createEvent = function(response) {
    var eventsArray = response.data;
    var events = eventsArray.map(function (event){
      return new EventFactory(event.title, event.description, event.time, event.location, event.id);
    });
    return events;
  };

  this.postEvent = function(eventData) {
    return $http.post('/api/events', eventData, { 'Content-Type': 'application/json;charset=UTF-8' });
  };

  this.editEvent = function(eventData) {
    return $http.put('/api/events/'+ eventData.id, eventData, { 'Content-Type': 'application/json;charset=UTF-8' });
  };

  this.deleteEvent = function(id) {
    return $http.delete('/api/events/'+ id, { 'Content-Type': 'application/json;charset=UTF-8' });
  };

}]);
