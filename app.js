const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

function isPrime(number) {
    if (number <= 1) return false;
    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }
    return true;
}

app.post('/checkprime', (req, res) => {
    const number = req.body.number;
    const result = isPrime(number);
    res.json({ prime: result });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
