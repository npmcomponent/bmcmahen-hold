
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
