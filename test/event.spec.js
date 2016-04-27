process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var shouldHttp = require('should-http');
var server = require('../app');
var Event = require('../routes/events');
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

  it('should update a SINGLE event on /event/<id> PUT', function(done) {
    chai.request(server)
      .get('/events')
      .end(function(err, res){
        chai.request(server)
          .put('/events/'+res.body[1].id)
          .send({'title': 'changeTitle', 'description': 'fakeDescription', 'time': '24/11/1993', 'location': 'kylesBed'})
          .end(function(error, response){
            expect(response).to.have.status(200);
            expect(response).to.be.json;
            expect(response.body).to.be.a('array');
            expect(response.body[1]).to.be.a('object');
            expect(response.body[1]).to.have.property('title');
            expect(response.body[1].title).to.equal('changeTitle');
            done();
        });
      });
  });
});
