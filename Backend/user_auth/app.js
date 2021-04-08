const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

// singup part through database.
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/signup', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

let signupModel = require('./userschema');

console.log(signupModel,"signupModel");


db.on('error',function(err,data){
    console.log("mongoDb Not Connected.");
});
db.on('open',function(err,data){
    console.log("MongoDb Connected.");
});



// user authentications part through manual.

app.use(express.json())

const users = []

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = { name: req.body.name, email:req.body.email, password: hashedPassword }
    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})

app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.name === req.body.name)
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})

app.listen(5000 , (err,flag)=>{
    if(err){
        console.log("server not connected.");
        return;
    }
    console.log("server connected with port no 5000");
});