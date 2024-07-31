const express = require('express');
const mongoose = require("mongoose")
const axios = require("axios")
const { connectDb } = require("./helpers/db")
const { host, port, db, authApiUrl } = require("./configuration");
const app = express();
const postSchema = new mongoose.Schema({
    name: String
});
const Post = mongoose.model('Post', postSchema);

const startServer = () => {
    app.listen(port, async () => {
        console.log(`Started api service on port: ${port}`)
        console.log(`Host: ${host}`)
        console.log(`Our database: ${db}`)
        
        //const posts = await Post.find();
        //console.log("posts", posts);

        const silence = new Post({ name: "Silence"});
        await silence.save();

        //console.log("posts", await Post.find());
        
    });
}

app.get('/test', (req, res) => {
    res.send('Our api server is working correctly')
});

app.get('/api/testapidata', (req, res) => {
    res.json({
        testwithapi: true
    });
});

app.get("/testwithcurrentuser", (req, res) => {
    axios.get(authApiUrl + '/currentUser').then(response => {
        res.json({
            testwithcurrentuser: true,
            currentUserFromAuth: response.data
        });
    })
    
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once("open", startServer);