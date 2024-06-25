# Motivate Quotes

[![GitHub license](https://img.shields.io/github/license/mian-ali/motivate-quotes.svg?style=flat&logo=github)](https://github.com/mian-ali/motivate-quotes/blob/publish/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/mian-ali/motivate-quotes/pulls)

**Motivate Quotes is an [NPM](https://www.npmjs.com/package/motivate-quotes) package that provides inspiring and motivational quotes from various categories such as Programming, Education, Trading, Business, Life, Fitness, Creativity, and Leadership.**

Click [here](https://www.npmjs.com/package/motivate-quotes) to view this package on the NPM registry.

## Getting Started

[![NPM](https://nodei.co/npm/motivate-quotes.png?compact=true)](https://nodei.co/npm/motivate-quotes/)

### Installation

To use this package, install it via npm:

```bash
$ npm install motivate-quotes

```

## Usage

Import the functions from the **motivate-quotes** package and use them as demonstrated below:

```js
import { getQuotes, getRandomQuote, getDayOfQuote } from 'motivate-quotes';

// Fetch quotes from a specific category
try {
  const quotes = getQuotes({
    author: false,
    numberOfQuotes: 2,
    category: 'Programming',
  });
  console.log(quotes);
} catch (error) {
  console.error(error.message);
}

// Fetch a random quote from a specific category
const randomQuote = getRandomQuote('Education');
console.log(randomQuote);

// Fetch the quote of the day
const dayOfQuote = getDayOfQuote();
console.log(dayOfQuote);
```

## Functions

### `getQuotes(options)`

Fetches quotes based on the specified options.

<!--
| Name             | Type     | Description                                                                                      |
|------------------|----------|--------------------------------------------------------------------------------------------------|
| **category**     | string   | The category of quotes. Required. Available categories: **Programming, Education, Trading, Business, Life, Fitness, Creativity, Leadership**. |
| **author**       | boolean  | Whether to include the author's name. Optional. Default is **true**.                              |
| **numberOfQuotes** | number  | The number of quotes to return. Optional. Default is **1**.                                       | -->

- **options**: An object with the following properties:
  - `author` (boolean): Whether to include the author's name. Default is `true`.
  - `numberOfQuotes` (number): The number of quotes to return. Default is `1`.
  - `category` (string): The category of quotes. Available categories: Programming, Education, Trading, Business, Life, Fitness, Creativity, Leadership.

Returns an array of quotes based on the specified options.

Example:

```json
[
  {
    "text": "First, solve the problem. Then, write the code.",
    "author": "John Johnson"
  },
  {
    "text": "Experience is the name everyone gives to their mistakes.",
    "author": "Oscar Wilde"
  }
]
```

### `getRandomQuote(category)`

Fetches a random quote from the specified category.

<!--- | Name             | Type     | Description                                                                                      |
|------------------|----------|--------------------------------------------------------------------------------------------------|
| **category**     | string   | The category of quotes. Required. Available categories: **Programming, Education, Trading, Business, Life, Fitness, Creativity, Leadership**. | --->

- `category` (string): The category of quotes. Available categories: Programming, Education, Trading, Business, Life, Fitness, Creativity, Leadership.

Returns an array of quotes based on the specified options.

Example:

```json
{
  "text": "Education is the most powerful weapon which you can use to change the world.",
  "author": "Nelson Mandela"
}
```

### `getDayOfQuote()`

Fetches the quote of the day.

Returns the quote of the day.

Example:

```json
{
  "text": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs"
}
```

## Examples

To view the examples, clone the **motivate-quotes** repo and install the dependencies:

```bash
$ git clone https://github.com/mian-ali/motivate-quotes.git
$ cd motivate-quotes
$ npm install
```

Then run the [`examples/index.js`](./examples/index.js):

```bash
$ node index.js
```

## Tests

- `npm run test`: Runs unit tests
- `npm run format`: Run eslint format

## Author

**[Ali Ahmad](https://github.com/mian-ali)**
