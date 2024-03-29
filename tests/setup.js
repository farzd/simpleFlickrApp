/* https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md **/
require.extensions['.css'] = function () {return null;};
require.extensions['.scss'] = function () {return null;};
require.extensions['.svg'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
