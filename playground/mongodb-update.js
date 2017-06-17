// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server.');

    // Change name and increment age

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("5938d72001e545070c0f94a8")
    }, {
        $set: {
            name: "Dennis",
        },
        $inc: {
            age: 7
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

  
    // db.close();
});