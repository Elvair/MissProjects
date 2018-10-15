// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Project = require ("../models/Project");
const Comments = require ("../models/Comments");
const Rate = require ("../models/Rate");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "mariquilla",
    password: bcrypt.hashSync("mariquilla", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "demiurgo",
    password: bcrypt.hashSync("demiurgo", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "arsenico",
    password: bcrypt.hashSync("arsenico", bcrypt.genSaltSync(bcryptSalt)),
  }
]

let projects = [
  {
    templates: "searcher",
    code: `
    <h1 style=background-color:red;>Searcher</h1>
    <p>Hola Giorgio<p>
    `
    
  },
  {
    templates: "onlineService",
    code: "<h1>Online Service</h1>"
    
  },
  {
    templates: "socialNetwork",
    code: "<h1>Social Network</h1>"
    
  },
  {
    templates: "onlineShop",
    code: "<h1>Online Shop</h1>"
    
  }
]

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
Project.deleteMany()
.then(() => {
  return Project.create(projects)
})
.then(projectCreated => {
  console.log(`${projectCreated.length} users created with the following id:`);
  console.log(projectCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})