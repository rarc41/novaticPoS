import { Application } from 'express';
import Server from './server/server';
import router from './routes/router';
import './database';

class Index {
  app: Application;

  constructor() {
    const port = Number(process.env.PORT) || 3000;
    const server = Server.init(port);

    server.app.use(router);

    server.start(() => {
      console.log(`Server running on port ${port}`);
    });
    this.app = server.app;
  }
}
export default new Index();
