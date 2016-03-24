'use strict';
require(['jquery', '../dist/url'], function($, URL) {
	
	var url = new URL('https://amazing.org/some/path/index.php#jump-link');
	var url2 = url.clone();
	
	$('#test-1').html('Current Url: <b>' + url.toString() + '</b>');
	
	url.addParameters({format: 'ajax', amazing: 'awsome'});
	
	$('#test-2').html('Adding Parameters: <b>' + url.toString() + '</b>');
	
	url.addParameter('amazing', 'awsome !').removeParameter('format');
	
	$('#test-3').html('Parameter Override and Remove: <b>' + url.toString() + '</b>');
	
	$('#test-4').html('Clone: <b>' + url2.clone() + '</b>');
});