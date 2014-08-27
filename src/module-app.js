/*--------------------------------------------------------------------------
 * ModulePattern Bootstrap
 *
 * Created      : 21/01/2013
 * Modified     : 27/08/2014
 * Version      : 3.0
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
    /**
     * The _config variable sets all properties that will be
     * handled by the app.
     *
     * @property _private
     * @type {Object}
     * @default {Object}
     */
    _config: {
      /**
       * Background options
       *
       * @property background
       * @type {Object}
       * @default {Object}
       */
      background: {
        /**
         * Background color option
         *
         * @property color
         * @type {String}
         * @default "white"
         */
        color: "white"
      }
    },

    /**
     * Makes the body element from {MyApp.body} the color setted,
     * if not setted it will be the default color
     * from {_private._config.background.color}
     *
     * @method setBGColor
     * @param {String} color A color to be an background color from body.
     * @return {Undefined}
     */
    setBGColor: function(color) {
      app.body.style.background = color || this._config.background.color;
    },

    /**
     * Makes body blue from {MyApp.init} method.
     *
     * @method makeBackgroundBlue
     * @return {Undefined}
     */
    makeBackgroundBlue: function() {
      _private.setBGColor("blue");
    },

    /**
     * Makes body red from click event at {MyApp.bind} from
     * {MyApp.makeBodyRed}.
     *
     * @method makeBackgroundRed
     * @return {Undefined}
     */
    makeBackgroundRed: function() {
      _private.setBGColor("red");
    }
  };

  /**
   * The _app variable encapsulate all PUBLIC functions
   * and properties.
   *
   * @property _private
   * @type {Object}
   * @default {Object}
   */
  app = {

    /**
     * The init method, is the function that initialize the project,
     * by caching variables and binding objects and can initialize
     * other methods too.
     *
     * @method init
     * @return {Undefined}
    */
    init: function() {
      this._cache();
      this._bind();

      //the background must be blue first..
      _private.makeBackgroundBlue();
    },

    /**
     * The _cache method creates public properties that will be
     * handled by other methods. Caching elements to not have to be
     * called every single time.
     *
     *
     * @method _cache
     * @return {Undefined}
    */
    _cache: function(){
      this.body = document.body;
    },

    /**
     * The _bind method bind all cached dom elements from {MyApp._cache}.
     * It sets methods to events made by the DOM.
     *
     *
     * @method _bind
     * @return {Undefined}
    */
    _bind: function() {
      this.body.addEventListener('click', _private.makeBackgroundRed , false);
    }
  };

  // make app visible by the MyApp;
  return app;

})(document, window);


// another self invokated function to executes the app.
(function(){
  MyApp.init();
})();
