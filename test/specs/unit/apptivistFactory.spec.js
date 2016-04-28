describe('EventFactory', function(){
  beforeEach(module('apptivistApp'));

  var event;
  var dummyEvent = {
    title: "testTitle",
    description: "testDescription",
    time: "testTime",
    location: "testLocation"
  };

  beforeEach(inject(function(EventFactory){
    event = new EventFactory(dummyEvent.title,
                                 dummyEvent.description,
                                 dummyEvent.time,
                                 dummyEvent.location);
  }));

  it('creates an object with the given parameters', function(){
    expect(event.title).toEqual(dummyEvent.title);
    expect(event.description).toEqual(dummyEvent.description);
    expect(event.time).toEqual(dummyEvent.time);
    expect(event.location).toEqual(dummyEvent.location);
  });
});
