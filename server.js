const cors = require("cors");
const express = require("express");

const app = express();

// testing
app.get('/', (_, res) => {
  res.send('<h1>Hello from Express Server!</h1>');
});

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 3000);