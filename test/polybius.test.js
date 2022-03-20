// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {

    it("should be able to encode", () => {
        expect(polybius("thinkful")).to.equal("4432423352125413");
    });

    it("should be able to decode", () => {
        expect(polybius("3251131343 2543241341", false)).to.equal("hello world");
    });

    it("should have a string as an output when encoding", () => {
        expect(polybius("thinkful")).to.equal("4432423352125413");
    });

    it("should return false if number of characters excluding spaces is not even when decoding", () => {
        expect(polybius("123", false)).to.equal(false);
    });

    it("should have spaces maintained throughout", () => {
        expect(polybius("hello world")).to.equal("3251131343 2543241341");
    });

    it("should ignore capital letters", () => {
        expect(polybius("HeLLo WORLd")).to.equal("3251131343 2543241341");
    });

    it("should show both letters 'i' and 'j' when decoding", () => {
        expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
    });
})
