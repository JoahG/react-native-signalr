//Arrange new state
var oldDocument = window.document;
var oldReadyState = window.document && window.document.readyState;
var oldUserAgent = window.navigator.userAgent;
window.document = {
  readyState: 'complete'
};
window.addEventListener = () => {};
window.navigator.userAgent = "react-native";

//Act
window.jQuery = require('./signalr-jquery-polyfill.js');
require('ms-signalr-client');

//Restore old state
var hubConnection = window.jQuery.hubConnection;
window.jQuery = undefined;
window.document = oldDocument;

if (oldReadyState) {
  window.document.readyState = oldReadyState;
}

module.exports = {
  hubConnection: (serverUrl, logger) => {
    var protocol = serverUrl.split('//')[0];
    var host = serverUrl.split('//')[1];
    window.location = {
      protocol: protocol,
      host: host
    };
    window.document = {
      createElement: function() {
        return {
          protocol: protocol,
          host: host
        }
      }
    };
    return hubConnection(serverUrl);
  }
};
