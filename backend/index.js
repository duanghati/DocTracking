const express = require('express')
const bodyParser = require('body-parser')
const db = require('./models')
const userService = require('./service/user')
const cors = require('cors')
const addpageService = require('./service/addpage')
const tableaddpageService = require ('./service/tableaddpage')
const addpageDetailService = require('./service/addpageDetail')
const app = express()

// import passport
const passport = require('passport')

// use the strategy
app.use(passport.initialize())
app.use(cors())
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// import config of passport
require('./config/passport')

db.sequelize.sync({ force: false }).then(() => {
  userService(app, db);
  addpageService(app,db);
  tableaddpageService(app,db);
  addpageDetailService(app,db)
  
  app.listen(8081, () => console.log("Server is running on port 8081"))
})