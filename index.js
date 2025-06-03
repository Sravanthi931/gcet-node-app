import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/gcet").then(() => {
  console.log("MongoDB connected");
  app.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
  });
});

const userSchema = new mongoose.Schema({
  name: { type: String },
});

const user = mongoose.model("User", userSchema); // lowercase `user` here

app.get("/", (req, res) => {
  res.send("Good Morning");
});

app.get("/register", async (req, res) => {
  const result = await user.create({ name: "Sravanthi" }); // also lowercase here
  res.json(result);
});

app.get("/greet", (req, res) => {
  res.send("Greetings");
});

app.get("/name", (req, res) => {
  res.send("Sravanthi");
});

app.get("/weather", (req, res) => {
  res.send("30 degrees");
});

app.get("/products", (req, res) => {
  const products = [
    { name: "Product 1", price: 34 },
    { name: "Product 2", price: 64 },
    { name: "Product 3", price: 45 },
  ];
  res.json(products);
});
