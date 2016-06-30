import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect, assert } from 'chai';
import 'isomorphic-fetch';

import App from '../index.js';
import Dropdown from '../components/Dropdown'
import Graphic from '../components/Graphic'

describe('App Container', () => {
  it('can be rendered', () => {
    var component = TestUtils.renderIntoDocument(<App />);
    assert(component)
  });
}); 

describe('Dropdown Component', () => {
  it('contains at least one option', () => {
    var component = TestUtils.renderIntoDocument(<Dropdown />);
    var children = TestUtils.scryRenderedDOMComponentsWithTag(component, "option");
    assert.isAtLeast(children.length, 1);
  });
});

describe('Graphic Component', () => {
  it('contains svg', () => {
    var component = TestUtils.renderIntoDocument(<Graphic />);
    var children = TestUtils.scryRenderedDOMComponentsWithTag(component, 'svg');
    assert.isAtLeast(children.length, 1);
  });
});