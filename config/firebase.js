import * as admin from 'firebase-admin';

// Fetch the service account key JSON file contents
var serviceAccount = require("../myjson.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://paper-clip-8c79d-default-rtdb.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
exports.dataBaseRef = function(){
  return db;
}
// var ref = db.ref("paperclip/");
// var bookmarks = ref.child("bookmarks");
// bookmarks.push({
//     "author": null,
//     "date": null,
//     "description": "1,396 Followers, 1,497 Following, 179 Posts - See Instagram photos and videos from Krishna™ (@k4kittu)",
//     "image": "https://instagram.fmaa2-1.fna.fbcdn.net/vp/6c9e1ab7c02976477fede53e5400c4fe/5DB66D9F/t51.2885-19/s150x150/47490575_324337661741354_9173399787423137792_n.jpg?_nc_ht=instagram.fmaa2-1.fna.fbcdn.net",
//     "logo": "https://logo.clearbit.com/instagram.com",
//     "publisher": "Instagram",
//     "title": "Krishna™ (@k4kittu)",
//     "url": "https://www.instagram.com/k4kittu/",
//   });
// var users = ref.child("users");
// users.push({
//     "name":"Bharath Bandaru",
//     "email":"bharathbandaru5@gmail.com"
// });
// var usersBookMarks = ref.child("user-bookmarks");
// usersBookMarks.push({
//   "email":"bharathbandaru5@gmail.com",
//   "url":"https://www.instagram.com/k4kittu/?hl=en",
//   "tag":"social"
// });