import * as functions from "firebase-functions";
import * as express from "express";

import { productController } from './controller/exportControllers';

// APP
const app = express();

// Rotas
app.route('/products')
  //GetMapping
  .get((req, res) => {res.json(productController.getProducts())})
  //PostMapping
  .post((req, res) => {res.json(productController.postProducts())})
  //PutMapping
  .put((req, res) => {res.json(productController.updateProducts())})
  //DelteMapping
  .delete((req, res) => {res.json(productController.deleteProducts())})




// Export app
exports.app = functions.https.onRequest(app);
