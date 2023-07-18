require("dotenv/config");

const helmet = require("helmet");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const errorHandler = require("./middlewares/errorHandler");

app.use(
  express.json({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000,
  })
);

app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000,
  })
);

app.use(helmet());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

// custom error handler middleware
app.use(errorHandler);

//mongoose DB connection

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });

    console.log("Database Connection Established Successfully");
  })
  .catch(() => {
    console.log("Error Establishing Connection to Database");
  });
