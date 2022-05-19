require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// require("./db/conn");
const mongoData = process.env.DATABASE_URL;
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = 4000;

mongoose.connect(mongoData,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error) => console.log(error.message)) ;

const database = mongoose.connection;

database.on('error',(error)=>{
  console.log(error);
})

database.once('connected', ()=>{
  console.log("Database Connected!");
})

app.use(cors());
app.use(express.json());


app.use("/api",router);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});