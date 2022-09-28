const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/about', (req, res) =>
  res.send('<p>My name is Danilo and I am a developer</p>')
);

app.listen(port, () => console.log(`Server started on port ${port}!`));
