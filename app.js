const express = require("express");
const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api", (req, res) => {
  console.log(req.body);
  res.send();
});

app.listen(port, () => {
  console.log(`test api server run on port :${port}`);
});
