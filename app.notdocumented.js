var MyApp = window.MyApp || (function(document, window){
	"use strict";

	var app, _private;

	_private = {
		_config: {
			background: {
				color: "white"
			}
		},

		setBGColor: function(color) {
			app.body.style.background = color || this._config.background.color;
		},

		makeBackgroundBlue: function() {
			_private.setBGColor("blue");
		},

		makeBackgroundRed: function() {
			_private.setBGColor("red");
		}
	};

	var app = {

		init: function() {
			this._cache();
			this._bind();

			//the background must be blue first..
			_private.makeBackgroundBlue();
		},

		_cache: function(){
			this.body = document.body;
			this.makeMeRed = document.querySelector('.makeBodyRed');
		},

		_bind: function() {
			this.makeMeRed.addEventListener('click', _private.makeBackgroundRed , false);
		}
	};

	// make app visible by the MyApp;
	return app;

})(document, window);


// another self invokated function to executes the app.
(function(){
	MyApp.init();
})();