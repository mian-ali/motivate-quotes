const businessQuotes = [
  {
    text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    text: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: 'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: 'Zig Ziglar',
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: 'John D. Rockefeller',
  },
  {
    text: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    text: 'Success usually comes to those who are too busy to be looking for it.',
    author: 'Henry David Thoreau',
  },
  {
    text: "Opportunities don't happen, you create them.",
    author: 'Chris Grosser',
  },
  {
    text: 'The successful warrior is the average man, with laser-like focus.',
    author: 'Bruce Lee',
  },
  {
    text: 'I find that the harder I work, the more luck I seem to have.',
    author: 'Thomas Jefferson',
  },
  {
    text: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    author: 'Albert Schweitzer',
  },
  {
    text: 'If you are not willing to risk the usual, you will have to settle for the ordinary.',
    author: 'Jim Rohn',
  },
  {
    text: 'The ones who are crazy enough to think they can change the world, are the ones who do.',
    author: 'Anonymous',
  },
  {
    text: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'All our dreams can come true, if we have the courage to pursue them.',
    author: 'Walt Disney',
  },
  {
    text: 'Success is walking from failure to failure with no loss of enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    text: 'The only place where success comes before work is in the dictionary.',
    author: 'Vidal Sassoon',
  },
  {
    text: 'Don’t let the fear of losing be greater than the excitement of winning.',
    author: 'Robert Kiyosaki',
  },
  {
    text: 'The only way to achieve the impossible is to believe it is possible.',
    author: 'Charles Kingsleigh',
  },
  {
    text: 'You learn more from failure than from success. Don’t let it stop you. Failure builds character.',
    author: 'Unknown',
  },
  {
    text: "Success is not just about making money, it's about making a difference.",
    author: 'Unknown',
  },
  {
    text: 'Don’t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson',
  },
  {
    text: "It's hard to beat a person who never gives up.",
    author: 'Babe Ruth',
  },
  {
    text: 'I never dreamed about success. I worked for it.',
    author: 'Estée Lauder',
  },
  {
    text: 'Don’t be afraid to give up the good to go for the great.',
    author: 'John D. Rockefeller',
  },
  {
    text: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    author: 'Albert Schweitzer',
  },
  {
    text: 'If you are not willing to risk the usual, you will have to settle for the ordinary.',
    author: 'Jim Rohn',
  },
  {
    text: 'The ones who are crazy enough to think they can change the world, are the ones who do.',
    author: 'Anonymous',
  },
  {
    text: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'All our dreams can come true, if we have the courage to pursue them.',
    author: 'Walt Disney',
  },
  {
    text: 'Success is walking from failure to failure with no loss of enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    text: 'The only place where success comes before work is in the dictionary.',
    author: 'Vidal Sassoon',
  },
  {
    text: 'Don’t let the fear of losing be greater than the excitement of winning.',
    author: 'Robert Kiyosaki',
  },
  {
    text: 'The only way to achieve the impossible is to believe it is possible.',
    author: 'Charles Kingsleigh',
  },
  {
    text: 'You learn more from failure than from success. Don’t let it stop you. Failure builds character.',
    author: 'Unknown',
  },
  {
    text: "Success is not just about making money, it's about making a difference.",
    author: 'Unknown',
  },
  {
    text: 'Don’t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson',
  },
  {
    text: "It's hard to beat a person who never gives up.",
    author: 'Babe Ruth',
  },
  {
    text: 'I never dreamed about success. I worked for it.',
    author: 'Estée Lauder',
  },
  {
    text: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    author: 'Albert Schweitzer',
  },
  {
    text: 'If you are not willing to risk the usual, you will have to settle for the ordinary.',
    author: 'Jim Rohn',
  },
  {
    text: 'The ones who are crazy enough to think they can change the world, are the ones who do.',
    author: 'Anonymous',
  },
  {
    text: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'All our dreams can come true, if we have the courage to pursue them.',
    author: 'Walt Disney',
  },
  {
    text: 'Success is walking from failure to failure with no loss of enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    text: 'The only place where success comes before work is in the dictionary.',
    author: 'Vidal Sassoon',
  },
  {
    text: 'Don’t let the fear of losing be greater than the excitement of winning.',
    author: 'Robert Kiyosaki',
  },
  {
    text: 'The only way to achieve the impossible is to believe it is possible.',
    author: 'Charles Kingsleigh',
  },
  {
    text: 'You learn more from failure than from success. Don’t let it stop you. Failure builds character.',
    author: 'Unknown',
  },
  {
    text: "Success is not just about making money, it's about making a difference.",
    author: 'Unknown',
  },
  {
    text: 'Don’t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson',
  },
  {
    text: "It's hard to beat a person who never gives up.",
    author: 'Babe Ruth',
  },
  {
    text: 'I never dreamed about success. I worked for it.',
    author: 'Estée Lauder',
  },
  {
    text: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    author: 'Albert Schweitzer',
  },
  {
    text: 'If you are not willing to risk the usual, you will have to settle for the ordinary.',
    author: 'Jim Rohn',
  },
  {
    text: 'The ones who are crazy enough to think they can change the world, are the ones who do.',
    author: 'Anonymous',
  },
  {
    text: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'All our dreams can come true, if we have the courage to pursue them.',
    author: 'Walt Disney',
  },
  {
    text: 'Success is walking from failure to failure with no loss of enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    text: 'The only place where success comes before work is in the dictionary.',
    author: 'Vidal Sassoon',
  },
  {
    text: 'Don’t let the fear of losing be greater than the excitement of winning.',
    author: 'Robert Kiyosaki',
  },
  {
    text: 'The only way to achieve the impossible is to believe it is possible.',
    author: 'Charles Kingsleigh',
  },
  {
    text: 'You learn more from failure than from success. Don’t let it stop you. Failure builds character.',
    author: 'Unknown',
  },
  {
    text: "Success is not just about making money, it's about making a difference.",
    author: 'Unknown',
  },
  {
    text: 'Don’t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson',
  },
  {
    text: "It's hard to beat a person who never gives up.",
    author: 'Babe Ruth',
  },
  {
    text: 'I never dreamed about success. I worked for it.',
    author: 'Estée Lauder',
  },
  {
    text: 'The best way to predict the future is to create it.',
    author: 'Peter Drucker',
  },
  {
    text: 'Innovation distinguishes between a leader and a follower.',
    author: 'Steve Jobs',
  },
  {
    text: 'The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.',
    author: 'Michelangelo',
  },
  {
    text: 'If you can dream it, you can do it.',
    author: 'Walt Disney',
  },
  {
    text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    author: 'Steve Jobs',
  },
  {
    text: 'The challenge is not to be perfect. It is to keep things moving.',
    author: 'Ingvar Kamprad (IKEA founder)',
  },
  {
    text: 'In God we trust. All others must bring data.',
    author: 'W. Edwards Deming',
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: 'John D. Rockefeller',
  },
  {
    text: 'The key is to set realistic expectations, and then not to give up until you go beyond them.',
    author: 'Ralph Lauren',
  },
  {
    text: "It's hard to fail; but it's worse never to have tried to succeed.",
    author: 'Theodore Roosevelt',
  },
  {
    text: 'Leadership is the art of getting someone else to do something you want done because they want to do it.',
    author: 'Dwight D. Eisenhower',
  },
  {
    text: 'The only person you are destined to become is the person you decide to be.',
    author: 'Ralph Waldo Emerson',
  },
  {
    text: 'The mind is everything. What you think you become.',
    author: 'Buddha',
  },
  {
    text: 'The difference between successful people and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.',
    author: 'Vince Lombardi',
  },
  {
    text: "The critical ingredient is getting up and doing something. It's by doing that actions turn into habits and then moments turn into days and weeks turn into months and then years become a life.",
    author: 'Urban Meyer',
  },
  {
    text: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison',
  },
  {
    text: 'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
    author: 'Chinese Proverb',
  },
  {
    text: 'It is not the mountain we conquer, but ourselves.',
    author: 'Edmund Hillary',
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: 'Zig Ziglar',
  },
  {
    text: "If you're not embarrassed by the first version of your product, you've launched too late.",
    author: 'Reid Hoffman',
  },
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: 'John D. Rockefeller',
  },
];

module.exports = businessQuotes;
