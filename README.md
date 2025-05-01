# 🛑 BadWords

A comprehensive JavaScript package for detecting, counting, and filtering profane or inappropriate words in text content. Supports both **English** and **Hindi** bad words out of the box.

[![npm version](https://img.shields.io/npm/v/bad-word-checker.svg)](https://www.npmjs.com/package/bad-word-checker)
[![npm downloads](https://img.shields.io/npm/dm/bad-word-checker.svg)](https://www.npmjs.com/package/bad-word-checker)
[![license](https://img.shields.io/github/license/arpitbhatia23/bad_work_cheker.svg)](https://github.com/arpitbhatia23/bad_work_cheker/blob/main/LICENSE)

## 🌟 Why choose bad-word-checker?

- 🔍 **Accurate Detection**: Precisely identifies inappropriate language
- 🌐 **Multilingual Support**: Built-in support for both English and Hindi profanity
- ⚙️ **Customizable**: Easily add or remove words from the detection list
- 🛡️ **Content Protection**: Keep your application's content clean and appropriate
- 🚀 **Simple API**: Easy to integrate with minimal configuration
- 🔧 **Lightweight**: Zero dependencies, minimal impact on your bundle size

## 📦 Installation

```bash
npm install bad-word-checker
```

## 🚀 Usage

### Basic Usage

```javascript
import BadWords from "bad-word-checker";

// Initialize with default bad words (English and Hindi)
const badWordsFilter = new BadWords();

// Check if text contains any bad words
const hasBadWords = badWordsFilter.detect(
  "This text might have some bad words"
);
console.log(hasBadWords); // true or false

// Clean bad words from text (replace with asterisks)
const cleanText = badWordsFilter.cleanWords(
  "This text might have some bad words"
);
console.log(cleanText); // "This text might have some *** ***"
```

### Advanced Usage

```javascript
// Initialize with default words plus custom bad words
const customBadWords = ["custom", "inappropriate", "words"];
const badWordsFilter = new BadWords(customBadWords);

// Add more words to the bad words list
badWordsFilter.addWords(["more", "bad", "words"]);

// Remove words from the bad words list
badWordsFilter.removeWords(["words"]);

// Get all bad words found in text
const foundBadWords = badWordsFilter.getBadWordsFromText(
  "This text has some bad words"
);
console.log(foundBadWords); // ["bad", "words"]

// Count bad words in text
const count = badWordsFilter.countBadWords("This text has some bad words");
console.log(count); // 2

// Check if a specific word is in the bad words list
const isBad = badWordsFilter.hasExactBadWord("bad");
console.log(isBad); // true

// Clean bad words with a custom mask character
const cleanText = badWordsFilter.cleanWords(
  "This text has some bad words",
  "#"
);
console.log(cleanText); // "This text has some ### #####"
```

## 📚 API Reference

### Constructor

```javascript
new BadWords((customWords = []));
```

- `customWords` (optional): Array of additional words to be considered inappropriate

### Methods

#### detect(text)

Checks if the given text contains any bad words.

- Returns: `boolean`

#### getBadWordsFromText(text)

Returns an array of all bad words found in the text.

- Returns: `string[]`

#### countBadWords(text)

Returns the count of bad words in the text.

- Returns: `number`

#### addWords(wordsArray = [])

Adds words to the bad words list.

- `wordsArray`: Array of words to add

#### removeWords(wordsArray = [])

Removes words from the bad words list.

- `wordsArray`: Array of words to remove

#### hasExactBadWord(word)

Checks if the exact word is in the bad words list.

- Returns: `boolean`

#### cleanWords(text, maskChar = "\*")

Replaces all bad words in the text with the specified mask character.

- `text`: The text to clean
- `maskChar`: Character used to mask bad words (default: "\*")
- Returns: `string`

## 🔍 Use Cases

- **Chat Applications**: Filter inappropriate messages
- **User Comments**: Moderate user-generated content
- **Social Media**: Detect and censor offensive language
- **Children's Applications**: Ensure content remains age-appropriate
- **Content Management Systems**: Automate content moderation
- **Forums & Message Boards**: Maintain community standards

## 📝 Examples

### Filtering User Input

```javascript
import BadWords from "bad-word-checker";

function handleUserSubmit(userContent) {
  const filter = new BadWords();

  if (filter.detect(userContent)) {
    return {
      success: false,
      message: "Please remove inappropriate language",
      badWordsCount: filter.countBadWords(userContent),
    };
  }

  return {
    success: true,
    content: userContent,
  };
}
```

### Creating a Comment Moderation System

```javascript
import BadWords from "bad-word-checker";

class CommentModerator {
  constructor() {
    this.filter = new BadWords();
    // Add application-specific words
    this.filter.addWords(["unwanted", "custom", "terms"]);
  }

  moderateComment(comment) {
    // Replace bad words with asterisks
    return this.filter.cleanWords(comment);
  }

  validateComment(comment) {
    const badWordsList = this.filter.getBadWordsFromText(comment);

    if (badWordsList.length > 0) {
      return {
        valid: false,
        reason: "Contains inappropriate words",
        words: badWordsList,
      };
    }

    return { valid: true };
  }
}
```

## 📋 License

MIT

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Made with ❤️ for content moderation
