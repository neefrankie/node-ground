import 'dotenv/config';
import { createConnection, Connection } from 'mysql2/promise';

type Connect = {
  host: string;
  port: number;
  user: string;
  pass: string;
}

export function getMySQLConn(): Connect {
  return {
    host: process.env.MYSQL_HOST,
    port: Number.parseInt(process.env.MYSQL_PORT, 10),
    user: process.env.MYSQL_USER,
    pass: process.env.MYSQL_PASS,
  };
}

async function openMySQL(): Promise<Connection> {
  const c = getMySQLConn();

  return createConnection({
    host: c.host,
    port: c.port,
    user: c.user,
    password: c.pass,
  });
}

export class DbCreator {
  conn: Connection

  async init() {
    this.conn = await openMySQL();
    return this;
  }

  async createDb(name: string) {
    const stmt = `CREATE DATABASE IF NOT EXISTS ${name}
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;`;

    /**
     * results is ResultSetHeader type:
     * {
     *  fieldCount: 0,
     *  affectedRows: 0,
     *  insertedId: 0,
     *  info: '',
     *  serverStatus: 258,
     *  warningStatus: 1,
     *  changedRows: 0
     * }
     * fields is undefined.
     */
    const [results, fields] = await this.conn.execute(stmt);

    console.log(results);
    console.log(fields);
  }

  async dropDb(name: string) {
    const stmt = `DROP DATABASE IF EXISTS ${name};`;

    const [results, fields] = await this.conn.execute(stmt);

    console.log(results);
    console.log(fields);
  }

  async truncateTable(tbl: string) {
    const stmt = `TRUNCATE TABLE ${tbl};`

    const [results, fields] = await this.conn.execute(stmt);

    console.log(results);
    console.log(fields);
  }
}

async function main() {
  const c = await (new DbCreator()).init();

  const dbName = 'typeorm';

  await c.dropDb(dbName);
  await c.createDb(dbName);
}

if (require.main === module) {
  main().then(() => {
    console.log('Database created');
  });
}
