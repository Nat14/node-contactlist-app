var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

app.use(express.static(__dirname + '/public'));

// this part is used to send data from database back to controller
app.get('/contactlist_d', function (req, res) {
  console.log('I received a GET request');

  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});
// end part

// this part is used to send data back to controller
app.get('/contactlist', function(req, res) {
  console.log("I received a GET request");

person1 = {
  name: 'Sam',
  email: 'a@b.com',
  number: '123-345-5678'
};
person2 = {
  name: 'Sonny',
  email: 'a@b.com',
  number: '123-345-5678'
};
person3 = {
  name: 'Soda',
  email: 'a@b.com',
  number: '123-345-5678'
};
var contactlist = [person1, person2, person3];

res.json(contactlist);
});
// end part

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server app listening at http://%s:%s", host, port)

});
