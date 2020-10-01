// @ts-nocheck
// eslint-disable-next-line jest/no-commented-out-tests
/*

setupTests:

Setups up and tears down after each describe block


Usage:

describe('test', () => {
	setupTests()

	it('test', () => {})
})


Sets the date object to a static value for predictable and maintainable tests (Only used when a custom date isn't provided e.g. generateCurrentDate() is being used)


Resources:

https://github.com/facebook/jest/issues/2234 (Solution link)


https://jestjs.io/docs/en/setup-teardown (Jest beforeEach and afterEach)

*/

const setupTest = () => {
	const RealDate = Date;

	beforeEach(() => {
		global.Date = jest.fn((...props) => {
			// When there are props set the date with the props provided e.g. [20, 11, 1997]
			if (props.length > 0) {
				return new RealDate(...props);
			}

			/*

			Trigger:
			When no props are provided set the date to 29/06/2020 (The 5 for the month is June)


			WARNING:
			If you change the date you will need to update the tests which don't use a custom date e.g. calculateFreezeEndDate, addDays, adMonths etc

			*/
			return new RealDate(new Date(2020, 5, 29));
		});
	});

	afterEach(() => {
		global.Date = RealDate;
	});
};

module.exports = setupTest;
