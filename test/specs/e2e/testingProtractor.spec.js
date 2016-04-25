describe('apptivistController', function(){

  describe('homepage works', function(){
    it('has a title', function(){
      browser.get('/');
      expect(browser.getTitle()).toEqual('apptivistApp');
    });
  });

});
