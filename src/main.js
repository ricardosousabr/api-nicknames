import express from "express";
import "dotenv/config";
const app = express();
import router from "./router.js";
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(router, () => {});

app.listen(process.env.PORT, () => console.log("Rodando"));
