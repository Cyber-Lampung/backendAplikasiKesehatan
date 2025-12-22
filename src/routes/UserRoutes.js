import auth from "../middleware/auth.js";
import express from "express";
const router = express.Router();
import database from "../model/db/database.js";
import checkEmail from "../utils/checkEmail.js";
import validasiInputan from "../utils/validasiInputan.js";
import CreateUser from "../model/query/CreateAcount.js";
import CheckUserInDb from "../model/query/DeleteUser.js";

router.use(auth);
router.use(express.json());

// get user
router.get("/user", async (req, res) => {
  const [row] = await database.query("select * from Staging");
  res.send(row);
});

// create user

router.post("/user/create", async (req, res, next) => {
  // get information user from req.body

  const { email, username, password } = req.body;

  // check validasi inputan

  const checkValidasi = await validasiInputan(email, username, password);

  if (checkValidasi) {
    return res.status(403).json({ message: "invalid check your inputan" });
  }

  CreateUser(res, email, username, password);

  // check email
  // const check = await checkEmail(res, next, email);

  // if (check) {
  //   return res.status(409).json({ message: "user sudah ada" });
  // }

  // console.log(email, username, password);
});

// user edit profile
router.put("/user/:id", (req, res) => {
  res.send("post okee");
});

router.delete("/user/delete/:id", (req, res) => {
  const id = req.params.id;

  CheckUserInDb(res, id);
});

export default router;
