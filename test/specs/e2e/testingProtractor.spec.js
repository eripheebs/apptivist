describe('apptivistApp', function(){

  it('has a form', function(){
    browser.get('/events/new.html');
    expect(element(by.id('#new-event-title')).isDisplayed()).toBeTruthy();
  });

});

// $('#new-event-title').sendKeys('test event');
// $('#new-event-description').sendKeys('test event description');
// $('#new-event-time').sendKeys('test event time');
// $('#new-event-location').sendKeys('test event location');
// expect(browser.getTitle()).toEqual('apptivistApp');
