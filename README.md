ShowOnScroll 
============

A client side module using jQuery to initially hide selected elements and then reveal them when scrolled over. 
Multiple different elements can be passed.
Using CSS transitions that can be modified from the module's settings.
Use with Browserify for client side.

## Installation

```shell
  npm install showonscroll --save
```

## Usage

```js
  var showonscroll = require('showonscroll'),
      showscroll = new showonscroll;
      //set the transition options:
      showscroll.transition.delay = '0.5s'; //default is '0'
      showscroll.transition.duration = '1s'; //default is '0.5s'
      showscroll.transition.timing = 'ease'; //default is 'linear'

  var elems = $('.elems'),
      other = $('.something-else'),
      third = $('.third-elem');

  showscroll.run(elems, other, third);
```

## Tests

Tests are handled in the browser - please go to test/index.html.

## Release History

* 0.1.0 Initial release