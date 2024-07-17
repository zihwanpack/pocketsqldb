export interface IDatabaseConfig {
  host: string;
  user: string;
  port: number;
  database: string;
  password: string;
  waitForConnections: boolean;
  connectionLimit: number;
  queueLimit: number;
}

export interface IStatusType {
  status: string;
  isSuccess: boolean;
  code: string;
  message: string;
}