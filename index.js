var events = require('component-events');

module.exports = Hold;

/**
 * Hold Constructor
 * @param {DOM}   el
 * @param {Function} fn
 */

function Hold(el, fn){
  if (!(this instanceof Hold)) return new Hold(el, fn);
  this.el = el;
  this.fn = fn || function() {};
  this.events = events(this.el, this);
  this.events.bind('mousedown', 'ontouchstart');
  this.events.bind('mouseup', 'ontouchend');
  this.events.bind('touchstart');
  this.events.bind('touchend');
}

// consider making 'touchleave' its own module.
Hold.prototype.bindLeave = function(){
  this.events.bind('mouseout', 'ontouchend');
  this.events.bind('touchmove');
};

Hold.prototype.unbindLeave = function(){
  this.events.unbind('mouseleave', 'ontouchend');
  this.events.unbind('touchmove');
}

Hold.prototype.ontouchmove = function(e){
  var touch = e.touches[0];
  var element = document.elementFromPoint(touch.pageX, touch.pageY);
  if (element !== this.el) {
    this.ontouchend();
  }
};

Hold.prototype.ontouchstart = function(e){
  e.preventDefault();
  this.bindLeave();
  var self = this;
  this.timeout = setTimeout(function(){
    self.fn(e);
  }, 800);
};

Hold.prototype.ontouchend = function(e){
  clearTimeout(this.timeout);
  this.unbindLeave();
};

Hold.prototype.unbind = function(){
  this.events.unbind();
};