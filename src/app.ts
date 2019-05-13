import * as express from 'express';
import * as bodyparser from 'body-parser';

import { registerRoutes } from './register.controller';
import { loginRoutes } from './login.controller';

const app = express();
app.use(bodyparser.json());
app.use(registerRoutes);
app.use(loginRoutes);


export { app };