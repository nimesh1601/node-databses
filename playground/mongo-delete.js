// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  // db.collection('Todos').deleteMany({_id:new ObjectID('584cd0ccfbb9a40384f4b07a')}).then((result) =>
  //   {
  //     console.log(result);
  //   });

  // db.collection('Todos').deleteOne({_id:new ObjectID('584cd0ccfbb9a40384f4b07a')}).then((result) =>
  //   {
  //     console.log(result);
  //   });

    db.collection('Todos').findOneAndDelete({_id:new ObjectID('584cd0e0f485bd0100181bed')}).then((result) =>
    {
      console.log(result);
    });

  // db.close();
});
