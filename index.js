const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter student name: ", name => {
  rl.question("Enter grade (0-100): ", value => {
    const grade = Number(value);
    if (!name.trim() || !Number.isFinite(grade) || grade < 0 || grade > 100) {
      console.log("Enter a name and a valid grade from 0 to 100.");
    } else {
      console.log(`Student: ${name}`);
      console.log(`Grade: ${grade}`);
      console.log(grade >= 75 ? "Result: PASSED" : "Result: FAILED");
    }
    rl.close();
  });
});
