import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log("Middleware is started");
  next();
});

app.get("/", (req, res) => {
  res.send("AK started Backend");
});

app.get("/profile", (req, res) => {
  res.send("AK G Welcome!");
});

app.get("/about", (req, res) => {
  res.send("AK G is on About Page");
});

app.get("/home", (req, res, next) => {
  return next(new Error("Not implemented"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something went wrong");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});