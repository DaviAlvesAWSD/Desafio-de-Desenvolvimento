import * as functions from "firebase-functions";

const server = require('./controllers/server');


exports.app = functions.https.onRequest(server);

