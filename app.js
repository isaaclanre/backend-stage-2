const express = require("express");
const app = express();
const cors = require("cors");

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});
app.use(cors({ origin: "*" }));
app.use(express.json());

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

const data = {
  slackUsername: "isaacolanre",
  backend: true,
  age: 31,
  bio: "I am a software engineer currently living in Lagos, Nigeria. My interests range from web development to mobile development. I am also interested in soccer, reading, and technology. I'm a full-stack engineer with a strong desire for pushing the boundaries, learning, and a healthy disregard for the impossible.",
};

app.get("/", (req, res) => {
  res.status(200).send(JSON.stringify(data));
});

app.post("/operation", (req, res) => {
  const x = req.body.x;
  const y = req.body.y;

  const operation = req.body.operation_type;
  let result = 0;

  if (operation === "addition") {
    result = x + y;
  } else if (operation === "subtraction") {
    result = x - y;
  } else if (operation === "multiplication") {
    result = x * y;
  } else {
    res.status(400).send("Please enter a valid operator");
  }

  res.status(200).send(
    JSON.stringify({
      slackUsername: "isaacolanre",
      result: result,
      operation_type: operation,
    })
  );
});
