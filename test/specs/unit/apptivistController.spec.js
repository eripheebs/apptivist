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

  describe('initialize', function() {

    it('with an empty array', function(){
      expect(testController.events).toEqual([]);
    });

  });

  describe('#updateEvents', function() {

    it('should update the events from the page', function(){
      testController.updateEvents();
      httpBackend.flush();
      expect(testController.events[0].title).toEqual(dummyEvents[0].title);
    });

  });

  describe('#postEvent', function(){

    it('posts an event to the server', function(){
      httpBackend.expectPOST("/api/events",  dummyEvents).respond(201);
      testController.postEvent(dummyEvents);
      httpBackend.flush();
    });

    it('updates the current list', function(){

    });

  });

});
