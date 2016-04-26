var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost/apptivist_development';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query(
  'CREATE TABLE events(id SERIAL PRIMARY KEY, title VARCHAR(40) not null, description VARCHAR(40) not null, time VARCHAR(40) not null, location VARCHAR(40) not null)'
);
query.on('end', function() { client.end(); });
