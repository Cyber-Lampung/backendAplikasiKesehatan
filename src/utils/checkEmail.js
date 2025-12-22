import database from "../model/db/database.js";

const checkEmail = async (res, next, email) => {
  const [row] = await database.query("select * from Staging where email = ?", [
    email,
  ]);

  try {
    const check = row.length >= 1;

    if (check) {
      return true;
    } else {
      return false;
    }
  } catch {
    return res.status(500).json({ message: "internal server error" });
  }
};

export default checkEmail;
