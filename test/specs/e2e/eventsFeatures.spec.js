describe('apptivistApp', function(){

  it('has an event form', function(){
    browser.get('/');
    expect(element(by.id('new-event-title')).isDisplayed()).toBeTruthy();
    expect(element(by.id('new-event-description')).isDisplayed()).toBeTruthy();
    expect(element(by.id('new-event-time')).isDisplayed()).toBeTruthy();
    expect(element(by.id('new-event-location')).isDisplayed()).toBeTruthy();
    expect(element(by.id('submit')).isDisplayed()).toBeTruthy();
  });

  it('form submits to the index page', function(){
    browser.get('/');
    $('#new-event-title').sendKeys('test event');
    $('#new-event-description').sendKeys('test event description');
    $('#new-event-time').sendKeys('test event time');
    $('#new-event-location').sendKeys('test event location');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/events/new');
  });

  it('allows the creation of a new user', function(){
    browser.get('/');
    expect(element(by.id('new-user-name')).isDisplayed()).toBeTruthy();
    expect(element(by.id('new-user-username')).isDisplayed()).toBeTruthy();
    expect(element(by.id('new-user-email')).isDisplayed()).toBeTruthy();
    expect(element(by.id('new-user-password')).isDisplayed()).toBeTruthy();
    expect(element(by.id('submit')).isDisplayed()).toBeTruthy();
  });

});
