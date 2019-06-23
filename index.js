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

const got = require('got')

const targetUrl = 'https://www.youtube.com/watch?v=mqWXRX5fxGQ'
const metadata = (async () => {
  const { body: html, url } = await got(targetUrl)
  const metadata1 = await metascraper({ html, url })
  console.log(metadata1)
})();

export default metadata;