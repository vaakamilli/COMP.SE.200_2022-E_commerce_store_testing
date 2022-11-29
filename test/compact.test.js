import chai from "chai"
import compact from "../src/compact.js"
const expect = chai.expect

describe("Compact", () => {
  it("Creates an array of value corresponding to path", () => {
    expect(compact([0, 1, false, 2, '', 3])).to.eql([1,2,3])
  });
})