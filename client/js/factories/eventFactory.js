apptivistApp.factory('EventFactory', function(){

  var event = function(title, description, time, location) {
    this.title = title;
    this.description = description;
    this.time = time;
    this.location = location;
  };

  return event;
});
