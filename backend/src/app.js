const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("api/users", require("./routers/userR"));
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
