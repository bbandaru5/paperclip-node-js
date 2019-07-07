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
exports.saveBookMarks = async(req,res)=>{
  console.log('saveBookMarks');
  var db = fb.dataBaseRef();
  var ref = db.ref("paperclip/");
  var bookmarks = ref.child("bookmarks");
  var metadataService = require('../service/metadata')
  const metadata = await metadataService.getMetaData(req.body.url).then(metadata);
  console.log("2324"+metadata);
  const bookMarkId = bookmarks.push(metadata).getKey();
  var userBookMark = ref.child("user-bookmarks");
  userBookMark.push({
    "bookMarkId": bookMarkId+"",
    "url": req.body.url,
    "tag": req.body.tag,
    "userId": req.body.user
  })
  res.status(200).send({
    success: 'true',
    message: 'metadata saved successfully'
  })
}