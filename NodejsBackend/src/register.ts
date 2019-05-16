import * as mongoose from 'mongoose';

const UserChema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    userName: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

const RegisterModel = mongoose.model('userinfo', UserChema);

export { RegisterModel}