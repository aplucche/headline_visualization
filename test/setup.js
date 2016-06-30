'use strict';

import jsdom from 'jsdom';

//Source: https://github.com/twisterghost/react-mocha-jsdom-example/blob/master/test/setup.js
const DEFAULT_HTML = "<!doctype html><html><body><div id='app'></div></body></html>";

global.document = jsdom.jsdom(DEFAULT_HTML);
global.window = document.defaultView;
global.navigator = global.window.navigator;