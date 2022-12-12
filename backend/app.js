const express = require("express");
const path = require("path");

const colors = require("colors");
const { readdirSync } = require("fs");
const cors = require("cors");
require("dotenv").config();
//const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;

app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes

app.use("/api/users", require("./routes/user.r"));
// app.use('/api/goals', require('./routes/goal.r'))
//app.use('/api / clubs', require('./routes/club.r'))
// app.use('/api/players', require('./routes/player.r'))
// app.use('/api/rankings', require('./routes/ranking.r'))
// app.use('/api/matches', require('./routes/match.r'))
// app.use('/api/goals', require('./routes/goal.r'))

//app.use(errorHandler)
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
