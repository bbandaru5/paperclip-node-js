//contorller for Metadata
var metadataService = require('../service/metadata')

exports.get = async(req, res) => {
    console.log('In metadacontroller');
    const metadata = await metadataService.getMetaData(req.query.uri).then(metadata);
    res.status(200).send({
      success: 'true',
      message: 'metadata retrieved successfully',
      result: metadata
    })
}
 