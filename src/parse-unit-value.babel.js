import unitsRegexp  from 'mojs-util-units-regexp';

/**
 * `parseUnitValue` - function to parse a string with unit e.g. `10%`.
 * @param {String, Number, Any} value Value to parse.
 * @param {String} defaultUnit Default unit to fallback to.
 * @returns {Object} Parsed unit object.
 */
export const parseUnitValue = (value, defaultUnit) => {
  const result = {
    unit: defaultUnit,
    value,
  };

  if (typeof value === 'string') {
    const match = value.match(unitsRegexp);

    result.unit = (match === null || match === undefined) ? defaultUnit : match[0];
    result.value = parseFloat(value);
  }

  return result;
};

export default parseUnitValue;
