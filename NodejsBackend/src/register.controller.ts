import * as express from 'express';
import { RegisterModel } from './register';

const registerRoutes = express.Router();

registerRoutes.post('/register', async function(req:express.Request, res:express.Response) {
    let found:Boolean = false;

    await RegisterModel.find({'email':req.body.email}, function (err, result) {
        if (err) {
            throw (err);
        }
        else {
            if (result.length != 0) {
                found = true;
            }
        }
    });

    await RegisterModel.find({'userName':req.body.userName}, function (err, result) {
        if (err) {
            throw (err);
        }
        else {
            if (result.length != 0) {
                found = true;
            }
        }
    });

    if (found){
        res.json({Description: "Existed"});
    }
    else {
        const insert = new RegisterModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
        })
        insert.save();
        let token:String = req.body.userName + req.body.password;
        res.json({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
           	email: req.body.email,
            userName: req.body.userName,
            password: req.body.password,
            token: token,
        });
    };
    res.end();

});

export { registerRoutes}
