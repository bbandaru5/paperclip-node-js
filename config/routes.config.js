
const UsersController = require('../controller/users.controller');
const MetaDataController = require('../controller/metadata.controller')
const BookMarksController = require('../controller/bookmarks.controller')
const config = require('./env.config')
const contextPath = config.contextPath;
exports.routesConfig = function (app) {
    app.post('/users', [
        UsersController.insert
    ]);
    app.get('/get-bookmarks', [
        BookMarksController.getBookMarks
    ]);
    app.post('/save-bookmarks', [
        BookMarksController.saveBookMarks
    ]);
    app.get('/get-meta-data',[
        MetaDataController.get
    ]);
};