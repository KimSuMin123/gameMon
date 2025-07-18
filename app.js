const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./models");
const quizRouter = require("./routes/quiz");
const authRouter = require("./routes/auth");
const loginRouter = require("./routes/login");

app.use(express.json());
app.use("/quiz", quizRouter);
app.use("/api/auth", authRouter);
app.use("/api/login", loginRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("서버 실행중 http://localhost:3000");
  });
});
