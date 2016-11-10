var signalRHubConnectionFunc;

if (typeof window == 'undefined') window = { console: {} };

var oldLogger = window.console.debug;

window.jQuery = require('./lib/signalr-jquery-polyfill.js');

module.exports = {
  setLogger: function(logger) {
    if (window.console && window.console.debug) {
      window.console.debug("OVERWRITING CONSOLE.DEBUG in signal-shimr");
    } else {
      if (!window.console) {
        window.console = {};
      }
    }
    window.console.debug = logger;
  },
  hubConnection: function(serverUrl, options) {
    if (!signalRHubConnectionFunc) {
      require('ms-signalr-client');
      signalRHubConnectionFunc = window.jQuery.hubConnection;
    }

    return signalRHubConnectionFunc(serverUrl, options);
  }
};
