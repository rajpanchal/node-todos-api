const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5af8186236032a327c296f39")
  // },{
  //   $set: {
  //     completed: false
  //   }
  // },{
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res)
  // });

  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5af8196c08fc442054dc3a7e")
  },{
    $set: {
      name: "Raj H Panchal"
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((res) => {
    console.log(res)
  });

  //db.close();
});
