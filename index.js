var signalRHubConnectionFunc;
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
    window.document = window.document;
    if (!signalRHubConnectionFunc) {
      require('ms-signalr-client');
      signalRHubConnectionFunc = window.jQuery.hubConnection;
    }

    return signalRHubConnectionFunc(serverUrl, options);
  }
};
