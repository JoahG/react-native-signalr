module.exports =  function(options, data) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(e) {
    if (request.readyState !== 4) {
      return;
    }

    if (request.status === 200 && !request._hasError) {
      options.success && options.success(JSON.parse(request.responseText));
    } else {
      options.error && options.error(request._bodyText);
    }
  };

  request.open(options.type, options.url);
  request.setRequestHeader('content-type', options.contentType);

  request.send(options.data.data && 'data=' + options.data.data);
  
  return {
    abort: function(reason) {
      return request.abort(reason);
    }
  };
}
