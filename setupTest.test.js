const setupTest = require("./setupTest")
// @ponicode
describe("setupTest", () => {
    test("0", () => {
        let callFunction = () => {
            setupTest()
        }
    
        expect(callFunction).not.toThrow()
    })
})
