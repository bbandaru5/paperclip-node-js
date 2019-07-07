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
async function getMetaDataAsync(uri){
    const { body: html, url } = await got(uri)
    metadata = await metascraper({ html, url })
    return metadata;
}
// exports.getMetaData = function(uri){
//     var initializePromise = getMetaDataAsync(uri);
//     initializePromise.then(function(metaDataContent){
//         metadata = metaDataContent;
//         console.log(metadata);
//         return metadata;
//     });
// }

exports.getMetaData = async(uri) => {
    console.log('***'); 
    const meta = await getMetaDataAsync(uri);
    console.log(meta);
    return meta;
  }