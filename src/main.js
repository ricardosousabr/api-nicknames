import express from "express";
import "dotenv/config";
import run from "./service/gemini.js";
const app = express();

app.get("/", async (req, res) => {
  await run();
  res.send("Retorno");
});

app.listen(process.env.PORT, () => console.log("Rodando"));
