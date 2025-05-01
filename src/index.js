import defaultBadWords from "./badword.js";
import badwords from "./hindibadword.js";
const map = {
  a: "[a@4]",
  b: "[b8]",
  c: "[c(]",
  d: "[d]",
  e: "[e3]",
  f: "[f]",
  g: "[g9]",
  h: "[h#]",
  i: "[i1!|]",
  l: "[l1|]",
  n: "[n]",
  o: "[o0@]",
  s: "[s5$]",
  t: "[t+7]",
  u: "[uµ]",
  k: "[k]",
};
export default class BadWords {
  constructor(customWords = []) {
    this.badWords = new Set([...defaultBadWords, ...badwords, ...customWords]);
  }

  detect(text) {
    if (!text) return false;
    function escapeRegExp(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    // Escape special characters in the bad words for regex safety
    const escapedWords = Array.from(this.badWords).map((word) =>
      escapeRegExp(word)
    );

    const regex = new RegExp(`(?:${escapedWords.join("|")})`, "giu");
    const result = regex.test(text.toLowerCase());
    return result;
  }

  getBadWordsFromText(text) {
    const words = text.toLowerCase().split(/\s+/);
    return words.filter((word) => this.badWords.has(word));
  }

  countBadWords(text) {
    return this.getBadWordsFromText(text).length;
  }

  addWords(wordsArray = []) {
    wordsArray.forEach((word) => this.badWords.add(word.toLowerCase()));
  }

  removeWords(wordsArray = []) {
    wordsArray.forEach((word) => this.badWords.delete(word.toLowerCase()));
  }

  hasExactBadWord(word) {
    return this.badWords.has(word.toLowerCase());
  }

  cleanWords(text, maskChar = "*") {
    if (!text || this.badWords.length === 0) return text;

    function escapeRegExp(str) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    // Escape special characters in the bad words for regex safety
    const escapedWords = Array.from(this.badWords).map((word) =>
      escapeRegExp(word)
    );

    const regex = new RegExp(`(?:${escapedWords.join("|")})`, "giu");

    // Replace bad words with the mask character (e.g., "*")
    return text.replace(regex, (match) => maskChar.repeat(match.length));
  }
}
