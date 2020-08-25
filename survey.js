const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question("What's an activity you like doing? ", (answer1) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer1}`);
//   rl.question("What's an activity you like doing? "), (answer2) => {
//     console.log(`Thank you for your valuable feedback: ${answer2}`);
//     rl.close()
//   };
// });
const info = {};

rl.question("What's your name? Nicknames are also acceptable : ", (args) => {
  info.one = args;
  rl.question("What's an activity you like doing? : ", (args) => {
    info.two = args;
    rl.question('What do you listen to while doing that? : ', (args) => {
      info.three = (args);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) : ", (args) => {
        info.four = args;
        rl.question("What's your favourite thing to eat for that meal? : ", (args) => {
          info.five = args;
          rl.question('Which sport is your absolute favourite? : ', (args) => {
            info.six = (args);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! :', (args) => {
              info.seven = (args);
              rl.close();
              console.log(`${info.one} loves listening to ${info.three} while ${info.two}, devouring ${info.five} for ${info.four}, prefers ${info.six} over any other sport, and is amazing at ${info.seven}.`);
            });
          });
        });
      });
    })
  })
});
