'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strVal = sourceString.split(';');
  const cssElements = strVal.reduce((cssParams, current) => {
    const [key, value] = current.split(':');

    if (key.trim() && value.trim()) {
      cssParams[key.trim()] = value.trim();
    }

    return cssParams;
  }, {});

  return cssElements;
}

module.exports = convertToObject;
