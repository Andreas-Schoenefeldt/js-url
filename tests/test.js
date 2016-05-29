'use strict';
require(['jquery', '../dist/url'], function($, URL) {
	
	var url = new URL('https://www.amazing.org/some/path/index.php?omahhung=karmapa#jump-link');
	var url2 = url.clone();
	
	$('#test-0').html('Current Url: <b>' + url.toString() + '</b><br/>Protocoll: ' + url.protocol + '<br/>Host: ' + url.host + '<br/>Path: ' + url.path + '<br/>Parameters: ' + url.getParameterString()  + '<br/>Hash: ' + url.hash);
	
	$('#test-1').html('Current Url: <b>' + url.toString() + '</b>');
	
	url.addParameters({format: 'ajax', amazing: 'awsome'});
	
	$('#test-2').html('Adding Parameters: <b>' + url.toString() + '</b>');
	
	url.addParameter('amazing', 'awsome !').removeParameter('format');
	
	$('#test-3').html('Parameter Override and Remove: <b>' + url.toString() + '</b>');
	
	$('#test-4').html('Clone: <b>' + url2.clone() + '</b>');
	
	$('#test-5').html('Compare: <b>' + url.toString() + ' is same url as https://www.amazing.org/some/path/index.php?omahhung=karmapa&amazing=awsome%20!#different-jump-link: ' + (url.isSameUrlAs(new URL('https://www.amazing.org/some/path/index.php?omahhung=karmapa&amazing=awsome%20!#different-jump-link')) ? '<span class="success">yes</span>' : '<span class="error">no</span>') + ' </b>');
});