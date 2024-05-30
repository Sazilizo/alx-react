import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe('it outputs a string depending on its truthy or falsy value', () => {
    it("ouputs Holberton School if true",() =>{
        expect(getFooterCopy(true)).toBe("Holberton School");
    })
    it("outputs Holberton School main dashboard if false", ()=>{
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard")
    })
});

describe("checking if output is <strong>Urgent requirement</strong> - complete by EOD", ()=>{
    it("should output <strong>Urgent requirement</strong> - complete by EOD", ()=>{
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
    })
})

describe("getFullYear should return the current year", ()=>{
    it("returns the current year", ()=>{
        expect( Number(getFullYear())).toBe(Number(new Date().getFullYear()))
    })
})