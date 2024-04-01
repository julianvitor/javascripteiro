const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = "Digite algo: ";

rl.question(prompt, (answer) => {
  console.log(`Você digitou: ${answer}`);
  rl.close();
});
