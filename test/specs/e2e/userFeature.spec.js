describe('apptivistApp', function(){

  it('allows the creation of a new user', function(){
    browser.get('/users/new');
    expect(element(by.id('new-user-name')).isDisplayed()).toBeTruthy();
    expect(element(by.id('new-user-username')).isDisplayed()).toBeTruthy();
    expect(element(by.id('new-user-email')).isDisplayed()).toBeTruthy();
    expect(element(by.id('new-user-password')).isDisplayed()).toBeTruthy();
    expect(element(by.id('submit')).isDisplayed()).toBeTruthy();
  });
});
