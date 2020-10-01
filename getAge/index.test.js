const getAge = require('./index');
const setupTest = require('../setupTest');

describe('calculateUserAge', () => {
	setupTest();

	it('Should return 23', () => {
		// Arrange and act
		const response = getAge(20, 10, 1997);

		// Assertion
		expect(response).toBe(22);
	});
});
