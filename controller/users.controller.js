const crypto = require('crypto');

exports.insert = (req, res) => {
    console.log('dsds');
    res.status(200).send({
        success: 'true',
        message: 'Retrieved Succesfully',
        result: 'true'
      })
};