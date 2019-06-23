
const UsersController = require('../controller/users.controller');
const MetaDataController = require('../controller/metadata.controller')
const config = require('./env.config')
const contextPath = config.contextPath;
exports.routesConfig = function (app) {
    console.log('**');
    app.post(contextPath + '/users', [
        UsersController.insert
    ]);
    app.get('api/v1/get-meta-data',[
        MetaDataController.get
    ]);
};