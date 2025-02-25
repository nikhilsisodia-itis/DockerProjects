const fs = require('fs');
const path = require('path');
const readline = require('readline');

const operationsFilePath = path.join(__dirname, 'operations', 'operations.txt');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const logOperation = (operation, num1, num2, result) => {
    const logEntry = `${new Date().toISOString()} - ${operation}: ${num1} and ${num2} = ${result}\n`;
    fs.appendFile(operationsFilePath, logEntry, (err) => {
        if (err) throw err;
    });
};

const performOperation = (operation, num1, num2) => {
    switch (operation) {
        case '1':
            return num1 + num2;
        case '2':
            return num1 - num2;
        case '3':
            return num1 * num2;
        case '4':
            return num1 / num2;
        default:
            return null;
    }
};

const promptUser = () => {
    rl.question('Select an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n', (operation) => {
        rl.question('Enter first number: ', (firstNum) => {
            rl.question('Enter second number: ', (secondNum) => {
                const num1 = parseFloat(firstNum);
                const num2 = parseFloat(secondNum);
                const result = performOperation(operation, num1, num2);

                if (result !== null) {
                    const operationNames = ['Addition', 'Subtraction', 'Multiplication', 'Division'];
                    logOperation(operationNames[operation - 1], num1, num2, result);
                    console.log(`Result: ${result}`);
                } else {
                    console.log('Invalid operation selected.');
                }
                rl.close();
            });
        });
    });
};

promptUser();