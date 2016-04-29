apptivistApp.controller('eventController',['$http', 'EventFactory', 'EventService', function ($http, EventFactory, EventService) {
  var self = this;

  self.events = [];

  self.updateEvents = function() {
    EventService.getEvents()
      .then(function(events){
        self.events = events;
      });
  };

  self.sendEvent = function(title, description, time, location) {
    EventService.postEvent(self.createEventWithId(title, description, time, location))
      .then(self.updateEvents);


  };

  self.createEventWithId = function(title, description, time, location, id) {
    return new EventFactory(title, description, time, location, id);
  };

  self.editEvent = function(title, description, time, location, id) {
    EventService.editEvent(self.createEventWithId(title, description, time, location, id))
      .then(self.updateEvents);
  };

  self.deleteEvent = function(id) {
    EventService.deleteEvent(id)
      .then(self.updateEvents);
  };

  self.updateEvents();

}]);
