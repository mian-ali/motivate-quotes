const lifeQuotes = [
  {
    text: 'Life is 10% what happens to us and 90% how we react to it.',
    author: 'Charles R. Swindoll',
  },
  {
    text: 'To live is the rarest thing in the world. Most people exist, that is all.',
    author: 'Oscar Wilde',
  },
  {
    text: 'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
  },
  {
    text: 'The biggest adventure you can take is to live the life of your dreams.',
    author: 'Oprah Winfrey',
  },
  {
    text: 'Life is short, and it is up to you to make it sweet.',
    author: 'Sarah Louise Delany',
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: 'Steve Jobs',
  },
  {
    text: 'Good friends, good books, and a sleepy conscience: this is the ideal life.',
    author: 'Mark Twain',
  },
  {
    text: 'The best way to predict your future is to create it.',
    author: 'Peter Drucker',
  },
  {
    text: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
    author: 'Maya Angelou',
  },
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
    author: 'Buddha',
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: 'Abraham Lincoln',
  },
  {
    text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'Happiness is not something readymade. It comes from your own actions.',
    author: 'Dalai Lama',
  },
  {
    text: 'To succeed in life, you need three things: a wishbone, a backbone and a funny bone.',
    author: 'Reba McEntire',
  },
  {
    text: 'The unexamined life is not worth living.',
    author: 'Socrates',
  },
  {
    text: 'The good life is one inspired by love and guided by knowledge.',
    author: 'Bertrand Russell',
  },
  {
    text: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: 'Sam Levenson',
  },
  {
    text: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    text: 'Life is about making an impact, not making an income.',
    author: 'Kevin Kruse',
  },
  {
    text: 'Turn your wounds into wisdom.',
    author: 'Oprah Winfrey',
  },
  {
    text: 'An unexamined life is not worth living.',
    author: 'Socrates',
  },
  {
    text: 'Believe that life is worth living and your belief will help create the fact.',
    author: 'William James',
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself.",
    author: 'George Bernard Shaw',
  },
  {
    text: 'The mind is everything. What you think you become.',
    author: 'Buddha',
  },
  {
    text: 'Life is a journey that must be traveled no matter how bad the roads and accommodations.',
    author: 'Oliver Goldsmith',
  },
  {
    text: 'Life is 10% what happens to us and 90% how we react to it.',
    author: 'Charles R. Swindoll',
  },
  {
    text: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: 'Anaïs Nin',
  },
  {
    text: 'Life is not about waiting for the storm to pass but learning to dance in the rain.',
    author: 'Vivian Greene',
  },
  {
    text: 'The purpose of life is a life of purpose.',
    author: 'Robert Byrne',
  },
  {
    text: 'The biggest adventure you can take is to live the life of your dreams.',
    author: 'Oprah Winfrey',
  },
  {
    text: 'You have within you right now, everything you need to deal with whatever the world can throw at you.',
    author: 'Brian Tracy',
  },
  {
    text: 'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
  },
  {
    text: 'Life is short, and it is up to you to make it sweet.',
    author: 'Sarah Louise Delany',
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: 'Steve Jobs',
  },
  {
    text: 'Good friends, good books, and a sleepy conscience: this is the ideal life.',
    author: 'Mark Twain',
  },
  {
    text: 'The best way to predict your future is to create it.',
    author: 'Peter Drucker',
  },
  {
    text: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
    author: 'Maya Angelou',
  },
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
    author: 'Buddha',
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: 'Abraham Lincoln',
  },
  {
    text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'Happiness is not something readymade. It comes from your own actions.',
    author: 'Dalai Lama',
  },
  {
    text: 'To succeed in life, you need three things: a wishbone, a backbone and a funny bone.',
    author: 'Reba McEntire',
  },
  {
    text: 'The unexamined life is not worth living.',
    author: 'Socrates',
  },
  {
    text: 'The good life is one inspired by love and guided by knowledge.',
    author: 'Bertrand Russell',
  },
  {
    text: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: 'Sam Levenson',
  },
  {
    text: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    text: 'Life is about making an impact, not making an income.',
    author: 'Kevin Kruse',
  },
  {
    text: 'Turn your wounds into wisdom.',
    author: 'Oprah Winfrey',
  },
  {
    text: 'An unexamined life is not worth living.',
    author: 'Socrates',
  },
  {
    text: 'Believe that life is worth living and your belief will help create the fact.',
    author: 'William James',
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself.",
    author: 'George Bernard Shaw',
  },
  {
    text: 'The mind is everything. What you think you become.',
    author: 'Buddha',
  },
  {
    text: 'Life is a journey that must be traveled no matter how bad the roads and accommodations.',
    author: 'Oliver Goldsmith',
  },
  {
    text: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: 'Anaïs Nin',
  },
  {
    text: 'Life is not about waiting for the storm to pass but learning to dance in the rain.',
    author: 'Vivian Greene',
  },
  {
    text: 'The purpose of life is a life of purpose.',
    author: 'Robert Byrne',
  },
  {
    text: 'You have within you right now, everything you need to deal with whatever the world can throw at you.',
    author: 'Brian Tracy',
  },
  {
    text: 'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
  },
  {
    text: 'Life is short, and it is up to you to make it sweet.',
    author: 'Sarah Louise Delany',
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: 'Steve Jobs',
  },
  {
    text: 'Good friends, good books, and a sleepy conscience: this is the ideal life.',
    author: 'Mark Twain',
  },
  {
    text: 'The best way to predict your future is to create it.',
    author: 'Peter Drucker',
  },
  {
    text: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
    author: 'Maya Angelou',
  },
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
    author: 'Buddha',
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: 'Abraham Lincoln',
  },
  {
    text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'Happiness is not something readymade. It comes from your own actions.',
    author: 'Dalai Lama',
  },
  {
    text: 'To succeed in life, you need three things: a wishbone, a backbone and a funny bone.',
    author: 'Reba McEntire',
  },
  {
    text: 'The unexamined life is not worth living.',
    author: 'Socrates',
  },
  {
    text: 'The good life is one inspired by love and guided by knowledge.',
    author: 'Bertrand Russell',
  },
  {
    text: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: 'Sam Levenson',
  },
  {
    text: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    text: 'Life is about making an impact, not making an income.',
    author: 'Kevin Kruse',
  },
  {
    text: 'Turn your wounds into wisdom.',
    author: 'Oprah Winfrey',
  },
  {
    text: 'An unexamined life is not worth living.',
    author: 'Socrates',
  },
  {
    text: 'Believe that life is worth living and your belief will help create the fact.',
    author: 'William James',
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself.",
    author: 'George Bernard Shaw',
  },
];

module.exports = lifeQuotes;
