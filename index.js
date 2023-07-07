const express = require('express');
const PORT = 5000;
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser());
app.use(express.urlencoded({ extends: true }));

app.use('/', require('./routes'));
app.listen(PORT, () => {
  console.log(`Successfully Running Server in PORT: ${PORT}`);
});
