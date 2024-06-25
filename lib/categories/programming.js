const programmingQuotes = [
  {
    text: 'Talk is cheap. Show me the code.',
    author: 'Linus Torvalds',
  },
  {
    text: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    author: 'Harold Abelson',
  },
  {
    text: 'Truth can only be found in one place: the code.',
    author: 'Robert C. Martin',
  },
  {
    text: "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: 'Larry Niven',
  },
  {
    text: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    author: 'John Woods',
  },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler',
  },
  {
    text: 'Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.',
    author: 'David Leinweber',
  },
  {
    text: 'The most disastrous thing that you can ever learn is your first programming language.',
    author: 'Alan Kay',
  },
  {
    text: "Programming isn't about what you know; it's about what you can figure out.",
    author: 'Chris Pine',
  },
  {
    text: 'The only way to learn a new programming language is by writing programs in it.',
    author: 'Dennis Ritchie',
  },
  {
    text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    author: 'Dan Salomon',
  },
  {
    text: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.',
    author: 'Linus Torvalds',
  },
  {
    text: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson',
  },
  {
    text: 'Experience is the name everyone gives to their mistakes.',
    author: 'Oscar Wilde',
  },
  {
    text: 'In order to be irreplaceable, one must always be different.',
    author: 'Coco Chanel',
  },
  {
    text: 'Java is to JavaScript what car is to Carpet.',
    author: 'Chris Heilmann',
  },
  {
    text: 'Knowledge is power.',
    author: 'Francis Bacon',
  },
  {
    text: "Sometimes it is better to leave something alone, to pause, and that's very true of programming.",
    author: 'Joyce Wheeler',
  },
  {
    text: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.',
    author: 'Antoine de Saint-Exupery',
  },
  {
    text: 'Ruby is rubbish! PHP is phpantastic!',
    author: 'Nikita Popov',
  },
  {
    text: 'Code is like humor. When you have to explain it, it’s bad.',
    author: 'Cory House',
  },
  {
    text: 'Fix the cause, not the symptom.',
    author: 'Steve Maguire',
  },
  {
    text: 'Optimism is an occupational hazard of programming: feedback is the treatment.',
    author: 'Kent Beck',
  },
  {
    text: 'When to use iterative development? You should use iterative development only on projects that you want to succeed.',
    author: 'Martin Fowler',
  },
  {
    text: 'Simplicity is the soul of efficiency.',
    author: 'Austin Freeman',
  },
  {
    text: 'Before software can be reusable it first has to be usable.',
    author: 'Ralph Johnson',
  },
  {
    text: 'Make it work, make it right, make it fast.',
    author: 'Kent Beck',
  },
  {
    text: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    author: 'Harold Abelson',
  },
  {
    text: "How you look at it is pretty much how you'll see it.",
    author: 'Steve Jobs',
  },
  {
    text: 'The function of good software is to make the complex appear to be simple.',
    author: 'Grady Booch',
  },
  {
    text: 'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
    author: 'Anonymous',
  },
  {
    text: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
    author: 'Edsger Dijkstra',
  },
  {
    text: 'Software and cathedrals are much the same – first we build them, then we pray.',
    author: 'Anonymous',
  },
  {
    text: 'Walking on water and developing software from a specification are easy if both are frozen.',
    author: 'Edward V. Berard',
  },
  {
    text: 'It’s not a bug – it’s an undocumented feature.',
    author: 'Anonymous',
  },
  {
    text: 'One man’s crappy software is another man’s full-time job.',
    author: 'Jessica Gaston',
  },
  {
    text: 'A good programmer is someone who always looks both ways before crossing a one-way street.',
    author: 'Doug Linder',
  },
  {
    text: "Software undergoes beta testing shortly before it’s released. Beta is Latin for 'still doesn’t work.'",
    author: 'Anonymous',
  },
  {
    text: 'The software isn’t finished until the last user is dead.',
    author: 'Anonymous',
  },
  {
    text: 'There are only two kinds of programming languages: those people always bitch about and those nobody uses.',
    author: 'Bjarne Stroustrup',
  },
  {
    text: 'In a room full of top software designers, if two agree on the same thing, that’s a majority.',
    author: 'Bill Curtis',
  },
  {
    text: 'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
    author: 'Seymour Cray',
  },
  {
    text: "Don't worry if it doesn't work right. If everything did, you'd be out of a job.",
    author: "Mosher's Law of Software Engineering",
  },
  {
    text: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
    author: 'Bill Gates',
  },
  {
    text: 'The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.',
    author: 'Tom Cargill',
  },
  {
    text: 'Programming can be fun, so can cryptography; however they should not be combined.',
    author: 'Kreitzberg and Shneiderman',
  },
  {
    text: 'Copy-and-Paste was programmed by programmers for programmers actually.',
    author: 'Anonymous',
  },
  {
    text: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    author: 'John Woods',
  },
  {
    text: 'You are not a real programmer until you end all your sentences with a semicolon.',
    author: 'Anonymous',
  },
  {
    text: 'Programming is like sex. One mistake and you have to support it for the rest of your life.',
    author: 'Michael Sinz',
  },
  {
    text: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    author: 'Anonymous',
  },
  {
    text: 'It’s not a bug – it’s an undocumented feature.',
    author: 'Anonymous',
  },
  {
    text: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    author: 'Louis Srygley',
  },
  {
    text: 'Java is to JavaScript what car is to Carpet.',
    author: 'Chris Heilmann',
  },
  {
    text: 'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.',
    author: 'Gerald Weinberg',
  },
  {
    text: 'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
    author: 'Seymour Cray',
  },
  {
    text: 'To iterate is human, to recurse divine.',
    author: 'L. Peter Deutsch',
  },
  {
    text: 'Program testing can be used to show the presence of bugs, but never to show their absence!',
    author: 'Edsger Dijkstra',
  },
  {
    text: 'The most important property of a program is whether it accomplishes the intention of its user.',
    author: 'C.A.R. Hoare',
  },
  {
    text: 'The best performance improvement is the transition from the nonworking state to the working state.',
    author: 'John Ousterhout',
  },
  {
    text: 'Computers are good at following instructions, but not at reading your mind.',
    author: 'Donald Knuth',
  },
  {
    text: 'Simplicity is prerequisite for reliability.',
    author: 'Edsger Dijkstra',
  },
  {
    text: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
    author: 'Edsger Dijkstra',
  },
  {
    text: 'Programming is the art of telling another human being what one wants the computer to do.',
    author: 'Donald Knuth',
  },
  {
    text: 'Testing can show the presence of errors, but not their absence.',
    author: 'Edsger Dijkstra',
  },
  {
    text: 'When debugging, novices insert corrective code; experts remove defective code.',
    author: 'Richard Pattis',
  },
  {
    text: 'A computer program does what you tell it to do, not what you want it to do.',
    author: 'Motivate-quotes',
  },
  {
    text: 'The hardest part of design is keeping features out.',
    author: 'Donald Norman',
  },
  {
    text: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    author: 'Louis Srygley',
  },
  {
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    author: 'Brian Kernighan',
  },
  {
    text: 'Controlling complexity is the essence of computer programming.',
    author: 'Brian Kernighan',
  },
  {
    text: "Programming is not about typing, it's about thinking.",
    author: 'Rich Hickey',
  },
  {
    text: 'Simplicity is the soul of efficiency.',
    author: 'Austin Freeman',
  },
  {
    text: 'The most important property of a program is whether it accomplishes the intention of its user.',
    author: 'C.A.R. Hoare',
  },
  {
    text: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    author: 'Anonymous',
  },
  {
    text: 'Walking on water and developing software from a specification are easy if both are frozen.',
    author: 'Edward V. Berard',
  },
  {
    text: 'The hardest part of design is keeping features out.',
    author: 'Donald Norman',
  },
  {
    text: 'The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.',
    author: 'Tom Cargill',
  },
  {
    text: 'There are only two kinds of programming languages: those people always bitch about and those nobody uses.',
    author: 'Bjarne Stroustrup',
  },
  {
    text: 'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.',
    author: 'Gerald Weinberg',
  },
  {
    text: "Don't worry if it doesn't work right. If everything did, you'd be out of a job.",
    author: "Mosher's Law of Software Engineering",
  },
  {
    text: 'A good programmer is someone who always looks both ways before crossing a one-way street.',
    author: 'Doug Linder',
  },
  {
    text: 'It’s not a bug – it’s an undocumented feature.',
    author: 'Anonymous',
  },
  {
    text: 'Copy-and-Paste was programmed by programmers for programmers actually.',
    author: 'Anonymous',
  },
  {
    text: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    author: 'John Woods',
  },
  {
    text: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
    author: 'Bill Gates',
  },
  {
    text: 'The software isn’t finished until the last user is dead.',
    author: 'Anonymous',
  },
  {
    text: 'Programming can be fun, so can cryptography; however they should not be combined.',
    author: 'Kreitzberg and Shneiderman',
  },
  {
    text: 'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
    author: 'Anonymous',
  },
  {
    text: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    author: 'Harold Abelson',
  },
];

module.exports = programmingQuotes;
