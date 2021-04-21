const cors = require("cors");
const express = require("express");

const argonautes = require('./routes/argonautes');

const app = express();

// testing
app.get('/', (_, res) => {
  res.send('<h1>Hello from Express Server!</h1>');
});

app.use(cors());
app.use(express.json());

app.use('/argonautes', argonautes);

app.listen(process.env.PORT || 3000);