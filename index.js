// importing express
const express = require('express');
const PORT = 5000;
const app = express();
const bodyParser = require('body-parser');
// for json
app.use(express.json());
app.use(bodyParser());
// form data
app.use(express.urlencoded({ extends: true }));
// using routes
app.use('/', require('./routes'));
//not found route
app.use("*",(req,res) =>{
  return res.status(404).json({
    PageNotFound: "Can't Found Page"
  });
});
// starting server
app.listen(PORT, () => {
  console.log(`Successfully Running Server in PORT: ${PORT}`);
});
