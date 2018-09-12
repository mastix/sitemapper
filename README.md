## Sitemap-parser

Insipired by https://github.com/hawaiianchimp/sitemapper

Allows loading of sitemap.xml.gz files.

// TODO badges
[![Build Status](https://travis-ci.org/cabbiepete/sitemapper.svg?branch=master)](https://travis-ci.org/cabbiepete/sitemapper) [![Monthly Downloads](https://img.shields.io/npm/dm/sitemapper.svg)](https://www.npmjs.com/package/sitemapper)
[![npm version](https://badge.fury.io/js/sitemapper.svg)](https://badge.fury.io/js/sitemapper)
[![dependencies Status](https://david-dm.org/cabbiepete/sitemapper/status.svg)](https://david-dm.org/cabbiepete/sitemapper)
[![Inline docs](http://inch-ci.org/github/cabbiepete/sitemapper.svg?branch=master)](http://inch-ci.org/github/cabbiepete/sitemapper)

Parse through a sitemaps xml to get all the urls for your crawler.
## Version 3

### Installation
```bash
npm install @cabbiepete/sitemapper
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