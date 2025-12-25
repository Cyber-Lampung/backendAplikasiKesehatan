// import module

import express from "express";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";
dotenv.config();
import database from "./src/model/db/database.js";

// import port from .env
const PORT = process.env.port;

const app = express();
app.use(cors());
app.use(helmet());

// test sql conection

async () => {
  const conn = await database.getConnection();
  try {
    conn.query("select 1");
  } finally {
    // lepas setalah di gunanakan
    conn.release();
  }
};

// import UserRouter

import UserRoutes from "./src/routes/UserRoutes.js";
import Token from "./src/routes/ServiceToken.js";

// user Routes
app.use("/token", Token);

app.use("/users", UserRoutes);
// VerifyToken

// listen port

app.listen(PORT);
