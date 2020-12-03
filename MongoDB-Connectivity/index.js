const express = require('express');
const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;
const app = express();
const port = process.env.PORT || 3000;
const dbUrl = "mongodb://127.0.0.1:27017/";

app.use(express.json());

app.get("/", async (req, res) => {
    try {

        let client = await mongoClient.connect(dbUrl);
        let db = client.db("studentDetails");
        let result = await db.collection("user").find().toArray();
        res.status(200).json({ result });
        client.close();
    }
    catch (error) {
        console.log(error);
        res.send(500);
    }
})



app.post("/add-user", async (req, res) => {
    try {

        let client = await mongoClient.connect(dbUrl);
        let db = client.db("studentDetails");
        let result = await db.collection("user").insertOne(req.body);
        res.status(200).json({ "message": "record inserted", result });
        client.close();
    }
    catch (error) {
        console.log(error);
        res.send(500);
    }
})




// app.post("/add-user/:id", async (req, res) => {
//     try {

//         let client = await mongoClient.connect(dbUrl);
//         let db = client.db("studentDetails");
//         let result = await db.collection("user").find({ _id: mongodb.ObjectId(req.params.id) }).toArray();
//         res.status(200).json({ result });
//         client.close();
//     }
//     catch (error) {
//         console.log(error);
//         res.send(500);
//     }
// })



app.listen(port, () => console.log("application is running on port 3000"));