import chai from "chai"
import at from "../src/at.js"
const expect = chai.expect
const object = { a: [{ b: { c: 3 } }, "test"] }
const object2 = { a: null }

describe("At", () => {
  it("Creates an array of value corresponding to path", () => {
    expect(at(object, ['a[0].b.c'])).to.eql([3])
  });
  it("Creates an array of values corresponding to different paths", () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([3,"test"])
  });
  it("Creates an array of values corresponding to same paths", () => {
    expect(at(object, ['a[1]', 'a[1]'])).to.eql(["test","test"])
  });
  it("Creates an array of values corresponding to an empty path", () => {
    expect(at(object, [])).to.eql([])
  });
  it("Creates an array of a null value corresponding to a path", () => {
    expect(at(object2, ['a'])).to.eql([null])
  });
})
