require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const { DBURL } = process.env;
mongoose.Promise = Promise;
mongoose
  .connect(DBURL)
  .then(() => {
    console.log(`Connected to Mongo on ${DBURL}`)
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
var whitelist = [
  'http://localhost:3000' //localhost:3000 puede hacer peticiones
];
var corsOptions = {
  origin: function(origin, callback){
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// Express View engine setup



app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2419200000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport')(app);


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const api = require('./routes/index');

app.use('/',api);

const authRouter = require('./routes/auth');
const projectTemplateRouter = require('./routes/projectTemplate');
const searchRouter = require ('./routes/searchBack');

app.use('/api/auth', authRouter);
app.use('/projectTemplate',projectTemplateRouter);
app.use('/search', searchRouter);

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
   res.sendFile(__dirname + "/public/index.html");
  });

module.exports = app;