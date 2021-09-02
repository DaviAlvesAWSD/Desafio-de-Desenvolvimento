const router = require('express');
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore().collection("products");

const routes = new router();

//GetById request
routes.get('/products/:productsId', async (request: any, response: any) =>{
  try{
    const {productsId} = request.params;
    const productQuerySnapshot = await db.doc(productsId).get();
    const res =  await productQuerySnapshot.data()
    response.status(200).json(res);
  } catch(error){
    response.status(500).send("ERRO: \n" + error);
  }
});

//Get request
routes.get('/products', async (request: any, response: any) =>{
  try{
    const productQuerySnapshot = await db.get();
    const products:any[] = [];
    productQuerySnapshot.forEach(
      (doc: any) =>{
        products.push({
          id: doc.id,
          nome: doc.nome,
          price: doc.price,
          tipo: doc.tipo,
          data:doc.data()
        })
      }
    );
    response.status(200).json(products);
  } catch(error){
    response.status(500).send(error);
  }
});

// Post request
routes.post('/products', async (request: any, response: any) =>{
  const { nome, price, tipo} = request.body;
  const products = {
    nome,
    price,
    tipo
  };
  console.log(products);
  try {
    const newProduct = await db.add(products);
    response.status(201).send(`Novo produto creado: ${newProduct} `);
  } catch (error) {
    response.status(400).send(`Error: alguma informação esta invalida`)
  }

});

// Delete request
routes.delete('/products/:productsId', (request: any, response: any) => {
  const { productsId } = request.params;
  
  db.doc(productsId).delete()
  .then(() => (
    response.status(204)
    .send("Produto deletado com sucesso!")
  ))
  .catch((error: any) =>{
    response.status(500)
    .send(error);
  });
})

// Update request
routes.put('/products/:productsId', async (request: any, response: any) =>{
  const {productsId} = request.params;

  await db
  .doc(productsId)
  .set(
    request.body,
    {merge:true}
  )
  .then(() =>(
    response.json({
      id:productsId,
      nome: request.body.nome,
      price: request.body.price,
      tipo: request.body.tipo
    })
  ))
  .catch((error: any) =>(
    response.status(500)
    .send(error)
  ))
});

module.exports = routes;