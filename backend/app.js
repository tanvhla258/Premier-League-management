const express = require("express");
const path = require("path");
const colors = require("colors");
const { readdirSync } = require("fs");
const userM = require("./models/user.m");
const cors = require("cors");
app = express();
require("dotenv").config();
//const { errorHandler } = require('./middleware/errorMiddleware')
require("./config/session")(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(async function (req, res, next) {
//   if (req.session.isAuthenticated == null) {
//     req.session.isAuthenticated = false;
//   }
//   res.locals.lcIsAuthenticated = req.session.isAuthenticated;
//   res.locals.lcAuthUser = req.session.authUser;
//   next();
// });
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes

app.use("/api/users", require("./routes/user.r"));
app.use("/api/clubs", require("./routes/club.r"));
app.use("/api/players", require("./routes/player.r"));
app.use("/api/rank", require("./routes/rank.r"));
// app.use('/api/goals', require('./routes/goal.r'))
// app.use('/api/players', require('./routes/player.r'))
// app.use('/api/rankings', require('./routes/ranking.r'))
// app.use('/api/matches', require('./routes/match.r'))
// app.use('/api/goals', require('./routes/goal.r'))

//app.use(errorHandler)
app.use(function (req, res) {
  res.end("404 NOT FOUND");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
