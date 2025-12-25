import database from "../db/database.js";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

// dotenv config
dotenv.config();

// Reset password
const ResetPassword = async (req, res, email) => {
  // reset password code

  const [SearchEMail] = await database.query(
    "select * from Staging where email = ?",
    [email]
  );
};

export default ResetPassword;
