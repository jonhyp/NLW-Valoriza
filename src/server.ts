import express from 'express';

const app = express();

app.get("/test", (req, res) => {
  return res.send("Hello NLW")
})

app.post("/test-post", (req, res) => {
  return res.send("Hello POST method")
})

app.listen(3000, () => {
console.log(`Server is running on port 3000`)})