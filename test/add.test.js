import chai from "chai"
import add from "../src/add.js"
const expect = chai.expect

describe("Add", () => {
    it("Add two numbers", () =>{
        expect(add(2, 2)).to.equal(4)
    });
   })