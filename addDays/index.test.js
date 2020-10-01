const addDays = require('./index');
const setupTest = require('../setupTest');

describe('addDays', () => {
	setupTest();

	it('Should return 01/07/2020', () => {
		// Arrange and act (Uses the mocked date )
		const response = addDays(2);

		// Assertion
		expect(response).toBe('01/07/2020');
	});

	it('Should return 02/07/2020', () => {
		// Arrange and act
		const response = addDays(2, '01/07/2020');

		// Assertion
		expect(response).toBe('03/07/2020');
	});

	it('Should return 01/12/2020', () => {
		// Arrange and act
		const response = addDays(1, ' 30/11/2020');

		// Assertion
		expect(response).toBe('01/12/2020');
	});
});
