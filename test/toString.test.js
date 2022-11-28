import chai from "chai"
import toString from "../src/toString.js"
const expect = chai.expect

describe("toString", () => {
    it("Convert '-0' to a string", () =>{
        expect(toString('-0')).to.deep.equal('-0')
    });
    it("Convert an array to a string", () =>{
        expect(toString([-1, 2, -3])).to.deep.equal('-1,2,-3')
    });
    it("Convert a negative integer to a string", () =>{
        expect(toString(-1)).to.deep.equal('-1')
    });
    it("Convert a floating type number to a string", () =>{
        expect(toString(3.3)).to.deep.equal('3.3')
    });
    it("Convert a boolean value to a string", () =>{
        expect(toString(true)).to.deep.equal('true')
    });
    it("Convert an empty string to a string", () =>{
        expect(toString('')).to.deep.equal('')
    });
   })