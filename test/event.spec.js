var chai = require('chai');
var chaiHttp = require('chai-http');
var shouldHttp = require('should-http');
var server = require('../app');
var expect = chai.expect;

chai.use(chaiHttp);

describe('events', function(){
  it('should list all events on /events GET', function(done){
    chai.request(server)
      .get('/events')
      .end(function(err, res){
        expect(res).to.have.status(200);
        done();
      });
  });
});
