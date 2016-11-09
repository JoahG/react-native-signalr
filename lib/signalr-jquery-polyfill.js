var jqueryFunction = require('./jquery-function');
var jQuery = require('jquery-deferred');
var ajax = require('./ajax');
module.exports = jQuery.extend(
  jqueryFunction,
  jQuery,
  {
  defaultAjaxHeaders: null,
  ajax: ajax,
  inArray: function (arr, item) { return arr.indexOf(item) !== -1 },
  trim: function (str) { return str && str.trim() },
  isEmptyObject: function (obj) { return !obj || Object.keys(obj).length === 0 },
  makeArray: function (arr) { return [].slice.call(arr, 0) },
  support: {
    cors: true
  }
});
