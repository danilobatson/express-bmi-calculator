const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(__dirname + '/bmi.html'));

app.post('/', (req, res) => {
  const { weight, height } = req.body;
  const result = (Number(weight) * 703) / Math.pow(Number(height), 2);
  res.send(`Your BMI is: ${Math.trunc(result)}`);
}); 


app.listen(port, () => console.log(`Server started on port ${port}!`));
