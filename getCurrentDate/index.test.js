const getCurrentDate = require('./index');
const setupTest = require('../setupTest');

describe('getCurrentDate', () => {
	setupTest();

	it('Should return 29/06/2020', () => {
		// Arrange and act
		const response = getCurrentDate();

		// Assertion
		expect(response.fullDate).toBe('29/06/2020');
	});

	it('The day should be 29', () => {
		// Arrange and act
		const response = getCurrentDate().currentDay;
		const output = 29;

		// Assertion
		expect(response).toBe(output);
	});

	it('The month should be 6', () => {
		// Arrange and act
		const response = getCurrentDate().currentMonth;
		const output = 6;

		// Assertion
		expect(response).toBe(output);
	});

	it('The year should be 2020', () => {
		// Arrange and act
		const response = getCurrentDate().currentYear;
		const output = 2020;

		// Assertion
		expect(response).toBe(output);
	});
});
