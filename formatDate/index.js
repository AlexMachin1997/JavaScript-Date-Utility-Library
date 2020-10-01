/*

Resources:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString (Date object formatting)

- https://www.w3schools.com/jsref/jsref_getmonth.asp

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth

*/

/**
 * @typedef {Object} DateProperties
 * @property {number} day
 * @property {number} month
 * @property {number} year
 * @property {string} fullYear
 */

/**
 * @description Take's in either a custom date from an API or uses today's date and formats the dates via the toLocaleString() function.
 * @param {string | Date} date
 * @param {string} inputType
 * @returns {DateProperties} Returns individual date properties and an optional full date
 */
const formatDate = (date = '20/11/1997', inputType = 'deformatting') => {
	/**
	 * @description Stores all the individual date properties and the fullYear
	 * @type {DateProperties}
	 */
	const DateProperties = {
		day: 0,
		month: 0,
		year: 0,
		fullYear: ''
	};

	try {
		/**
		 * @description Stores the formatted date, this is what will form the DateProperties fields
		 * @type {string[] | string}
		 */
		let formattedDate;

		/*
			----------------------------------------------
			Deformatting Mode:
			----------------------------------------------

			Used when passing in an actual "real date", because JavaScript dates are 0 to 11 we need to -1 from the month field e.g. 20/11/1997 (What We See) to get 20/10/1997 (What JavaScript sees)

			Example Usage: Getting a date from an API and passing it to a Date based component e.g. 20/11/1997 -> 20/11/1997

			Steps:

			- Split the Date

			- Create a new date object, don't forget to -1 from the date to get the correct month

			- Format the date in local british format

			- Split the date again (This time it's the correct date)

			- -1 from the month as this is being passed to the client

			- Return all the date properties and the full year (Rejoined array :D)
		*/
		if (inputType === 'deformatting') {
			/*

			I'm ignoring typescript type checks for this line

			It's saying split isn't of type date, I know but this util accepts a date object or a string. DEAL WITH IT!!!!!

			*/

			// @ts-ignore
			const deformattingDate = date.split('/');

			// Create a new date and -1 from the month (Months are indexed between 0 - 11)
			const newDate = new Date(
				parseInt(deformattingDate[2]),
				parseInt(deformattingDate[1]) - 1,
				parseInt(deformattingDate[0])
			);

			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString (Converts the output to the devices local output)
			// @ts-ignore - https://github.com/microsoft/TypeScript/issues/38266
			formattedDate = newDate.toLocaleString('en-GB', {
				// @ts-ignore - https://github.com/microsoft/TypeScript/issues/38266
				dateStyle: 'short'
			});

			// Split the new date
			formattedDate = formattedDate.split('/');

			// Update the properties (Remember to -1 from the month as it will return 11 for November when infact it needs to be 10)
			DateProperties.day = parseInt(formattedDate[0]);
			DateProperties.month = parseInt(formattedDate[1]) - 1;
			DateProperties.year = parseInt(formattedDate[2]);
			DateProperties.fullYear = formattedDate.join('/');

			// Return the properties to the client
			return DateProperties;
		}

		/*

			Formatting Dates:

			Presumes the date being passed in is an actual Date Object. This is basically opposite of the deformatting mode, a valid JavaScript is being passed in and there
			is no need to construct a new date Object like we had to previously.

			Example: Useful for formatting dates which are being sent ton API service e.g. converting 2020/09/30 -> 30/10/2020

			Steps:

			- Format the date object via toLocaleString()

			- Split the date into an array of strings

			- Return the date individual date properties and the full year (Joined array :D)

		*/

		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString (Converts the output to the devices local output)
		// @ts-ignore - https://github.com/microsoft/TypeScript/issues/38266
		formattedDate = date.toLocaleString('en-GB', {
			// @ts-ignore - https://github.com/microsoft/TypeScript/issues/38266
			dateStyle: 'short'
		});

		// Split the new date
		formattedDate = formattedDate.split('/');

		// Update the properties (Remember you don't need to do anything extra when formatting as this is used when returning a value an API
		DateProperties.day = parseInt(formattedDate[0]);
		DateProperties.month = parseInt(formattedDate[1]);
		DateProperties.year = parseInt(formattedDate[2]);
		DateProperties.fullYear = formattedDate.join('/');

		// Return the properties to the client
		return DateProperties;
	} catch (err) {
		return DateProperties;
	}
};

module.exports = formatDate;
