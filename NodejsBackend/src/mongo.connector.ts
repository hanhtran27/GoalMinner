import * as mongodb from 'mongodb';

export class MongoConnector {
    public static client:mongodb.MongoClient;

    public static connect (url: string) {
        return new Promise (function(resolve, reject) {
            mongodb.MongoClient.connect( url, { useNewUrlParser: true }, function(err, client:mongodb.MongoClient) {
                if (err) {
                    reject(err);
                } else {
                    MongoConnector.client = client;
                    resolve(client);
                }

            })
        })
    }
}