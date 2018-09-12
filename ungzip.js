const zlib = require('zlib')

//const fs = require('fs')

//const file = fs.readFileSync('./slideshow.xml.gz');
//const unzipped = zlib.gunzipSync(file);
//console.log(unzipped.toString());

const sitemapUrl = 'https://www.drugs.com/sitemaps/slideshow.xml.gz';

const request = require('request');
const { Writable } = require('stream');

const downloadGzippedSiteMap = (url) => (  
  new Promise((resolve, reject) => {
    let unzipped = '';
    const out = new Writable({
      write(chunk, encoding, callback) {
        unzipped += chunk;
        callback();
      },
    });
    request(url).pipe(zlib.createGunzip()).pipe(out);
    setTimeout(() => {
      resolve(unzipped);
    }, 1000);
  })
);

downloadGzippedSiteMap(sitemapUrl)
  .then(output => {
    console.log('output');
    console.log(output);
  });
/*

const requestPromise = require('request-promise');

const requestOptions = {
  method: 'GET',
  uri: url,
  resolveWithFullResponse: false,
  gzip: true
};

requestPromise(requestOptions)
  .then((response) => {
    if (!response || response.statusCode !== 200) {
      clearTimeout(this.timeoutTable[url]);
      return console.log({ error: response.error, data: response });
    }
    if (url.endsWith('.gz')) {
      console.log('endswith .gz');
      //console.log(response.body);
      const bodyAsString = response.body.toString();
      console.log('bodyAsString');
      console.log(bodyAsString);
      try {
        const unzipped = zlib.gunzipSync(bodyAsString).toString();
        console.log('unzipped: ', unzipped);
        return unzipped;
      } catch (e) {
        console.log('error gunzipSync: ', e.toString());
        return '';
      }
    }
    return response.body;
  })
  .then(body => xmlParse(body))
  .then(data => console.log({ error: null, data }))
  .catch(response => console.log({ error: response.error, data: {} }));
*/