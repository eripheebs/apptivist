describe('EventService', function(){
  beforeEach(module('apptivistApp'));

  var EventService, httpBackend;

  var dummyEvents = [{
    title: "testTitle",
    description: "testDescription",
    time: "testTime",
    location: "testLocation"
  }];

  beforeEach(inject(function(_EventService_, $httpBackend){
    EventService = _EventService_;
    httpBackend = $httpBackend;
  }));

  describe('#getEvents', function(){

    it('fetches a list of events', function(){
      httpBackend.expectGET("/api/events").respond(dummyEvents);
      EventService.getEvents().then(function(returnValue) {
        expect(returnValue.title).toEqual(dummyEvents.title);
      });
      httpBackend.flush();
    });
  });

  describe('#postEvents', function(){

    it('posts a list of events', function(){
      httpBackend.expectPOST("/api/events",  dummyEvents).respond(201);
      EventService.postEvent(dummyEvents);
      httpBackend.flush();
    });
  });

  describe('#editEvent', function(){

    it('edits and event', function(){
      httpBackend.expectPOST("/api/events",  dummyEvents).respond(201);
      EventService.postEvent(dummyEvents);
      httpBackend.flush();
    });
  });

  describe('#deleteEvent', function(){

    // it('deletes an event', function(){
    //   httpBackend.expectDELETE("/api/events",  dummyEvents).respond(200);
    //   EventService.postEvent(dummyEvents);
    //   httpBackend.flush();
    // });
  });
});
