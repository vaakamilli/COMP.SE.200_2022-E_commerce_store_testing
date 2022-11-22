import chai from "chai"
import capitalize from "../src/capitalize.js"
const expect = chai.expect

describe("Capitalize", () => {
    it("Converts the first character of `JOHN` to upper case and the remaining to lower case", () =>{
        expect(capitalize('JOHN')).to.equal('John')
    });
    it("Converts the first character of `john` to upper case and the remaining to lower case", () =>{
        expect(capitalize('john')).to.equal('John')
    });
    it("Converts the first character of `jOhN` to upper case and the remaining to lower case", () =>{
        expect(capitalize('jOhN')).to.equal('John')
    });
    it("Converts the first character of `JoHn` to upper case and the remaining to lower case", () =>{
        expect(capitalize(`JoHn`)).to.equal('John')
    });
    it("Converts the character of `j` to upper case", () =>{
        expect(capitalize('j')).to.equal('J')
    });
   })