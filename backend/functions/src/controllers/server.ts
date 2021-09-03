import * as express from "express";
const routes = require('./routes');


const app = express();

app.use(express.json())
    .use(routes)
    .get('https://peaceful-archimedes-211c7b.netlify.app/', (request, response) => {
      response.json({message: "invalid route"})
    })


  module.exports = app;
