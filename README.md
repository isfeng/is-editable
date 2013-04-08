is-editable
===============

is-editable is a small [MooTools](http://mootools.net/) plugin to to create in place editing fields.

How to Use
----------

Snippet code Javascript:

	#JS
	
	$("test01").makeEditable({
		type: 'text',
		onBeforeEdit: function(){
			
		},
		onComplete: function(){
			
		}
	});

	$("test02").makeEditable({
		type: 'textarea',
		onBeforeEdit: function(){
			
		},
		onComplete: function(){
			
		}
	});

Snippet code HTML:

	#HTML
	
	<p id="test01">double click</p>
	
	<p id="test02" style="width:200px; border: 1px solid black">
		long long long long long long long long long long long long long long long long long long long long long text
	</p>