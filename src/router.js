import express from "express";
import run from "./service/gemini.js";
const router = express.Router();
const app = express();

router.get("/", async (req, res) => {
  let result = await run();
  res.json(result);
});

export default router;
