/* global describe,it */
import assert from 'assert';
import should from 'should';
import isUrl from 'is-url';

import Sitemapper from '../main'
let sitemapper;

describe('Sitemapper', () => {

  beforeEach(() => {
    sitemapper = new Sitemapper();
  });

  describe('Sitemapper Class', () => {

    it('should have initializeTimeout method', () => {
      sitemapper.initializeTimeout.should.be.Function;
    });

    it('should have crawl method', () => {
      sitemapper.crawl.should.be.Function;
    });

    it('should have parse method', () => {
      sitemapper.parse.should.be.Function;
    });

    it('should have fetch method', () => {
      sitemapper.fetch.should.be.Function;
    });

    it('should contruct with a url', () => {
      sitemapper = new Sitemapper({
        url: 'google.com',
      });
      sitemapper.url.should.equal('google.com');
    });

    it('should contruct with a timeout', () => {
      sitemapper = new Sitemapper({
        timeout: 1000,
      });
      sitemapper.timeout.should.equal(1000);
    });

    it('should set timeout', () => {
      sitemapper.timeout = 1000;
      sitemapper.timeout.should.equal(1000);
    });

    it('should set url', () => {
      sitemapper.url = 1000;
      sitemapper.url.should.equal(1000);
    });
  });

  describe('fetch Method resolves sites to array', () => {
    it('http://wp.seantburke.com/sitemap.xml sitemaps should be an array', (done) => {
      
      const url = 'http://wp.seantburke.com/sitemap.xml';
      sitemapper.fetch(url)
        .then(data => {
          data.sites.should.be.Array;
          data.url.should.equal(url);
          data.sites.length.should.be.above(2, "Should have been more than 2 sites");
          isUrl(data.sites[0]).should.be.true;
          done();
        })
        .catch(done);
    });

    it('giberish.giberish should fail silently with an empty array', (done) => {
      
      const url = 'http://giberish.giberish';
      sitemapper.fetch(url)
        .then(data => {
          data.sites.should.be.Array;
          done();
        })
        .catch(done);
    });

    it('https://www.google.com/work/sitemap.xml sitemaps should be an array', (done) => {
      
      const url = 'https://www.google.com/work/sitemap.xml';
      sitemapper.fetch(url)
        .then(data => {
          data.sites.should.be.Array;
          data.url.should.equal(url);
          data.sites.length.should.be.above(1);
          isUrl(data.sites[0]).should.be.true;
          done();
        })
        .catch(done);
    });

    it('https://www.drugs.com/sitemaps/slideshow.xml.gz sitemaps should handle gzipped files', (done) => {
      
      const url = 'https://www.drugs.com/sitemaps/slideshow.xml.gz';
      sitemapper.timeout = 8000;
      sitemapper.fetch(url)
        .then(data => {
          data.sites.should.be.Array;
          data.url.should.equal(url);
          data.sites.length.should.be.above(2, "Should have been more than 2 sites");
          isUrl(data.sites[0]).should.be.true;
          done();
        })
        .catch(done);
    });

  });

  describe('getSites method', () => {
    it('getSites should be backwards compatible', (done) => {
      
      const url = 'http://wp.seantburke.com/sitemap.xml';
      sitemapper.getSites(url, (err, sites) => {
        sites.should.be.Array;
        isUrl(sites[0]).should.be.true;
        done();
      });
    });
  });
});
