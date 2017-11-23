/*! js-handy-url - v1.0.5 - 2017-11-22 
 *  Provides basic url handling and allows to simply work with urls without juggling all the time with regular expressions. If the class is initialised without an url parameter, it will take the current URL.
 */
!function(a,b){"use strict";"object"==typeof module&&module.exports?module.exports=b():"function"==typeof define&&define.amd?define([],b):a.URL=b()}(this,function(){var a=function(b){var c,d="path",e="parameters",f="baseURL",g="urlBody",h="hash",i="host",j="protocol",k=this,l=function(){var a,b,c=[],d={};for(a in k[e])c.push(a);for(c.sort(),b=0;b<c.length;b++)a=c[b],d[a]=k[e][a];return k[e]=d,k};b||(b="undefined"!=typeof window?window.location.href:""),b=b.replace(/\+/gi," "),k[e]={},k[f]=b;var m=b.split("#");if(k[h]=m.length>1?m[1]:null,m=m[0].split("?"),k[g]=m[0],m.length>1){for(var n=m[1].split("&"),o=n.length,p=0;o--;p++){var q=new String(n[p]).split("=");k[e][q[0]]=decodeURIComponent(q[1])}l()}m=k[g].split("/"),c="http"!==m[0].substr(0,4),k[j]=c?"undefined"!=typeof window?window.location[j]:"http":m.shift().replace(":",""),c||m.shift(),k[i]=c?"undefined"!=typeof window?window.location[i]:"localhost":m.shift(),k[d]=m.join("/"),c||"/"===k[d].substr(0,1)||(k[d]="/"+k[d]),k.setHash=function(a){return k[h]=a,k},k.getHash=function(){return k[h]},k.hasParameters=function(){for(var a in k[e])if(a)return!0;return!1},k.hasParameter=function(a){return!!k[e][a]},k.getParameter=function(a,b){return k[e][a]?k[e][a]:b},k.addParameter=function(a,b){if(a&&b){var c=void 0===k[e][a];k[e][a]=b,c&&l()}return k},k.addParameters=function(a){for(var b in a)k.addParameter(b,a[b]);return k},k.removeParameter=function(a){return delete k[e][a],k},k.makeRelative=function(){return c||(k[g]=k[g].replace(/^(?:\/\/|[^\/]+)*\//,"/"),c=!0),k[g]=k[g].replace("index.html",""),k},k.makeAbsolute=function(){return c&&(k[g]=k[j]+"://"+k[i]+("/"!=k[g].slice(-1)?"/":"")+k[g],c=!1),k},k.appendToPath=function(a){return"/"!=k[g].slice(-1)&&(a="/"+a),k[g]+=a,k[d]+=a,k},k.isInternalURL=function(){return("undefined"!=typeof window?window.location.host:"")===k[i]},k.clone=function(){return new a(k.toString())},k.isSameUrlAs=function(a){return!(!a||k[i]!=a[i]||k[d]!=a[d]||k.getParameterString()!=a.getParameterString())},k.getParameterString=function(){var a,b=[];for(a in k[e])b.push(a+"="+encodeURIComponent(k[e][a]));return b.join("&")},k.toString=function(a){var b=k[g];return k.hasParameters()&&(b+="?"+k.getParameterString()),!a&&k[h]&&(b+="#"+k[h]),b}};return a});