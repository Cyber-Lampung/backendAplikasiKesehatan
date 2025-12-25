import database from "../model/db/database.js";

const checkTokenVerif = async (req, res, email, tokenUserInput) => {
  // saveTokenInDB
  //  get code di database
  // setTimeout(async () => {
  //   const [tokenVerif] = await database.query(
  //     "select * from TokenData where email = ?",
  //     email
  //   );
  //   if (!tokenVerif) {
  //     return res.status(401).json({ message: "missing token verify" });
  //   }
  //   const check = tokenVerif[0].tokenVerif === tokenUserInput;
  //   if (check) {
  //     const [ResultUpdate] = await database.query(
  //       "update TokenData set used = ?",
  //       [true]
  //     );
  //     console.log(ResultUpdate);
  //   }
  // }, 5000);
  // check apakah token verif ada atau tidak
  // update data used di database
};

export default checkTokenVerif;
