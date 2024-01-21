import 'dotenv/config';

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
