import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import database from "../db/database.js";
import GeneratePassword from "../../utils/GeneratePassword.js";

// dotenv config
dotenv.config();

// function updata user
const UpdateUser = async (req, res, email, username, password) => {
  // next code sekarang istirahat dulu : 21.40 => done

  // penyimapanan informasi user untuk diupdate ke database
  const fields = [];
  const values = [];

  // validasi inputan user untuk disimpan ke database

  // untuk email update
  if (!email) {
    fields.push("?");
    values.push("dasdd@gmail.com");
  } else {
    fields.push("?");
    values.push(email);
  }

  // untuk username update

  if (!username) {
    fields.push("?");
    values.push("asdasd");
  } else {
    fields.push("?");
    values.push(username);
  }

  // hash password jika user update password
  const HashPasswordBaru = await GeneratePassword(password);
  // untuk update password => comming soon fiture

  if (!password) {
    fields.push("?");
    values.push("asdasd");
  } else {
    fields.push("?");
    values.push(HashPasswordBaru);
  }

  // push juga untuk search id didatabase

  fields.push("?");
  values.push(req.headers.userid);

  // check isi penyipanan data di local

  console.log(fields.join(","), values.join(","));
};

export default UpdateUser;
