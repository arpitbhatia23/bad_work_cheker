import { expect } from "chai";
import BadWords from "../src/index.js";

describe("BadWords Class", () => {
  let badWordsInstance;

  beforeEach(() => {
    badWordsInstance = new BadWords();
  });

  it("should detect bad words in text", () => {
    const text = "You are bad and ugly";
    expect(badWordsInstance.detect(text)).to.be.true;
  });

  it("should not detect bad words when there are none", () => {
    const text = "You are beautiful and kind";
    expect(badWordsInstance.detect(text)).to.be.false;
  });

  it("should get bad words from text", () => {
    const text = "He is stupid and bura";
    const result = badWordsInstance.getBadWordsFromText(text);
    expect(result).to.deep.equal(["stupid", "bura"]);
  });

  it("should count bad words correctly", () => {
    const text = "This is ugly and stupid and ganda";
    expect(badWordsInstance.countBadWords(text)).to.equal(3);
  });

  it("should add new custom words", () => {
    badWordsInstance.addWords(["evil", "wicked"]);
    expect(badWordsInstance.hasExactBadWord("evil")).to.be.true;
    expect(badWordsInstance.hasExactBadWord("wicked")).to.be.true;
  });

  it("should remove words correctly", () => {
    badWordsInstance.removeWords(["bad"]);
    expect(badWordsInstance.hasExactBadWord("bad")).to.be.false;
  });

  it("should check exact bad word correctly", () => {
    expect(badWordsInstance.hasExactBadWord("ugly")).to.be.true;
    expect(badWordsInstance.hasExactBadWord("good")).to.be.false;
  });

  it("should clean bad words from text with default mask", () => {
    const text = "He is bad and ugly";
    const cleaned = badWordsInstance.cleanWords(text);
    expect(cleaned).to.equal("He is *** and ****");
  });

  it("should clean bad words with custom mask character", () => {
    const text = "You are stupid";
    const cleaned = badWordsInstance.cleanWords(text, "#");
    expect(cleaned).to.equal("You are ######");
  });

  it("should return same text if no bad words are present", () => {
    const text = "Hello world";
    const cleaned = badWordsInstance.cleanWords(text);
    expect(cleaned).to.equal("Hello world");
  });

  it("should handle empty text gracefully", () => {
    const text = "";
    const cleaned = badWordsInstance.cleanWords(text);
    expect(cleaned).to.equal("");
  });
});
