import express from "express";
import dotenv from "dotenv";
import Harrypotter from "./route/prof.routes.js";
import spawn from "./config/database.js";
import dns from "node:dns/promises";

dotenv.config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/v1/harrydata", Harrypotter);

spawn();

app.listen(port, () => {
  console.log(`Server Is Running On Port http://localhost:${port}`);
});
