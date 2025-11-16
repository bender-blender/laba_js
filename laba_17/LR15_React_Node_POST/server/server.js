const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.json());

const dataFile = path.join(__dirname, "data.json");

app.post("/send", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: "Поля name и age обязательны" });
  }

  let data = [];
  if (fs.existsSync(dataFile)) {
    data = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
  }

  const newItem = {
    id: Date.now(),
    name,
    age
  };

  data.push(newItem);

  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

  res.json({ message: "Данные добавлены!", item: newItem });
});

app.listen(5000, () => {
  console.log("Сервер запущен на порту 5000");
});