import CreateTokenVerif from "../utils/CreateTokenVerif.js";
import database from "../model/db/database.js";

const SaveTokenverifInDatabase = async (res, email) => {
  // check apakah email sudah ada di db

  // ambil token dari createTokenVerif.js

  const token = await CreateTokenVerif();

  // bikin expires token

  const expires_at = new Date(Date.now() + 10 * 60 * 1000);

  const [rowSaveTokenVerify] = await database.query(
    "insert into TokenData (email, tokenVerif, used, expires_at) values (?, ?, ?, ?)",
    [email, token, false, expires_at]
  );

  if (rowSaveTokenVerify.affectedRows >= 1) {
    return true;
  } else {
    return false;
  }
};

export default SaveTokenverifInDatabase;
