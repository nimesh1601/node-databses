// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id : new ObjectID('584d22832557609ecfd5b156')
  // }).toArray().then((docs) =>{

  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));

  // },(err) =>{
  //   console.log('Inable to fetch');
  // });

  // db.collection('Todos').find().count().then((count) =>{

  //   console.log('Todos');
  //   console.log(`Count is ${count}`);

  // },(err) =>{
  //   console.log('Inable to fetch');
  // });


    db.collection('Users').find().toArray().then((docs) =>{

    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));

  },(err) =>{
    console.log('Inable to fetch');
  });

  // db.close();
});
