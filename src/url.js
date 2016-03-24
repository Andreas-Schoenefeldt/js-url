'use strict';
// The Url class
// if it is initialised without an url parameter, it will take the current URL

define(function(){
	
	var URL = function(url){
		
		// mnification optimizations - can we break 1kb?
		var PATHNAME = 'pathname',
			PARAMETERS = 'parameters',
		  	BASE_URL = 'baseURL',
			URL_BODY = 'urlBody',
			HASH = 'hash',
		
			that = this
		;
		
		if (! url) url = window.location.href;
		url = url.replace(/\+/gi, ' '); // replace + with a ' '
		
		that[PARAMETERS] = {};
		that[BASE_URL] = url;
		
		// get the hash
		var split = url.split('#');
		that[HASH] = (split.length > 1) ? split[1] : null;
		
		// get the body
		split = split[0].split('?');
		that[URL_BODY] = split[0];
		
		// split the parameters
		if (split.length > 1) {
		
			var params = split[1].split('&');
			var cLen = params.length;
			for(var cnt = 0; cLen--; cnt++) {
				var cStr = new String(params[cnt]).split('=');
				that[PARAMETERS][cStr[0]] = decodeURIComponent(cStr[1]);
			}
		}
		
		split = that[URL_BODY].split('/');

		that.isRelative = split[0].substr(0,4) != 'http';
		
		that.protocol = that.isRelative ? window.location.protocol : split.shift();
		if(! that.isRelative) split.shift(); // getting rid of the empty entry in the array
		that.host = that.isRelative ? window.location.host : split.shift(); 
		that[PATHNAME] = split.join('/');
		if (! that[PATHNAME].substr(0,1) == '/') that[PATHNAME] = '/' + that[PATHNAME];
		
		
		that.setHash = function(newHash) { that[HASH] = newHash; return that; };
		that.getHash = function() { return that[HASH]; };
		
		that.hasParameters = function(){
			for (var p in that[PARAMETERS] ){
				if (p) return true;
			}
			return false;
		};
		
		that.hasParameter = function(pName){
			return (that[PARAMETERS][pName]) ? true : false;
		};
		
		that.getParameter = function(pName, defaultValue){
			return that[PARAMETERS][pName] ? that[PARAMETERS][pName] : defaultValue ;
		};
		
		that.addParameter = function (name, value) {
			
			if (name && value ) {
				that[PARAMETERS][name] = value;
			}
			return that;
		};
		
		that.addParameters = function (parameterMap) {
			for (var param in parameterMap){
				that.addParameter(param, parameterMap[param]);
			}
			return that;
		};
		
		that.removeParameter = function(name){
			delete that[PARAMETERS][name];
			return that;
		};
		
		that.makeRelative = function(){ // throws away the host and the protocoll and also index.html, if it is in the end
			
			if (that[URL_BODY].substr(0,4) == 'http') {
				that[URL_BODY] = that[URL_BODY].replace(/^(?:\/\/|[^\/]+)*\//, "/");
			}
			
			that[URL_BODY] = that[URL_BODY].replace('index.html', ''); // remove the index.html, because it should never appear in the menu bar
			// that[HASH] = null; 
			
			return that;
		};

		that.appendToPath = function(append){

			if (that[URL_BODY].slice(-1) != '/') append = '/' + append;

			that[URL_BODY] += append;
			that[PATHNAME] += append;
			return that;
		};
		
		that.isInternalURL = function(){
			return window.location.host == that.host;
		};
		
		that.clone = function(){
			return new URL(that.toString());
		};
		
		// Creates a proper URL String expression of this object
		//
		//@param excludeHash : Boolean		Weather the Hash should be part of the url string or not
		that.toString = function(excludeHash) {
			var url = that[URL_BODY];
			
			if (that.hasParameters()){
				var first = true, p;
				for (p in that[PARAMETERS]){
					url += (first) ? '?' : '&';
					url += p + '=' + encodeURIComponent(that[PARAMETERS][p]);
					first = false;
				}
			}
			
			if (!excludeHash && that[HASH]) {
				url += '#' + that[HASH];
			}
			
			return url;
		};
		
	};
	
	return URL;
});