const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.post('/', (req, res) => {
  const { n1, n2 } = req.body;
  const result = Number(n1) + Number(n2);
  res.send(`The result of the calculation is: ${result}`);
});

app.get('/about', (req, res) =>
  res.send('<p>My name is Danilo and I am a developer</p>')
);

app.listen(port, () => console.log(`Server started on port ${port}!`));
