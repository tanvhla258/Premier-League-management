import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

app.get("/abc", async (req, res) => {
  const user = await getUser();
  res.send(user);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
