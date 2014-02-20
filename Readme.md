*This repository is a mirror of the [component](http://component.io) module [bmcmahen/hold](http://github.com/bmcmahen/hold). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/bmcmahen-hold`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# hold

  A hold event for touch and the mouse.

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/hold

## Example

```javascript
var hold = require('hold');
var el = document.getElementById('btn');
hold(el, function(e){
	console.log('something held.');
});

hold.unbind();
```


## License

  MIT
