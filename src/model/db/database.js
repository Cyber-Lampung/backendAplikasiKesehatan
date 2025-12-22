import mysql from "mysql2/promise";
import fs from "fs";

const database = mysql.createPool({
  host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
  port: 4000,
  user: "4PZot5mh3bKn3yK.root",
  password: "fUbsj8oOjzIySMVK",
  database: "test",
  ssl: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: true,
  },

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default database;
