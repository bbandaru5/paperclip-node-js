import express from 'express';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
const config = require('./config/env.config');
const bodyParser = require('body-parser');
const router = require('./config/routes.config');
// Set up the express app
const app = express();
app.use(bodyParser.json());
router.routesConfig(app);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
      return res.send(200);
  } else {
      return next();
  }
});
var firebaseConfig = {
  apiKey: "AIzaSyAgU3rHz8XZoS90SPkd1RenefFUcCENn84",
  authDomain: "paperclip-285b4.firebaseapp.com",
  databaseURL: "https://paperclip-285b4.firebaseio.com",
  projectId: "paperclip-285b4",
  storageBucket: "",
  messagingSenderId: "601943420032",
  appId: "1:601943420032:web:c20e3fe52c936dda"};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

var database = firebase.database();

// // create user 
// app.get('/api/v1/sign-up', (req, res) => {
//   createUser().then((data)=>{
//     res.status(200).send({
//       success: 'true',
//       message: 'data retrieved successfully',
//       result: data
//     })
//   })
// })

// function createUser(email, password){
//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });
// }
// // get data from db
// app.get('/api/v1/get-all-bookmarks', (req, res) => {
//   getAllBookMarks().then((data)=>{
//     res.status(200).send({
//       success: 'true',
//       message: 'data retrieved successfully',
//       result: data
//     })
//   })
// })

// function getAllBookMarks(){
// return firebase.database().ref('/bookmarks').once('value').then(function(snapshot) {
//   console.log(snapshot);
// });
// }
app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`)
});