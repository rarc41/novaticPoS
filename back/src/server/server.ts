import express from 'express';
import cors from 'cors';

export default class Server {
  public app: express.Application;

  public port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.app.use(cors({ origin: false }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  static init(port: number): Server {
    return new Server(port);
  }

  start(callback: any): void {
    this.app.listen(this.port, callback);
  }
}
