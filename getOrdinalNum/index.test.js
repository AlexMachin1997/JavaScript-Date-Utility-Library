const getOrdinalNum = require('./index');
const setupTest = require('../setupTest');

describe('getOrdinalNum', () => {
	setupTest();

	it('Should return 20th', () => {
		// Arrange and act
		const response = getOrdinalNum(20);

		// Assert
		expect(response).toBe('20th');
	});

	it('Should return 1st', () => {
		// Arrange and act
		const response = getOrdinalNum(1);

		// Assert
		expect(response).toBe('1st');
	});

	it('Should return 2nd', () => {
		// Arrange and act
		const response = getOrdinalNum(2);

		// Assert
		expect(response).toBe('2nd');
	});

	it('Should return 3rd', () => {
		// Arrange and act
		const response = getOrdinalNum(3);

		// Assert
		expect(response).toBe('3rd');
	});
});
