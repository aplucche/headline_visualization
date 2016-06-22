import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import { expect, assert } from 'chai';

//import Dropdown from '../index.js';
//const Simulate = ReactTestUtils.Simulate;
//const ExampleComponentFactory = React.createFactory(App);

function rgbToHex(red, green, blue) {

  var redHex   = red.toString(16);
  var greenHex = green.toString(16);
  var blueHex  = blue.toString(16);

  return pad(redHex) + pad(greenHex) + pad(blueHex);

};

function hexToRgb(hex) {

  var red   = parseInt(hex.substring(0, 2), 16);
  var green = parseInt(hex.substring(2, 4), 16);
  var blue  = parseInt(hex.substring(4, 6), 16);

  return [red, green, blue];

};

function pad(hex) {
  return (hex.length === 1 ? "0" + hex : hex);
};

describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {
      var redHex   = rgbToHex(255, 0, 0);
      var greenHex = rgbToHex(0, 255, 0);
      var blueHex  = rgbToHex(0, 0, 255);

      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000ff");
    });
  });

  describe("Hex to RGB conversion", function() {
    it("converts the basic colors", function() {
      var red   = hexToRgb("ff0000");
      var green = hexToRgb("00ff00");
      var blue  = hexToRgb("0000ff");

      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);
    });
  });
});