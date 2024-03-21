const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter elements separated by commas: ', (inputString) => {
  // Split the input string by commas and trim the whitespace from each element
  const array = inputString.split("").map(item => item.trim());
  
  console.log("Entered array:", array);

  rl.close();
});

