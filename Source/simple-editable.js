/*
---

script: SimpleEditable.js

name: SimpleEditable

description: A simple way to create in place editing fields with Mootools.

license: MIT-style license

authors:
  - isfeng

requires:
  - Core


provides: [SimpleEditable]
...



*/

var SimpleEditable = new Class({
  
  Implements: [Events, Options],

  options: {
    
  },

  initialize: function(element, options){
    this.element = document.id(element);
    element = this.element;
    this.setOptions(options);

    element.addEvent('dblclick',function(){
      var textarea = new Element('textarea', {
        value: element.get('text'),
        styles: {'height': '100%', 'z-index': '99999'},
        events: {
          blur: function(){
            textarea.destroy();
            element.set('text', textarea.get('value'));
            element.reveal();
            this.fireEvent('complete');
          }.bind(this)
        }        
      });
      
      textarea.inject(element, 'after');
      element.toggle();
      textarea.focus();
      this.fireEvent('beforeStart');

    }.bind(this));
  }
});

Element.implement({

  makeEditable: function(options){
    var editable = new SimpleEditable(this, options);
    return editable;
  }

});