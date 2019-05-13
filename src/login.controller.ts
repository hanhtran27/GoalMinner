import * as express from 'express'
import { RegisterModel } from './register';

const loginRoutes = express.Router();


loginRoutes.post('/login', async function(req: express.Request, res: express.Response) {
    let found:Boolean = false;

    await RegisterModel.find({'userName':req.body.userName, 'password':req.body.password}, function (err, result) {
        if (err) {
            throw (err);
        }
        else {
            if (result.length != 0) {
                found = true;
            }
        }
    });

    if (found) {
        console.info("change to home");
    } else {
        console.info("Invalid")
    }
    res.end();
});

export { loginRoutes }