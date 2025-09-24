'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssParams = sourceString
    .split(';')
    .map((val) => val.trim())
    .filter((str) => str !== '');

  const cssValues = cssParams.map((item) => {
    item.split(':').map((el) => el.trim());
  });

  return Object.fromEntries(cssValues);
}

module.exports = convertToObject;
