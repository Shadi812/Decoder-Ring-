const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
    it("should be able to encode", () => {
        expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal("jrufscpw");
    });

    it("should be able to decode", () => {
        expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal("thinkful");
    });

    it("should include spaces and letters as well as special characters in the input", () => {
        expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.equal("message");
    });

    it("should maintain spaces throughout", () => {
        expect(substitution("hello world", "xoyqmcgrukswaflnthdjpzibev")).to.equal("rmwwl ilhwq");
    });

    it("should ignore capital letters", () => {
        expect(substitution("ThInKfUL", "xoyqmcgrukswaflnthdjpzibev")).to.equal("jrufscpw");
    });

    it("should return false if alphabet is not 26 characters", () => {
        expect(substitution("thinkful", "sfhskde")).to.equal(false);
    });

    it("should return false if all characters in alphabet are not unique", () => {
        expect(substitution("thinkful", "abcabcabc")).to.equal(false);
    });
})
