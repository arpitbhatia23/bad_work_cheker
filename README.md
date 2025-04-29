# BadWords

A comprehensive JavaScript package for detecting, counting, and filtering profane or inappropriate words in text content, with support for both English and Hindi bad words.

## Features

- Detect the presence of bad words in a text string
- Count the number of bad words in text
- Extract bad words from text
- Add custom words to the bad words list
- Remove words from the bad words list
- Check if a specific word is considered inappropriate
- Clean/mask bad words in text with a custom character

## Installation

```bash
npm install badwords-filter
```

## Usage

### Basic Usage

```javascript
import BadWords from "badwords-filter";

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

## API Reference

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

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
