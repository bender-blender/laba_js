const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json([
    { id: 1, name: "Alex", age: 20 },
    { id: 2, name: "Sofia", age: 19 },
    { id: 3, name: "Maksim", age: 22 }
  ]);
});

app.listen(5000, () => {
  console.log("Сервер запущен на порту 5000");
});