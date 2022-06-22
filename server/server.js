const express = require('express');
const routes = require('./routes')
const app = express();
var cors = require('cors')
app.use(cors())


app.use(express.json());
app.use('/api',routes)


const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log('Server is Running on port',port)
})