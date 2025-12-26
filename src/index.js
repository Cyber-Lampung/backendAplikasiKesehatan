// import module
import express from "express";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";
dotenv.config();
import database from "./model/db/database.js";
import rateLimit from "express-rate-limit";

const limitRequest = rateLimit({
  windowMs: 60 * 1000, // 1 menit
  max: 10, // max request per menit per ip
  message: "terlalu banyak request, harap tunngu sebentar",
});

// import port from .env
const PORT = process.env.port;

const app = express();
app.use(cors());
app.use(helmet());
app.use(limitRequest);

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

import UserRoutes from "./routes/UserRoutes.js";
import Token from "./routes/ServiceToken.js";
import RouteAi from "./routes/AiRoutes.js";

// user Routes
app.use("/users", UserRoutes);

// VerifyToken
app.use("/token", Token);

// endpoint AI

app.use("/AI", RouteAi);

// listen port

app.listen(PORT);
