#signal-shimr

Connect to your SignalR server from your frontend JavaScript framework. Supports all error-handling and reconnection, including longpolling if needed.

Currently shims in the necessary dependencies from jQuery. Does **not** pull in all of jQuery. Only shimes the few methods SignalR needs.

##Installation:

```
$ npm i git+https://github.com/JoahG/signal-shimr.git --save
```

##Usage:

```
'use strict';
import 'signalr' from 'signal-shimr';

// Initialize connection
const connection = signalr.hubConnection('signalrdomain.com/signalr');

// Define connection proxies
let proxy = connection.createHubProxy('helloHub');
proxy.client = { };
proxy.server = {
  helloWorld: function() {
    return proxy.invoke.apply(proxy, ['HelloWorld', ...arguments]);
  }
};

// Start connection
connection.start();

// Access hub methods just like you would with signalr normally
proxy.server.helloWorld().done((data) => {
  console.log(data);
});
```

#Author

signal-shimr is made and maintained by @[JoahG](https://github.com/joahg) from the react-native-signalr project by @[olofd](https://github.com/olofd)