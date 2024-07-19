import express from "express";
const router = express.Router();
import run from "./service/gemini.js";

router.get("/", async (req, res) => {
  await run();
  res.send("Retorno");
});

export default router;
