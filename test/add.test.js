import chai from "chai"
import add from "../src/add.js"
const expect = chai.expect

describe("Add", () => {
    it("Add two positive numbers", () =>{
        expect(add(2, 2)).to.equal(4)
    });
    it("Add two negative numbers", () =>{
        expect(add(-2, -2)).to.equal(-4)
    });
    it("Add two zeros", () =>{
        expect(add(0, 0)).to.equal(0)
    });
    it("Add zero to a negative number", () =>{
        expect(add(-2, 0)).to.equal(-2)
    });
    it("Add zero to a positive number", () =>{
        expect(add(2, 0)).to.equal(2)
    });
    it("Add two negative floating type numbers together", () =>{
        expect(add(-2.2, -2.2)).to.equal(-4.4)
    });
    it("Add nothing", () =>{
        expect(add()).to.equal(undefined)
    });
    it("Add two boolean values together", () =>{
        expect(add(false, false)).to.equal(TypeError)
    });
   })