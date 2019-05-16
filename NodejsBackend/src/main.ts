import * as mongoose from 'mongoose';
import { app } from './app';

const PORT = 8080;

app.listen(PORT, async function() {
    console.info(`Listening on http://localhost:${PORT}`);
    mongoose.connect('mongodb://127.0.0.1:27017/user', { useNewUrlParser: true });
    mongoose.connection.on('open', function() {
        console.info('Conenct to mongo!');
    });
    mongoose.connection.on('error', function (err:any) {
        console.error(err);
    });
});