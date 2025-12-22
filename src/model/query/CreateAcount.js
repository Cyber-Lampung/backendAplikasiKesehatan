import CreateSession from "../../service/CreateSession.js";
import GeneratePassword from "../../utils/GeneratePassword.js";
import database from "../db/database.js";
import { v4 as uuidv4 } from "uuid";

const CreateUser = async (res, email, username, password) => {
  // Create UserId

  const userId = uuidv4();

  // impor hash password from GeneratePassword
  const hashPassword = await GeneratePassword(password);

  //   create SessionId dengan SessioUser

  //   get session Service Functin
  const GlobalFuncCreateSession = CreateSession(
    userId,
    email,
    username,
    password
  );

  //   get function Service Create Sessionuser
  //   const SessionUser = GlobalFuncCreateSession.CreateSessionUser();

  //   //   get function Service Create SessionId

  //   const SessionId = GlobalFuncCreateSession.CreateSessionId();

  const { CreateSessionUser, CreateSessionId } = GlobalFuncCreateSession;

  const SessionUser = CreateSessionUser();
  const SessionId = CreateSessionId();

  //   // code SQL

  const sqlQuery =
    "insert into Staging (userId, email, username, password, sessionId, sessionUser) values (?, ?, ?, ?, ?, ?)";
  const [result, err] = await database.query(sqlQuery, [
    userId,
    email,
    username,
    hashPassword,
    SessionId,
    SessionUser,
  ]);
  if (result.affectedRows > 0) {
    return res
      .status(201)
      .json({ status: 201, message: "berhail create user" });
  }
};

export default CreateUser;
