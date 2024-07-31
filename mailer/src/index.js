const express = require('express');
const axios = require("axios");
const { port } = require("./configuration");
const app = express();

app.listen(port, async () => {
    console.log(`Started auth service on port: ${port}`)
});

app.use(express.json());

app.post("/api/sendAcceptRegisterMail", (req, res) => {
    console.log(req.body)

    //sending message logic or to third-party
    res.json({
        status: "success"
    });
    
});
app.get("/testget", (req, res) => {
    res.json({
        test: "lalalalal"
    })
    
});
