import './common/env';
import Server from './common/server';
import routes from './routes';

const port = parseInt(process.env.PORT);
new Server().router(routes).listen(port);
