import database from "../db/database.js";

const UpdateUser = async (req, res, email, username, password) => {
  // code here

  const [rows] = await database.query("select * from Staging");

  const user = rows.map((users) => {
    return users.sessionUser;
  });

  // check headers token
  if (!req.headers.tokenuser) {
    res
      .status(401)
      .json({ message: "invalid access this path missing token", status: 401 });
  }

  // ambil data sessionUser for update data user
  const checkSession = user.find((session) => {
    return session === req.headers.tokenuser;
  });

  // check session apakah ketemu
  if (!checkSession) {
    res.status(401).json({ message: "invalid token error system" });
  }

  // check dari session apakah user ada dalam database

  const [getUser] = await database.query(
    "select * from Staging where sessionUser = ?",
    [req.headers.tokenuser]
  );

  // next code sekarang istirahat dulu : 21.40
};

export default UpdateUser;
