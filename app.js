/*--------------------------------------------------------------------------
 * ModulePattern Bootstrap
 *
 * Created      : 21/01/2013
 * Modified     : 04/01/2015
 * Version      : 2.0
 * UI Developer : Guilherme Pontes
 * Notes        : Copy and reproduce as much as you want.
---------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------
 * ModulePattern Bootstrap
 *
 * Created      : 21/01/2013
 * Modified     : 04/01/2015
 * Version      : 2.0
 * UI Developer : Guilherme Pontes
 * Notes        : Copy and reproduce as much as you want.
---------------------------------------------------------------------------*/

/**
* This is MyApp, it makes something awesome.
* It's an self invokated function that runs automatically/immediately.
*
* @class MyApp
* @constructor
*/
var MyApp = window.MyApp || (function(document, window){
	"use strict";

	var app, _private;

	/**
	 * The _private variable encapsulate all PRIVATE functions 
	 * and properties.
	 * 
	 * @property _private
	 * @type {Object}
	 * @default {Object}
	 */
	_private = {
	};

	/**
	 * The _app variable encapsulate all PUBLIC functions
	 * and properties.
	 * 
	 * @property _private 
	 * @type {Object} 
	 * @default {Object} 
	 */
	var app = {
	};

	// make app visible by the MyApp;
	return app;

})(document, window);


// another self invokated function to executes the app.
(function(){
	MyApp.init();
})();