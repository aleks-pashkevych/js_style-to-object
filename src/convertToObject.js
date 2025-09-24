'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssParams = sourceString.split(';');
  const cssValues = {};

  for (let i = 0; i < cssParams.length; i++) {
    if (cssParams[i].trim().length === 0) {
      break;
    }

    const arr = cssParams[i].split(':');
    const key = arr[0].trim();
    const value = arr[1].trim();

    cssValues[key] = value;
  }

  // console.log(cssValues);
  return cssValues;
}

module.exports = convertToObject;
