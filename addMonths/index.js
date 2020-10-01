/*

Resource on JavaScript month argument:

- https://www.w3schools.com/jsref/jsref_getmonth.asp

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth

*/

const getCurrentDate = require('../getCurrentDate');
const formatDate = require('../formatDate');

/**
 * @description Takes a date and adds x to the month e.g. 23/06/2020 -> 23/07/2020
 * @param {number} numberOfMonths
 * @param {string | null} customDate
 * @returns {string} Returns a formatted date e.g. 27/09/2020
 */
const addMonths = (numberOfMonths, customDate = null) => {
	// Custom date provided (De-formatting mode)
	if (customDate !== null) {
		// Split the date into an array ie ['20','11','1997']
		const splitDate = customDate.split('/');

		// Create a new date object (Remember to -1 for the month, in JavaScript months are indexed based)
		const endDate = new Date(
			parseInt(splitDate[2]),
			parseInt(splitDate[1]) - 1,
			parseInt(splitDate[0])
		);

		// Safely increment the month by x amount of months
		endDate.setMonth(endDate.getMonth() + numberOfMonths);

		// Format the date via the format function (Defaults to formatting ie you already have a correct date object)
		return formatDate(endDate, 'formatting').fullYear;
	}

	// When in formatting mode get the current date
	const { currentDay, currentMonth, currentYear } = getCurrentDate();

	// Create a new date object (Remember to -1 for the month, in JavaScript months are indexed based)
	const currentDate = new Date(currentYear, currentMonth - 1, currentDay);

	// Safely increment the month by x amount of months
	currentDate.setMonth(currentDate.getMonth() + numberOfMonths);

	// Format the date via the format function (Defaults to formatting ie you already have a correct date object)
	return formatDate(currentDate, 'formatting').fullYear;
};

module.exports = addMonths;
