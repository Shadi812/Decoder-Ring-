// Write your tests here!

const { caesar }= require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () => {

    it("should be able to encode", () => {
        expect(caesar("thinkful", 3)).to.equal("wklqnixo");
    });
    it("should be able to decode", () => {
        expect(caesar("wklqnixo", 3, false)).to.equal("thinkful");
    })
    it("should return false if shift value is 0, less than -25, greater than 25, or isn't present", () => {
        expect(caesar("thinkful", 0)).to.equal(false);
        expect(caesar("thinkful", -50)).to.equal(false);
        expect(caesar("thinkful", 50)).to.equal(false);
        expect(caesar("thinkful")).to.equal(false);
    });

    it("should ignore capital letters", () => {
        expect(caesar("THiNkfUL", 3)).to.equal("wklqnixo");
    });

    it("should handle shifts that go past the end of the alphabet", () => {
        expect(caesar("z", 3)).to.equal("c");
    });

    it("should maintain spaces and other nonalphabetic symbols in the message before and after encoding or decoding", () => {
        expect(caesar("Decoder_Ring", 5)).to.equal("ijhtijw_wnsl");
    });
});