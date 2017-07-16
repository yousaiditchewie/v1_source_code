var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/homeGrownDB";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
});
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var jacob = {
    name: "Jacob A",
    email: "Highway 37",
    password: "abc123",
  };
  db.collection("customers").insertOne(jacob, function(err, res) {
    if (err) throw err;
    console.log(`user: ${jacob.name} inserted`);
    db.close();
  });
});
