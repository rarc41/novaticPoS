import { Application } from 'express';
import Server from './server/server';
import router from './routes/router';
import './database';
import cors from 'cors'



class Index {
  app: Application;

  constructor() {
    const port = Number(process.env.PORT) || 3001;
    const server = Server.init(port);
    server.app.use(cors())

    server.app.use(router);


    server.start(() => {
      console.log(`Server running on port ${port}`);
    });
    this.app = server.app;
  }
}
export default new Index();
