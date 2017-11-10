/*! js-handy-url - v1.0.5 - 2017-11-10 
 *  Provides basic url handling and allows to simply work with urls without juggling all the time with regular expressions. If the class is initialised without an url parameter, it will take the current URL.
 */
!function(a,b){"use strict";"object"==typeof module&&module.exports?module.exports=b():"function"==typeof define&&define.amd?define([],b):a.URL=b()}(this,function(){var a=function(b){var c="path",d="parameters",e="baseURL",f="urlBody",g="hash",h="host",i=this,j=function(){var a,b,c=[],e={};for(a in i[d])c.push(a);for(c.sort(),b=0;b<c.length;b++)a=c[b],e[a]=i[d][a];return i[d]=e,i};b||(b="undefined"!=typeof window?window.location.href:""),b=b.replace(/\+/gi," "),i[d]={},i[e]=b;var k=b.split("#");if(i[g]=k.length>1?k[1]:null,k=k[0].split("?"),i[f]=k[0],k.length>1){for(var l=k[1].split("&"),m=l.length,n=0;m--;n++){var o=new String(l[n]).split("=");i[d][o[0]]=decodeURIComponent(o[1])}j()}k=i[f].split("/"),i.isRelative="http"!==k[0].substr(0,4),i.protocol=i.isRelative?"undefined"!=typeof window?window.location.protocol:"":k.shift().replace(":",""),i.isRelative||k.shift(),i[h]=i.isRelative?"undefined"!=typeof window?window.location[h]:"":k.shift(),i[c]=k.join("/"),i.isRelative||"/"===i[c].substr(0,1)||(i[c]="/"+i[c]),i.setHash=function(a){return i[g]=a,i},i.getHash=function(){return i[g]},i.hasParameters=function(){for(var a in i[d])if(a)return!0;return!1},i.hasParameter=function(a){return!!i[d][a]},i.getParameter=function(a,b){return i[d][a]?i[d][a]:b},i.addParameter=function(a,b){if(a&&b){var c=void 0===i[d][a];i[d][a]=b,c&&j()}return i},i.addParameters=function(a){for(var b in a)i.addParameter(b,a[b]);return i},i.removeParameter=function(a){return delete i[d][a],i},i.makeRelative=function(){return"http"==i[f].substr(0,4)&&(i[f]=i[f].replace(/^(?:\/\/|[^\/]+)*\//,"/")),i[f]=i[f].replace("index.html",""),i},i.appendToPath=function(a){return"/"!=i[f].slice(-1)&&(a="/"+a),i[f]+=a,i[c]+=a,i},i.isInternalURL=function(){return("undefined"!=typeof window?window.location.host:"")===i[h]},i.clone=function(){return new a(i.toString())},i.isSameUrlAs=function(a){return!(!a||i[h]!=a[h]||i[c]!=a[c]||i.getParameterString()!=a.getParameterString())},i.getParameterString=function(){var a,b=[];for(a in i[d])b.push(a+"="+encodeURIComponent(i[d][a]));return b.join("&")},i.toString=function(a){var b=i[f];return i.hasParameters()&&(b+="?"+i.getParameterString()),!a&&i[g]&&(b+="#"+i[g]),b}};return a});