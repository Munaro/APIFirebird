import Firebird from "node-firebird";
import dotenv from 'dotenv'

dotenv.config();


export class databaseConn {
  constructor() {
  }
  async connect() {
    const options = {
      host: process.env.HOST_FB,
      port: process.env.PORT_FB,
      database: process.env.PATH_FB,
      user: process.env.USER_FB,
      password: process.env.PASS_FB,
      lowercase_keys: false,
      role: null
    };

    this.db = await new Promise((resolve, reject) => {
      Firebird.attach(options, (err, db) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }        
        resolve(db);
      });
    });

    this.cursor = this.db.defaultTransaction;
  }
  query(SQL) {
    return new Promise((resolve, reject) => {      
      this.db.query(SQL, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }

  cmd(cmd) {
    return new Promise((resolve, reject) => {
      this.db.execute(cmd, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(true);
      });
    });
  }

  closeCon() {
    return new Promise((resolve, reject) => {
      this.db.detach((err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }
}
