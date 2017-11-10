'use strict';

const expect = require('chai').expect;
const assert = require('assert');
const URL = require('../src/url');

var url = new URL('https://www.amazing.org/some/path/index.php?omahhung=karmapa#jump-link');

// run the test
describe('URL API', function () {

    it('should be split into correct parts', function() {
        assert.equal('/some/path/index.php', url.path);
        assert.equal('https', url.protocol);
        assert.equal('jump-link', url.hash);
        assert.equal('www.amazing.org', url.host);
    });

    it('should not alter relativ urls', function() {
        var url2 = new URL('some/path/index.php?karmapa=om');
        var url3 = new URL('/some/path/index.php?karmapa=om');
        assert.equal('some/path/index.php', url2.path);
        assert.equal('/some/path/index.php', url3.path);
    });

    it('should take parameters', function() {
        url.addParameters({format: 'ajax', amazing: 'awsome'});

        assert.equal('ajax', url.getParameter('format'));
        assert.equal('awsome', url.getParameter('amazing'));

        assert.equal('https://www.amazing.org/some/path/index.php?amazing=awsome&format=ajax&omahhung=karmapa#jump-link', url.toString());
    });

    it('should remove and override parameters', function() {
        url.addParameter('amazing', 'awsome !').removeParameter('format');

        assert.equal(null, url.getParameter('format'));
        assert.equal('awsome !', url.getParameter('amazing'));

        assert.equal('https://www.amazing.org/some/path/index.php?amazing=awsome%20!&omahhung=karmapa#jump-link', url.toString());
    });

    it('should compare without taking the hash into account', function() {
        assert.equal(true, url.isSameUrlAs(new URL('https://www.amazing.org/some/path/index.php?omahhung=karmapa&amazing=awsome%20!#different-jump-link')));
    })

});

