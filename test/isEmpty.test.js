import chai from "chai"
import isEmpty from "../src/isEmpty.js"
const expect = chai.expect

describe("IsEmpty", () => {
  it("Check if integer is considered empty", () => {
    expect(isEmpty(1)).to.equal(true)
  });
  it("Check if null is considered empty", () => {
    expect(isEmpty(null)).to.equal(true)
  });
  it("Check if boolean is considered empty", () => {
    expect(isEmpty(true)).to.equal(true)
  });
  it("Check if an empty array is considered empty", () => {
    expect(isEmpty([])).to.equal(true)
  });
  it("Check if a non-empty array is considered non-empty", () => {
    expect(isEmpty([1,2,3])).to.equal(false)
  });
  it("Check if an empty string is considered empty", () => {
    expect(isEmpty("")).to.equal(true)
  });
  it("Check if a string is considered non-empty", () => {
    expect(isEmpty("abc")).to.equal(false)
  });
  it("Check if an non-empty object is considered non-empty", () => {
    expect(isEmpty({ 'a': 1 })).to.equal(false)
  });
  it("Check if an empty object is considered empty", () => {
    expect(isEmpty({})).to.equal(true)
  });
})