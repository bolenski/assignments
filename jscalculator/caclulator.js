var readlineSync = require('readline-sync');
console.log('Your Calculator');
var firstNum = readlineSync.questionInt('Enter your first number');
var secNum = readlineSync.questionInt('Enter your second number');
console.log('What operation would you like to perform: +,-,*,/?');
command = readlineSync.prompt(['+ , - , * , /']);
if (command === '+') {
    console.log(firstNum + secNum)
}
else if (command === '-') {
    console.log (firstNum - secNum)
}
else if (command === '*') {
    console.log (firstNum * secNum)
}
else if (command === '/') {
    console.log (firstNum / secNum)
};

