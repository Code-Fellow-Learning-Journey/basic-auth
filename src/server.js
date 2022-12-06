'use strict';

// 3rd Party Resources
const express = require('express');
const signUpRouter = require('../routes/signup');
const signInRouter = require('../routes/signin');


// NOTE: connected to sqlite::memory out of box for proof of life
// TODO:
// connect postgres for local dev environment and prod
// handle SSL requirements
// connect with sqlite::memory for testing
//const DATABASE_URL = 'sqlite:memory';

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// const sequelize = new Sequelize(DATABASE_URL);

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// Create a Sequelize model


// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo
//
app.use(signUpRouter);
app.use(signInRouter);


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
// app.post('/signin', middleware, async (req, res) => {
//   res.status(200).send(req.user);
// });

// make sure our tables are created, start up the HTTP server.
// sequelize.sync()
//   .then(() => {
//     app.listen(3000, () => console.log('server up'));
//   }).catch(e => {
//     console.error('Could not start server', e.message);
//   });


module.exports = {
  app,
  start: (PORT) => app.listen(PORT, console.log('server running on port', PORT)),

};
