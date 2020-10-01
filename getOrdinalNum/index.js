/**
 * @description Appends the day passed in with an ordinal number
 * @param {number} day
 * @returns {string} Returns a day of the month with th, st, nd or rd
 */
const getOrdinalNum = (day) =>
	day +
	(day > 0 ? ['th', 'st', 'nd', 'rd'][(day > 3 && day < 21) || day % 10 > 3 ? 0 : day % 10] : '');

module.exports = getOrdinalNum;
