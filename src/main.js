import express from "express";
import "dotenv/config";
import run from "./service/gemini.js";
const app = express();
import router from "./router.js";

// app.get("/", async (req, res) => {
//   await run();
//   res.send("Retorno");
// });

app.use(router, () => {});

app.listen(process.env.PORT, () => console.log("Rodando"));
