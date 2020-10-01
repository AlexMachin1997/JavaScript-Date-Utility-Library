const formatDate = require('./index');
const setupTest = require('../setupTest');

describe('formatDate', () => {
	setupTest();

	describe('formatting mode', () => {
		const date = new Date(2020, 5, 30);

		it('Should return 30/06/2020', () => {
			// Arrange and act
			const response = formatDate(date, 'formatting');

			// Assertion
			expect(response.fullYear).toBe('30/06/2020');
		});

		it('Should return 6', () => {
			// Arrange and act
			const response = formatDate(date, 'formatting');

			// Assertion
			expect(response.day).toBe(30);
		});

		it('Should return 6', () => {
			// Arrange and act
			const response = formatDate(date, 'formatting');

			// Assertion
			expect(response.month).toBe(6);
		});

		it('Should return 2020', () => {
			// Arrange and act
			const response = formatDate(date, 'formatting');

			// Assertion
			expect(response.year).toBe(2020);
		});
	});

	describe('deformatting mode', () => {
		const date = '20/11/1997';

		it('Should return ', () => {
			// Arrange and act
			const response = formatDate(date, 'deformatting');

			// Assertion
			expect(response.fullYear).toBe('20/11/1997');
		});

		it('Should return 20', () => {
			// Arrange and act
			const response = formatDate(date, 'deformatting');

			// Assertion
			expect(response.day).toBe(20);
		});

		it('Should return 10 (November)', () => {
			// Arrange and act
			const response = formatDate(date, 'deformatting');

			// Assertion
			expect(response.month).toBe(10);
		});

		it('Should return 1997', () => {
			// Arrange and act
			const response = formatDate(date, 'deformatting');

			// Assertion
			expect(response.year).toBe(1997);
		});
	});
});
