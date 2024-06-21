const tradingQuotes =[
  {
    text: "The goal of a successful trader is to make the best trades. Money is secondary.",
    author: "Alexander Elder"
  },
  {
    text: "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
    author: "Philip Fisher"
  },
  {
    text: "The four most dangerous words in investing are: 'This time it's different.'",
    author: "Sir John Templeton"
  },
  {
    text: "In investing, what is comfortable is rarely profitable.",
    author: "Robert Arnott"
  },
  {
    text: "Every once in a while, the market does something so stupid it takes your breath away.",
    author: "Jim Cramer"
  },
  {
    text: "The secret to investing is to figure out the value of something – and then pay a lot less.",
    author: "Joel Greenblatt"
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin"
  },
  {
    text: "The stock market is a device for transferring money from the impatient to the patient.",
    author: "Warren Buffett"
  },
  {
    text: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett"
  },
  {
    text: "The stock market is a no-called-strike game. You don't have to swing at everything – you can wait for your pitch.",
    author: "Warren Buffett"
  },
  {
    text: "The most important quality for an investor is temperament, not intellect.",
    author: "Warren Buffett"
  },
  {
    text: "In trading and investing, it's not about how much you make but how much you don't lose.",
    author: "Bernard Baruch"
  },
  {
    text: "I made my money by selling too soon.",
    author: "Bernard Baruch"
  },
  {
    text: "If you don't respect risk, eventually they'll carry you out.",
    author: "Larry Hite"
  },
  {
    text: "There are old traders and there are bold traders, but there are very few old, bold traders.",
    author: "Ed Seykota"
  },
  {
    text: "The elements of good trading are: (1) cutting losses, (2) cutting losses, and (3) cutting losses. If you can follow these three rules, you may have a chance.",
    author: "Ed Seykota"
  },
  {
    text: "Trading is a waiting game played with discipline.",
    author: "Michael Covel"
  },
  {
    text: "The fundamental law of investing is the uncertainty of the future.",
    author: "Peter Bernstein"
  },
  {
    text: "Good trading is not about being right, it's about being profitable.",
    author: "zen-quotes"
  },
  {
    text: "Your success in trading will come not from how hard you try, but from how well you observe.",
    author: "Brett Steenbarger"
  },
  {
    text: "The goal of a successful trader is to make the best trades. Money is secondary.",
    author: "Alexander Elder"
  },
  {
    text: "If you don't find a way to make money while you sleep, you will work until you die.",
    author: "Warren Buffett"
  },
  {
    text: "Trading doesn't just reveal your character, it also builds it if you stay in the game long enough.",
    author: "Yvan Byeajee"
  },
  {
    text: "It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong.",
    author: "George Soros"
  },
  {
    text: "I believe in analysis and not forecasting.",
    author: "Nicolas Darvas"
  },
  {
    text: "Price is what you pay. Value is what you get.",
    author: "Warren Buffett"
  },
  {
    text: "The biggest risk of all is not taking one.",
    author: "Mellody Hobson"
  },
  {
    text: "Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.",
    author: "Warren Buffett"
  },
  {
    text: "Letting losses run is the most serious mistake made by most investors.",
    author: "William O'Neil"
  },
  {
    text: "The best traders have no ego. You have to swallow your pride and get out of the losses.",
    author: "Tom Baldwin"
  },
  {
    text: "When I get hurt in the market, I get the hell out. It doesn't do to whine about it.",
    author: "Martin Schwartz"
  },
  {
    text: "The goal of a successful trader is to make the best trades. Money is secondary.",
    author: "Alexander Elder"
  },
  {
    text: "Markets can remain irrational longer than you can remain solvent.",
    author: "John Maynard Keynes"
  },
  {
    text: "It takes courage to be a pig.",
    author: "Stanley Druckenmiller"
  },
  {
    text: "It's not the bulls and bears you need to avoid – it's the bum steers.",
    author: "Chuck Hillis"
  },
  {
    text: "The market is not a guessing game. It’s a game of probabilities.",
    author: "Mark Douglas"
  },
  {
    text: "Do more of what works and less of what doesn’t.",
    author: "Steve Clark"
  },
  {
    text: "Amateurs think about how much money they can make. Professionals think about how much money they could lose.",
    author: "Jack Schwager"
  },
  {
    text: "I always define my risk, and I don't have to worry about it.",
    author: "Tony Saliba"
  },
  {
    text: "The most important quality for an investor is temperament, not intellect.",
    author: "Warren Buffett"
  },
  {
    text: "If you personalize losses, you can’t trade.",
    author: "Bruce Kovner"
  },
  {
    text: "Money is made by sitting, not trading.",
    author: "Jesse Livermore"
  },
  {
    text: "I’m only rich because I know when I’m wrong. I basically have survived by recognizing my mistakes.",
    author: "George Soros"
  },
  {
    text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    author: "Charles Darwin"
  },
  {
    text: "The market is a device for transferring money from the impatient to the patient.",
    author: "Warren Buffett"
  },
  {
    text: "Risk comes from not knowing what you are doing.",
    author: "Warren Buffett"
  },
  {
    text: "The elements of good trading are: (1) cutting losses, (2) cutting losses, and (3) cutting losses. If you can follow these three rules, you may have a chance.",
    author: "Ed Seykota"
  },
  {
    text: "Do not be embarrassed by your failures, learn from them and start again.",
    author: "Richard Branson"
  },
  {
    text: "The goal of a successful trader is to make the best trades. Money is secondary.",
    author: "Alexander Elder"
  },
  {
    text: "To be a successful trader, you have to have a plan and you have to stick to it.",
    author: "Van K. Tharp"
  },
  {
    text: "Focus on the process, not the outcome.",
    author: "zen-quotes"
  },
  {
    text: "In trading, it’s not about how much you make, but how much you don’t lose.",
    author: "Bernard Baruch"
  },
  {
    text: "It’s not what you trade, it’s how you trade it.",
    author: "Bruce Kovner"
  },
  {
    text: "The key to trading success is emotional discipline. If intelligence were the key, there would be a lot more people making money trading.",
    author: "Victor Sperandeo"
  },
  {
    text: "Trade with an edge, manage risk, be consistent, and keep it simple.",
    author: "Mark Minervini"
  },
  {
    text: "Every trader has strengths and weaknesses. Some are mechanical and need to trade mechanically. Some are intuitive and trade on gut feel. Figure out what style fits your personality and leverage your strengths.",
    author: "Linda Raschke"
  },
  {
    text: "The difference between successful traders and unsuccessful traders is that successful traders understand how to manage risk.",
    author: "Sandy Jadeja"
  },
  {
    text: "Trading is a game of probability. No one trade should make or break you.",
    author: "Mark Douglas"
  },
  {
    text: "The best traders have no ego. You have to swallow your pride and get out of the losses.",
    author: "Tom Baldwin"
  },
  {
    text: "In trading, it's not about how much you make but how much you don't lose.",
    author: "Bernard Baruch"
  },
  {
    text: "The key to long-term survival and prosperity has a lot to do with the money management techniques incorporated into the technical system.",
    author: "Ed Seykota"
  },
  {
    text: "It’s not whether you’re right or wrong that’s important, but how much money you make when you’re right and how much you lose when you’re wrong.",
    author: "George Soros"
  },
  {
    text: "The goal of a successful trader is to make the best trades. Money is secondary.",
    author: "Alexander Elder"
  },
  {
    text: "There are old traders and there are bold traders, but there are very few old, bold traders.",
    author: "Ed Seykota"
  },
  {
    text: "Good trading is not about being right, it’s about being profitable.",
    author: "zen-quotes"
  },
  {
    text: "The market is not a guessing game. It’s a game of probabilities.",
    author: "Mark Douglas"
  },
  {
    text: "Do more of what works and less of what doesn’t.",
    author: "Steve Clark"
  },
  {
    text: "In investing, what is comfortable is rarely profitable.",
    author: "Robert Arnott"
  },
  {
    text: "Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.",
    author: "Warren Buffett"
  },
  {
    text: "I always define my risk, and I don't have to worry about it.",
    author: "Tony Saliba"
  },
  {
    text: "The most important quality for an investor is temperament, not intellect.",
    author: "Warren Buffett"
  },
  {
    text: "If you personalize losses, you can’t trade.",
    author: "Bruce Kovner"
  },
  {
    text: "Risk comes from not knowing what you are doing.",
    author: "Warren Buffett"
  },
  {
    text: "Money is made by sitting, not trading.",
    author: "Jesse Livermore"
  },
  {
    text: "I’m only rich because I know when I’m wrong. I basically have survived by recognizing my mistakes.",
    author: "George Soros"
  },
  {
    text: "There are only two kinds of programming languages: those people always bitch about and those nobody uses.",
    author: "Bjarne Stroustrup"
  },
  {
    text: "The best traders have no ego. You have to swallow your pride and get out of the losses.",
    author: "Tom Baldwin"
  },
  {
    text: "The goal of a successful trader is to make the best trades. Money is secondary.",
    author: "Alexander Elder"
  },
  {
    text: "The elements of good trading are: (1) cutting losses, (2) cutting losses, and (3) cutting losses. If you can follow these three rules, you may have a chance.",
    author: "Ed Seykota"
  },
  {
    text: "Trading is a waiting game played with discipline.",
    author: "Michael Covel"
  },
  {
    text: "The stock market is a device for transferring money from the impatient to the patient.",
    author: "Warren Buffett"
  },
  {
    text: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett"
  },
  {
    text: "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
    author: "Philip Fisher"
  },
  {
    text: "The goal of a successful trader is to make the best trades. Money is secondary.",
    author: "Alexander Elder"
  },
  {
    text: "The most important quality for an investor is temperament, not intellect.",
    author: "Warren Buffett"
  },
  {
    text: "Good trading is not about being right, it's about being profitable.",
    author: "zen-quotes"
  }
]


module.exports = tradingQuotes;
