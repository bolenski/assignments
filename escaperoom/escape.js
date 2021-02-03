const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log ("Greetings " +name+ " you need to get out of here before you are eliminated.");
const options = ["Open the door", "Find the key", "Put hand in hole"];
const choie = readline.keyInSelect(options, "What is your choice?");

if (options[choice] == "Open the door") {
    console.log("You need the key first to open the door.")
}
else if (options[choice] == "Find the key") {
    console.log("Congradulations, you found the key. Open the door and live.");
}
else if (options[choice] == "Put hand in hole") {
    console.log("You have been eliminated...from life.");
}

while (noKey == true);
