const calendarActions = require("./calendarActions")
// @ponicode
describe("calendarActions.calendarToggleEditMode", () => {
    test("0", () => {
        let callFunction = () => {
            calendarActions.calendarToggleEditMode(["01-01-2020", "32-01-2020", "01-13-2020", "01-01-2030"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            calendarActions.calendarToggleEditMode("01-01-2030")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            calendarActions.calendarToggleEditMode("01-13-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            calendarActions.calendarToggleEditMode("32-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            calendarActions.calendarToggleEditMode(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
