const getNumberOfDays = require('./index');
const setupTest = require('../setupTest');

describe('getNumberOfDays', () => {
	setupTest();

	it('Should return 31 (June Test)', () => {
		// Arrange and act
		const response = getNumberOfDays(2020, 5);

		// Assert
		expect(response).toBe(30);
	});

	it('Should return 29 (February Test)', () => {
		// Arrange and act
		const response = getNumberOfDays(2020, 1);

		// Assert
		expect(response).toBe(29);
	});
});
