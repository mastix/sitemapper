## Sitemapper - Extended version

This is a fork from https://github.com/cabbiepete/sitemapper, but adds the following features:

* Allows loading of sitemap.xml.gz files
* Increases default timeout
* Allows to filter by lastmod date

### Original description

Parse through a sitemaps xml to get all the urls for your crawler.
## Version 3

### Installation
```bash
npm install @mastixmc/sitemapper
```

### Simple Example
```javascript
const Sitemapper = require('sitemapper');

const sitemap = new Sitemapper();

sitemap.fetch('http://wp.seantburke.com/sitemap.xml').then(function(sites) {
  console.log(sites);
});

```

### Examples in ES5
```javascript
const Sitemapper = require('sitemapper');

const Google = new Sitemapper({
  url: 'https://www.google.com/work/sitemap.xml',
  timeout: 15000 //15 seconds
});

Google.fetch()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });


// or


const sitemap = new Sitemapper();

sitemapper.timeout = 5000;
sitemapper.fetch('http://wp.seantburke.com/sitemap.xml')
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

```

### Examples in ES6
```javascript
import Sitemapper from 'sitemapper';

const Google = new Sitemapper({
  url: 'https://www.google.com/work/sitemap.xml',
  timeout: 15000, // 15 seconds
});

Google.fetch()
  .then(data => console.log(data.sites))
  .catch(error => console.log(error));


// or


const sitemapper = new Sitemapper();
sitemapper.timeout = 5000;

sitemapper.fetch('http://wp.seantburke.com/sitemap.xml')
  .then(({ url, sites }) => console.log(`url:${url}`, 'sites:', sites))
  .catch(error => console.log(error));
```