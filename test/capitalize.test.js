import chai from "chai"
import capitalize from "../src/capitalize.js"
const expect = chai.expect

describe("Capitalize", () => {
    it("Converts the first character of `FRED` to upper case and the remaining to lower case", () =>{
        expect(capitalize('FRED')).to.equal('Fred')
    });
   })