describe('apptivistController', function() {

  beforeEach(module('apptivistApp'));

  var testController, scope;

  beforeEach(inject(function($controller, $httpBackend, $rootScope){
    scope = $rootScope.$new();
    testController = $controller('apptivistController', {$scope:scope});
    httpBackend = $httpBackend;
    httpBackend.whenGET('/events').respond(dummyEvents);
  }));

  var dummyEvents = [{
    title: "testTitle",
    description: "testDescription",
    time: "testTime",
    location: "testLocation"
  }];

  // var eventData = {
  //   title: "sampleEvent",
  //   description:"sampleDescription",
  //   time:"sampleTime",
  //   location:"sampleLocation"};

  describe('initialize', function() {

    it('with an empty arrays of events', function(){
      expect(testController.events).toEqual(dummyEvents);
    });

  });

  describe('#updateEvents', function() {

    it('should update the events from the page', function(){
      testController.updateEvents();
      httpBackend.flush();
      expect(testController.events).toEqual(dummyEvents);
    });

  });

  describe('#postEvent', function(){

    it('posts an event to the server', function(){
      httpBackend.expectPOST("/events",  dummyEvents).respond(201);
      testController.postEvent(dummyEvents);
      httpBackend.flush();
    });

    it('updates the current list', function(){
      
    });

  });

});
