////////////////////////// My Solution

const url = "mongodb://localhost:27017/learnyoumongo";
const age = parseInt(process.argv[2]);
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function(err, client) {
   if(err) throw err;
   var db = client.db('learnyoumongo');
   db.collection('parrots').find().toArray(function(err, items) {
      if(err) throw err;
      for(var i = 0; i < items.length; i++) {
           if(items[i].age > age) {
                console.log([items[i]]);
            }
      }
   });
   
   client.close();
});


/////////////////////////// Their Solution

 var mongo = require('mongodb').MongoClient
    var age = process.argv[2]
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var parrots = db.collection('parrots')
      parrots.find({
        age: {
          $gt: +age
        }
      }).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        db.close()
      })
    });
