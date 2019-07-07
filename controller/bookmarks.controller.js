var fb = require('../config/firebase')
exports.getBookMarks = (req, res) => {
  console.log('getBookMarks');
  var db = fb.dataBaseRef();
  var ref = db.ref("paperclip/bookmarks");
  ref.once("value", function(snapshot) {
    console.log(snapshot.val());
    res.status(200).send({
      success: 'true',
      message: 'metadata retrieved successfully',
      result: snapshot.val()
    })
  });
};
exports.saveBookMarks = (req,res)=>{
  console.log('saveBookMarks');
  var db = fb.dataBaseRef();
}