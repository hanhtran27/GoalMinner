import * as express from 'express'
import { RegisterModel } from './register';

const loginRoutes = express.Router();


loginRoutes.post('/login',
                 async function(req: express.Request, res: express.Response) {
    let found:Boolean = false;
    console.info(req.body);

    await RegisterModel.find(
            {'userName':req.body.userName, 'password':req.body.password},
            function (err, result) {
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
        let token:String = req.body.userName + req.body.password;
        res.json({status: true, token: token});
    } else {
        res.json({status: false});
    }
    res.end();
});

export { loginRoutes }
