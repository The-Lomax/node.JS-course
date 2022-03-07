// const mongodb = require('mongodb');

// connect to client
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;
const { MongoClient, ObjectId } = require('mongodb');

const connURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

MongoClient.connect(connURL, {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log(err);
    }
    
    const db = client.db(dbName);
    
    
});


//// MONGODB CRUD AVAILABLE OPERATIONS - CREATE READ UPDATE DELETE

// INSERTING DATA
// db.collection('users').insertOne({
    //     name: "John",
    //     age: 21,
    //     home: "Manila"
    // }, (err, result) => {
    //     if (err){
    //         return console.log(err);
    //     }
    //     console.log(result.acknowledged);
    //     console.log(result.insertedId);
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: "Jenny",
    //         age: 28,
    //         home: "USA"
    //     },
    //     {
    //         name: "Ziegfrid",
    //         age: 657,
    //         home: "Kingdom of Xanthem"
    //     }
    // ], (err, data) => {
    //     if (err) return console.log(err);
    //     console.log(data.insertedCount + ": ", data.insertedIds)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: "do homework",
    //         completed: false
    //     },
    //     {
    //         escription: "grocery shopping",
    //         completed: false
    //     },
    //     {
    //         escription: "feed the dog",
    //         completed: false
    //     }
    // ], (err, data) => {
    //     if (err) return console.log(err);
    //     console.log(data.insertedCount + ":\n", data.insertedIds);
    // })

    // SEARCHING READING DATA
    // db.collection('tasks').findOne({_id: new ObjectId("62133346f2f131f2e8eb9f1f")}, (err, doc) => {
    //     if (err) return console.log(err);
    //     console.log(doc);
    // })
    // db.collection('tasks').find({completed: false}).toArray((err, data) => {
    //     if (err) return console.log(err);
    //     console.log(data);
    // })

    // UPDATING DATA
    // db.collection('users').updateOne({
    //     name: "Jenny"
    // }, {
    //     // $set: {
    //     //     completed: true
    //     // }
    //     $inc: {
    //         age: -5
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((data) => {
    //     console.log(data);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // DELETING DATA
    // db.collection('users').deleteOne({
    //     name: "Ziegfrid"
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // })
    // db.collection('tasks').deleteMany({
    //     completed: true
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // })