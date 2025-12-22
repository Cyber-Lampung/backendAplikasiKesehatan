import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export default function CreateSession(userId, email, username, password) {
  function CreateSessionUser() {
    // payload for create session user

    const payload = {
      userId: userId,
      email: email,
      username: username,
    };

    // ambil secret from payload jwt (jsonwebtoken)
    const SecretKey = process.env.PayloadSessionUser;
    // console.log(typeof SecretKey);

    //   create session menggunakan jsonwebtoken

    const ResultSessionUser = jwt.sign(payload, SecretKey, {
      algorithm: "none",
    });

    return ResultSessionUser;
  }

  function CreateSessionId() {
    // session Id payload
    const payload = {
      userId: userId,
      username: username,
    };

    // secret key

    const SecretKey = process.env.PayloadSessionId;

    const SessionId = jwt.sign(payload, SecretKey);

    return SessionId;
  }

  return { CreateSessionUser, CreateSessionId };
}
