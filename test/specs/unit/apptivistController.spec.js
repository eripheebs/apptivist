describe('eventController', function() {

  beforeEach(module('apptivistApp'));

  var testController;

  beforeEach(inject(function($controller, $httpBackend){
    testController = $controller('eventController');
    httpBackend = $httpBackend;
    httpBackend.whenGET('/api/events').respond(dummyEvents);
  }));

  var dummyEvents = [{
    title: "testTitle",
    description: "testDescription",
    time: "testTime",
    location: "testLocation"
  }];

  var secondDummyEvents =[{
    title: "editTitle",
    description: "editDescription",
    time: "editTime",
    location: "editLocation"
  }];

  describe('initialize', function() {

    it('with an empty array', function(){
      expect(testController.events).toEqual([]);
    });

  });

  describe('#getEvents', function() {

    it('should update the events from the page', function(){
      testController.getEvents();
      httpBackend.flush();
      expect(testController.events[0].title).toEqual(dummyEvents[0].title);
    });

    it('updates the information of a specific event', function() {
      spyOn(testController, "createEventWithId");
      testController.editEvent();
      expect(testController.createEventWithId).toHaveBeenCalled();
    });

  });

  describe('#deleteEvent', function(){

    it('deletes an event from the page', function(){
      testController.deleteEvent();
      expect(testController.events).toEqual([]);
    });

  });

  describe('#postEvent', function(){

    it('updates the current list', function() {
      spyOn(testController, "createEventWithId");
      testController.sendEvent();
      expect(testController.createEventWithId).toHaveBeenCalled();
    });

  });

});
