const express = require('express');
const readline = require('readline');

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

app.get('/', (req, res) => {
    res.send('Welcome to the simple Node.js server! Please input something in the console.');
});

rl.question('Please enter something: ', (input) => {
    console.log(`You entered: ${input}`);
    rl.close();
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});