import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config();

const GeneratePassword = async (password) => {
  // payload ambil dari env
  //   const secret = process.env.SecretKeyHashPassword;
  //   console.log(secret);

  // ambil panjang karakter di env

  const salt0rRound = parseInt(process.env.PanjangKarakter);

  //   create hash password

  const hash = await bcrypt.hashSync(password, salt0rRound);

  return hash;
};

export default GeneratePassword;
