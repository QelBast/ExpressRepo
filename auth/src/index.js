const express = require('express');
const axios = require("axios")
const { connectDb } = require("./helpers/db")
const { host, port, db, apiUrl, mailerUrl } = require("./configuration");
//const bodyParser = require('body-parser');
const app = express();

const startServer = () => {
    app.listen(port, async () => {
        console.log(`Started auth service on port: ${port}`)
        console.log(`Host: ${host}`)
        console.log(`Our database: ${db}`);
    });
}

app.get('/test', (req, res) => {
    res.send('Our auth server is working correctly')
});

app.get('/testwithapidata', (req, res) => {
    axios.get(apiUrl + '/testapidata').then(response => {
        res.json({
            testapidata: response.data.testwithapi
        })
    })
})

app.get("/api/currentUser", (req, res) => {
    res.json({
        id: "1234",
        email: "foo@gmail.com"
    });
});

app.use(express.json());

app.post("/register", (req, res) => {
    console.log("registerAuthServTest...")
    console.log("req body: ", req.body);
    console.log("url: ", mailerUrl)
    axios.post(mailerUrl + '/sendAcceptRegisterMail', req.body).then(response => {
        console.log(response.data);
        res.json(response.data);
        console.log(res.json);
    });
});

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once("open", startServer);