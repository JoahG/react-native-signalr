var jqueryFunction = require('./jquery-function');
var jQuery = require('jquery-deferred');
var ajax = require('./ajax');
module.exports = jQuery.extend(
  jqueryFunction,
  jQuery,
  {
  defaultAjaxHeaders: null,
  ajax: ajax,
  inArray: (arr, item) => arr.indexOf(item) !== -1,
  trim: str => str && str.trim(),
  isEmptyObject: obj => !obj || Object.keys(obj).length === 0,
  makeArray: arr => [].slice.call(arr, 0),
  support: {
    cors: true
  }
});
