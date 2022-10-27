import cors from "cors";
import express from "express";

const PORT = 3333;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Spy x Family" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
