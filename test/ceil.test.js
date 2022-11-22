import chai from "chai"
import ceil from "../src/ceil.js"
const expect = chai.expect

describe("Ceil", () => {
    it("Round 4.006 up to the next biggest integer", () =>{
        expect(ceil(4.006)).to.equal(5)
    });
    it("Round -4.006 up to the next biggest integer", () =>{
        expect(ceil(-4.006)).to.equal(-4)
    });
    it("Round 6.004 up with a precision of 0.01", () =>{
        expect(ceil(6.004, 2)).to.equal(6.01)
    });
    it("Round -6.004 up with a precision of 0.01", () =>{
        expect(ceil(-6.004, 2)).to.equal(-6.00)
    });
    it("Round 0 up to the next biggest integer", () =>{
        expect(ceil(0)).to.equal(0)
    });
    it("Round nothing", () =>{
        expect(ceil()).to.deep.equal(NaN)
    });
    it("Round a boolean value", () =>{
        expect(ceil(false, 2)).to.throw(TypeError)
    });
   })