const mongoose = require('mongoose')
const { db } = require("../configuration");
module.exports.connectDb = () => {
    mongoose.connect(db)
    .then(()=>{
        console.log("Database connection successful.");
     })
     .catch((err)=>{
        console.log(`Database connection error: ${err}`);
     });
 
    return mongoose.connection;
}