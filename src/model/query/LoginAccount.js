import bcrypt from "bcrypt";
import database from "../db/database.js";

const LoginAccount = async (req, res, email, password) => {
  //  check data di database

  const [resultUser] = await database.query(
    "select * from Staging where email = ?",
    [email]
  );

  // Compare password
  const ComparePassword = await bcrypt.compare(
    password,
    resultUser[0].password
  );

  if (resultUser[0] && ComparePassword) {
    return res.status(200).json({
      valid: true,
      status: 200,
      message: "berhasil login",
      data: {
        userId: resultUser[0].userId,
        token: resultUser[0].sessionId,
      },
    });
  } else {
    return res
      .status(404)
      .json({ valid: false, status: 404, message: "not found user" });
  }
};

export default LoginAccount;
