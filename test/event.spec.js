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
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        done();
      });
  });

  it('should add an event on /events POST', function(done){
    chai.request(server)
      .post('/events')
      .send({'title': 'fakeTitle', 'description': 'fakeDescription', 'time': '24/11/1993', 'location': 'kylesBed'})
      .end(function(err, res){
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body[0]).to.be.a('object');
        expect(res.body[0]).to.have.property('title');
        expect(res.body[0]).to.have.property('description');
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0].title).to.equal('fakeTitle');
        expect(res.body[0].description).to.equal('fakeDescription');
        done();
      });
  });
});
