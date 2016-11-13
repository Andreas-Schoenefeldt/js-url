# js-url
Provides basic url handling and allows to simply work with urls without juggling all the time with regular expressions. If the class is initialised without an url parameter, it will take the current URL.

## installation

```
bower install -S js-url
```

## usage

You can simply use it like this:

```js
define(['js-url'], function(URL)) {

  var url = new URL(); // the current url 
  
  
  // do something without regex hassle
  url.addParameter('new', 'paramvalue');
  
  url.removeParamter('old');
  
  ....
  
  
  // use it in the end as a plain string:
  var urlstring = url.toString();
  
}
