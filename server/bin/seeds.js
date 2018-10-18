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
    templates: "onlineService",
    author: "Raúl Martín",
    links: "https://github.com/robotic-amoeba/Euscite"
  },
  {
    templates: "onlineService",
    author: "Adrián Melián",
    links: "https://github.com/AdrianMelGon/Proyecto-Final"   
  },
  {
    templates: "onlineService",
    author: "Dennis R. Lema",
    links: "https://github.com/Blachlock/FamCall"   
  },
  {
    templates: "onlineService",
    author: "Cristian Tejedor",
    links: "https://github.com/FiboGuy/PetHealth"    
  },
  {
    templates: "onlineService",
    author: "Christian López & Teo Díaz",
    links: "https://github.com/You2se/YouChoose"    
  },
  {
    templates: "onlineService",
    author: "Laura Migueláñez",
    links: "https://github.com/lauramiguelanez/Scope"    
  },
  {
    templates: "onlineService",
    author: "Esperanza Amaya",
    links: "https://github.com/eamayag/IH-labs-3rd-project---ReadMe-"    
  },
  {
    templates: "socialNetwork",
    author: "Jacob Casado",
    links: "https://github.com/JacobCasado/Yayoo"
  },
  {
    templates: "socialNetwork",
    author: "Laura Corral",
    links: "https://github.com/Evenstarw1/MeetArt"
  },
  {
    templates: "socialNetwork",
    author: "Celia Arnelas",
    links: "https://github.com/Carnelas/BeGreen"
  },
  {
    templates: "socialNetwork",
    author: "Jhon Scarzo",
    links: "https://github.com/JScarzo/ConectArtT-React"
  },
  {
    templates: "onlineShop",
    author: "Alfonso Mateo",
    links: "https://github.com/FonRiego/BoardGameMarket" 
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