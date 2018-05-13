const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection("Todos").insertOne({
  //   text: "Some junk hereeee..!!",
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log("Unable to insert Todo ", err);
  //   };
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // })

  db.collection("Users").insertOne({
    name: "Raj H. Panchal",
    age: 18,
    location: "Jamnagar, Gujarat"
  }, (err, result) => {
    if(err){
      return console.log("Unable to insert Todo ", err);
   };
   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  })

  db.close();
});
