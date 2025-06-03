import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("server started");
});

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  pass: { type: String },
});

const user = mongoose.model("User", userSchema);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  const result = await user.insertOne({
    name: name,
    email: email,
    pass: pass,
  });
  return res.json(result);
});

app.get("/greet", (req, res) => {
  res.send("Greetings");
});

app.get("/name", (req, res) => {
  res.send("Umadevi");
});

app.get("/weather", (req, res) => {
  res.send("35 degrees");
});

app.get("/products", (req, res) => {
  const products = [
    { name: "Product 1", price: 34 },
    { name: "Product 2", price: 64 },
    { name: "Product 3", price: 45 },
  ];
  res.json(products);
});