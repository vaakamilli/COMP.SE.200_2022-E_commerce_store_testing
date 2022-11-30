import chai from "chai"
import compact from "../src/compact.js"
const expect = chai.expect

describe("Compact", () => {
  it("Creates an array with all falsey values removed", () => {
    expect(compact([0, 1, false, 2, '', 3])).to.eql([1,2,3])
  });
})