const metascraper = require('metascraper')([
    require('metascraper-author')(),
    require('metascraper-date')(),
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-logo')(),
    require('metascraper-clearbit')(),
    require('metascraper-publisher')(),
    require('metascraper-title')(),
    require('metascraper-url')()
  ])
var metadata;  
const got = require('got')
// get metadata
exports.get = (req, res) => {
    console.log('***');
    getMetaData(req.query.uri).then((metadata)=>{
      res.status(200).send({
        success: 'true',
        message: 'metadata retrieved successfully',
        result: metadata
      })
    })
  }
  async function getMetaData(uri){
    const { body: html, url } = await got(uri)
    metadata = await metascraper({ html, url })
    console.log(metadata)
    return metadata;
  }