import auth from "../middleware/auth.js";
import express from "express";
const router = express.Router();
import database from "../model/db/database.js";
import checkEmail from "../utils/checkEmail.js";
import validasiInputan from "../utils/validasiInputan.js";
import CreateUser from "../model/query/CreateAcount.js";
import CheckUserInDb from "../model/query/DeleteUser.js";
import UpdateUser from "../model/query/UpdateUser.js";
import ResetPassword from "../model/query/ResetPassword.js";
import CheckTokenResetPassword from "../middleware/checkTokenFroResetPassword.js";
import MitigasiSqlCheck from "../middleware/MitigasiSql.js";
import LoginAccount from "../model/query/LoginAccount.js";
import checkTokenVerif from "../middleware/checkTokenVerif.js";
import saveToken from "../service/SaveTokenverifInDatabase.js";
import SendEmailToken from "../service/SendEmailToken.js";

router.use(express.json());

// hapus token verif user
router.get("/user/token/delete", async (req, res) => {
  const { email } = req.body;

  // ambil data token dari email

  const DeleteDataToken = await database.query(
    "delete from TokenData where email = ?",
    [email]
  );

  if (DeleteDataToken.affectedRows >= 1) {
    return res.status(200).json({ message: "succes delete token" });
  } else {
    return res.status(404).json({ message: "token user not found" });
  }
});

// create user

router.use("/user/create", async (req, res, next) => {
  // get information user from req.body
  const { email, username, password, tokenVerify } = req.body;

  // kirim token ke email

  SendEmailToken(res, email);

  // // buat token di database

  // // kirim token verifikasi ke /verif-token

  // const response = await fetch("http://localhost:3000/token/verify-token", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json", barer: "aku" },
  //   body: JSON.stringify({ email: email, token: tokenVerify }),
  // });

  // const result = await response.json();
  // console.log(result);
});

// Login Account

router.post("/user/login", (req, res) => {
  // ambil data inputan user dari req.body
  const { email, username, password } = req.body;

  // service validasi inputan user

  const FilterInput = MitigasiSqlCheck(email, username, password);

  if (FilterInput) {
    return res.status(403).json({
      status: 403,
      valid: false,
      message: "code pemicu sql error terdeteksi",
      pathNext: "/403",
    });
  }

  // kirim ke query database
  LoginAccount(req, res, email, password);
});

// authentiction path

router.use(auth); // => setelah ini butuh authentication semua

// get Token Data

router.get("/user/TokenData", async (req, res) => {
  const [TokenData] = await database.query("select * from TokenData");
  res.json(TokenData);
});

// get user
router.get("/user", async (req, res) => {
  const [row] = await database.query("select * from Staging");
  res.send(row);
});

// Reset Password
router.post("/user/reset", CheckTokenResetPassword, (req, res) => {
  const { email } = req.body;

  ResetPassword(req, res, email);
});

// user edit profile
router.patch("/user/put/users", (req, res) => {
  // ambil userId dari inputan user / dari data lama

  const { email, username, password } = req.body;

  UpdateUser(req, res, email, username, password);
});

// path for delete user
router.delete("/user/delete/:id", (req, res) => {
  const id = req.params.id;

  CheckUserInDb(res, id);
});

export default router;
