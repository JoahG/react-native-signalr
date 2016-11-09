module.exports = function(subject) {
  var events = subject.events || {};

  if (subject && subject === subject.window)
    return {
      0: subject,
      load: function(handler) { return subject.addEventListener('load', handler, false) },
      bind: function(event, handler) { return subject.addEventListener(event, handler, false) },
      unbind: function(event, handler) { return subject.removeEventListener(event, handler, false) }
    }

  return {
    0: subject,

    unbind: function(event, handler) {
      var handlers = events[event] || [];

      if (handler) {
        var idx = handlers.indexOf(handler);
        if (idx !== -1) handlers.splice(idx, 1)
      } else handlers = []

      events[event] = handlers
      subject.events = events;

    },
    bind: function(event, handler) {
      var current = events[event] || [];
      events[event] = current.concat(handler)
      subject.events = events;
    },
    triggerHandler: function(event, args) {
      var handlers = events[event] || [];
      handlers.forEach(function(fn) {
        if (args && args[0] && args[0].type === undefined) {
          args = [{
            type: event
          }].concat(args || []);
        } else {
          args = args || [];
        }

        fn.apply(this, args)
      })
    }
  }
};
