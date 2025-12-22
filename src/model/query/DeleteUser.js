import database from "../db/database.js";

const CheckUserInDb = async (res, id) => {
  const [findUser] = await database.query(
    "delete from Staging where userId = ?",
    [id]
  );

  if (findUser.affectedRows <= 0) {
    return res.status(404).json({ message: "user tidak ada" });
  } else {
    res.json({ message: "user berhsil dihapus" });
  }
};

export default CheckUserInDb;
