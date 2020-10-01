/**
 * @typedef {Object} DateProperties
 * @property {number} currentDay
 * @property {number} currentMonth
 * @property {number} currentYear
 * @property {string} fullDate
 */

const formatDate = require('../formatDate');

/**
 * @description Gets the current date and returns it in a british format e.g. DD/MM/YYYY
 * @returns {DateProperties} Returns individual date properties of the current date and the full date e.g. 27/09/2020
 */
const getCurrentDate = () => {
	/**
	 * @description Gets the date from the native date object
	 * @type {Date}
	 */
	const date = new Date();

	// Contains an object with various date properties e.g. day, month etc (Raw Date Object, so the month doesn't needed to be modified thats wha the locale string will do)
	const FormattedDate = formatDate(date, 'formatting');

	return {
		currentDay: FormattedDate.day,
		currentMonth: FormattedDate.month,
		currentYear: FormattedDate.year,
		fullDate: FormattedDate.fullYear
	};
};

module.exports = getCurrentDate;
