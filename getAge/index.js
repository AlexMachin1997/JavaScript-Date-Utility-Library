/*

Resource on JavaScript month argument:

- https://www.w3schools.com/jsref/jsref_getmonth.asp

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth

*/

const getCurrentDate = require('../getCurrentDate');

/**
 * @description Takes in two date objects and gets your ages
 * @param {Date} born
 * @param {Date} now
 */
const calculateAge = (born, now) => {
	// Get the users birthday
	const birthday = new Date(now.getFullYear(), born.getMonth(), born.getDate());

	// Check the birthday is greater than today (Current date - birthday year)
	if (now >= birthday) return now.getFullYear() - born.getFullYear();

	return now.getFullYear() - born.getFullYear() - 1;
};

/**
 * @typedef {Object} DateObjects
 * @property {Date} born
 * @property {Date} now
 *
 *
 * @description Takes a date of birth and
 * @param {string | number} day
 * @param {string | number} month
 * @param {string | number} year
 * @returns {DateObjects}
 */
const formatAge = (day, month, year) => {
	/**
	 * @description Stores the users date of birth e.g. 20/11/1997
	 * @type {string}
	 */
	const dateOfBirth = `${day}/${month}/${year}`;

	/**
	 * @description Stores the current date e.g. 27/09/2020
	 * @type {Date}
	 */
	const now = new Date(
		getCurrentDate().currentYear,
		getCurrentDate().currentMonth,
		getCurrentDate().currentDay
	);

	/**
	 * @description Stores the split date of birth elements e.g. ["20","11","1997"]
	 * @type {string[]}
	 */
	const birthDate = dateOfBirth.split('/');

	/**
	 * @description Stores a raw date object which represents when the the user was born. (Note: no need to -1 as the date is going to be passed in correctly, if it won't be then this needs to be adjusted)
	 * @type {Date}
	 */
	const born = new Date(parseInt(birthDate[2]), parseInt(birthDate[1]), parseInt(birthDate[0]));

	return {
		born,
		now
	};
};

/**
 * @description Takes in a users age e.g. 20/10/1997 (Equates to 20/11/1997, Javascript months are 0 to 11 not 1 to 12)
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @returns {number} Returns the users age e.g. 18
 */
const getAge = (day, month, year) => {
	// Take in a custom date and pass it to the formatAge
	const { born, now } = formatAge(day, month, year);

	// Return the age to the client
	return calculateAge(born, now);
};

module.exports = getAge;
