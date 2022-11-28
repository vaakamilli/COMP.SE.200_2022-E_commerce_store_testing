import chai from "chai"
import toFinite from "../src/toFinite.js"
const expect = chai.expect

describe("toFinite", () => {
    it("Converts the minimum value of a 'number'-type to a finite number", () =>{
        expect(toFinite(Number.MIN_VALUE)).to.equal(5e-324)
    });
    it("Converts the maximum value of a 'number'-type to a finite number", () =>{
        expect(toFinite(Number.MAX_VALUE)).to.equal(1.7976931348623157e+308)
    });
    it("Converts the value of +infinity to a finite number", () =>{
        expect(toFinite(Number.POSITIVE_INFINITY)).to.equal(1.7976931348623157e+308)
    });
    it("Converts the value of -infinity to a finite number", () =>{
        expect(toFinite(Number.NEGATIVE_INFINITY)).to.equal(-1.7976931348623157e+308)
    });
    it("Converts the value of epsilon to a finite number", () =>{
        expect(toFinite(Number.EPSILON)).to.equal(2.220446049250313e-16)
    });
    it("Converts the value of NaN to a finite number", () =>{
        expect(toFinite(Number.NaN)).to.equal(0)
    });
    it("Converts the minimum safe value as integer to a finite number", () =>{
        expect(toFinite(Number.MIN_SAFE_INTEGER)).to.equal(-9007199254740991)
    });
    it("Converts the maximum safe value as integer to a finite number", () =>{
        expect(toFinite(Number.MAX_SAFE_INTEGER)).to.equal(9007199254740991)
    });
    it("Converts a float value to a finite number", () =>{
        expect(toFinite(3.3)).to.equal(3.3)
    });
    it("Converts a boolean value to a finite number", () =>{
        expect(toFinite(true)).to.equal(1)
    });
    it("Converts a string value to a finite number", () =>{
        expect(toFinite('3.3')).to.equal(3.3)
    });
   })