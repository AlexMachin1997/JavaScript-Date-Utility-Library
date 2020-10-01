const addMonths = require('./index');
const setupTest = require('../setupTest');

describe('addMonths', () => {
	setupTest();

	it('Should return 29/07/2020', () => {
		// Arrange and act
		const response = addMonths(1);

		// Assertion
		expect(response).toBe('29/07/2020');
	});

	it('Should return 30/08/2020', () => {
		// Arrange and act
		const response = addMonths(1, '30/07/2020');

		// Assertion
		expect(response).toBe('30/08/2020');
	});
});
