import express from "express";
import auth from "../middleware/auth.js";
import checkTokenVerif from "../middleware/checkTokenVerif.js";
import database from "../model/db/database.js";
const router = express.Router();
router.use(express.json());

router.use(auth);

router.use("/verify-token", async (req, res, next) => {
  const { email, token } = await req.body;

  if (!token) {
    return res.status(403).json({ message: "user token kosong" });
  }

  const CheckTokenInDb = await database.query(
    "select * from TokenData where email = ?",
    [email]
  );

  if ((await CheckTokenInDb[0].tokenVeif) == token) {
    console.log("okee");
  } else {
    console.log("salah");
  }
});

export default router;
