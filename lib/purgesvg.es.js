import path from"path";var CONFIG_FILENAME="purgesvg.config.js",ERROR_CONFIG_FILE_LOADING="Error loading the config file",ERROR_OPTIONS_TYPE="Error Type Options: expected an object",ERROR_WHITELIST_TYPE="Error Type option whitelist: expected an array",ERROR_MISSING_CONTENT="No content provided.",ERROR_MISSING_SVGS="No svgs provided.",_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),defaultOptions={content:[],svgs:[],whitelist:[]},PurgeSvg=function(){function e(t){classCallCheck(this,e),"string"!=typeof t&&void 0!==t||(t=this.loadConfigFile(t)),this.validateOptions(t),this.options=Object.assign(defaultOptions,t)}return createClass(e,[{key:"loadConfigFile",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:CONFIG_FILENAME;try{return require(path.resolve(process.cwd(),e))}catch(e){throw new Error(ERROR_CONFIG_FILE_LOADING)}}},{key:"validateOptions",value:function(e){if("object"!==(void 0===e?"undefined":_typeof(e)))throw new TypeError(ERROR_OPTIONS_TYPE);if(!e.content||!e.content.length)throw new TypeError(ERROR_MISSING_CONTENT);if(!e.svgs||!e.svgs.length)throw new TypeError(ERROR_MISSING_SVGS);if(e.whitelist&&!Array.isArray(e.whitelist))throw new TypeError(ERROR_WHITELIST_TYPE)}}]),e}();export default PurgeSvg;