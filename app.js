/*--------------------------------------------------------------------------
 * ModulePattern Bootstrap
 *
 * Created      : 21/01/2013
 * Version      : 1.0
 * UI Developer : Guilherme Pontes
 * Notes        : Copy and reproduce as much as you want.
---------------------------------------------------------------------------*/

var sampleApplication;

sampleApplication = (function(d, w, $){
	"use strict";

	var app, config;


	//private content
	config = {
		div : {
			background: "red";
		}
	};

	app = {
		init : function() {
			this.log("Init");
			this._cache();
			this._bind();
		},

		load: function() {
			this.log("Loading all");
			this.loadMe();
		},

		_cache : function() {
			this.log("Cache elements");
			this.$anchorPrevent   = $( "a[href='#']" );
			this.$myDiv           = $( ".myDiv" );
		},

		_bind : function() {
			this.log("Bind functions");
			this.$anchorPrevent.on( 'click', this.prevent );
			this.$myDiv.on( 'click', this.changeBackground );
		},
			
		prevent : function(e) {
			// here we need to avoid the "this" keyword, because it's being used by the element that have been clicked.
			sampleApplication.log("Preventing default actions");
			e.preventDefault();
		},

		changeBackground: function() {
			// here we need to avoid the "this" keyword, because it's being used by the element that have been clicked.
			sampleApplication.log("Changing background.");
			var $this = $( this );

			//access to the private content
			$this.css('background', config.div.background);
		},

		loadMe: function() {
			console.log( "Log me" );
		},

		log: function(functionName) {
			console.log("Loading: " + functionName);
		}
	};

	return app;

})(document, window, window.jQuery);



var init =  {
	ready : function() {
		sampleApplication.init();
	},

	load : function() {
		sampleApplication.load();
	}
};


$( document ).ready( init.ready )
$( window ).load( init.load );

