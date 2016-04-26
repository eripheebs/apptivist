describe('apptivistController', function() {
  beforeEach(module('apptivistApp'));

  var ctrl, httpBackend;
  var eventData = [{title: "sampleEvent", description:"sampleDescription", time:"sampleTime", location:"sampleLocation"}];
  var $scope = {};

  // beforeEach(inject(function($controller, $httpBackend) {
  //   ctrl = $controller('ApptivistController');
  //   console.log(ctrl);
  //
  //   console.log(httpBackend);
  //   console.log("end of dump end of dump end of dump");
  //
  //
  // }));

    beforeEach(inject(function($controller, $httpBackend){
      ctrl = $controller('apptivistController');
      httpBackend = $httpBackend;
    }));

  it('posts an event to the server', function(){
    httpBackend.expectPOST("/events",
      eventData[0]
    );
    httpBackend.flush();
  });

});
