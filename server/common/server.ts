import express, { Application } from 'express';
import http from 'http';
import os from 'os';
import cors from 'cors'
import l from './logger';
import knexDB from "../common/database/database";

const whitelist = process.env.whitelist_url.split(',');
const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: 'GET,PUT,POST,DELETE',
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization, Credentials'
};


export default class ExpressServer {
  private routes: (app: Application) => void;
  constructor() {
    app.set('db', knexDB);
    app.use(cors(corsOptions));
  }

  router(routes: (app: Application) => void): ExpressServer {
    this.routes = routes;
    return this;
  }

  listen(port: number): Application {
    const welcome = (p: number) => (): void =>
      l.info(
        `up and running in ${
        process.env.NODE_ENV || 'development'
        } @: ${os.hostname()} on port: ${p}}`
      );
    if(app.get('db')) {
      l.info("Database is connected successfully with knex");
    }
    this.routes(app);
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}