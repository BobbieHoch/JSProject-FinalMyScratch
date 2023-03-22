//connects to database
import * as functions from "firebase-functions";
//how we connect to Mongo
import { MongoClient } from "mongodb";

//grabs from firebase the connections string that is secure
const uri: string = functions.config().mongodb.uri; if (!uri) {
    console.error("ERROR: Missing environment variable mongodb.uri");
}

const client: MongoClient = new MongoClient(uri);

export const getClient = async () => {
    await client.connect();
    return client;
};

// const uri: string = functions.config().mongodb.uri;
