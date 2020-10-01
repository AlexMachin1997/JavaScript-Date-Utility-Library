/**
 * @description Returns the number of days for a particular month e.g. 30 for September
 * @param {number} year
 * @param {number} month
 * @returns {number}
 */

const getNumberOfDays = (year, month) => new Date(year, month + 1, 0).getDate();

module.exports = getNumberOfDays;
