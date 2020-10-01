const getCurrentDate = require('../getCurrentDate');
const formatDate = require('../formatDate');

/*

Resource on JavaScript month argument:

- https://www.w3schools.com/jsref/jsref_getmonth.asp

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth

*/

/**
 * @description Add Takes a date and adds x to the day e.g. 23/06/2020 -> + 5 -> 28/06/2020
 * @param {number} numberOfDays The number of days you wish to add to the current date
 * @param {string | null} customDate Required when a date is being passed in e.g. inputType === 'formatting'
 * @returns {string} Returns a formatted date e.g. 27/09/2020
 */
const addDays = (numberOfDays = 1, customDate = null) => {
	// Custom date provided (De-formatting mode)
	if (customDate !== null) {
		// Split the date into an array ie ['20','11','1997']

		/**
		 * @type {string[]}
		 */
		const splitDate = customDate.split('/');

		// Create a new date object (Remember to -1 for the month, in JavaScript months are indexed based)
		const endDate = new Date(
			parseInt(splitDate[2]),
			parseInt(splitDate[1]) - 1,
			parseInt(splitDate[0])
		);

		// Safely increment the day by x amount of days using setDate native function
		endDate.setDate(endDate.getDate() + numberOfDays);

		// Format the date via the format function
		return formatDate(endDate, 'formatting').fullYear;
	}

	// When in formatting mode get the current date
	const { currentDay, currentMonth, currentYear } = getCurrentDate();

	// Create a new date object (Remember to -1 for the month, in JavaScript months are indexed based)
	const currentDate = new Date(currentYear, currentMonth - 1, currentDay);

	// Safely increment the day by x amount of days
	currentDate.setDate(currentDate.getDate() + numberOfDays);

	// Format the date via the format function
	return formatDate(currentDate, 'formatting').fullYear;
};

module.exports = addDays;
