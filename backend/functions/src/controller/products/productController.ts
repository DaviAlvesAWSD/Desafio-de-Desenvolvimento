class ProductController {

   getProducts = () => {
    return ({
      id: 1,
      name: 'tênis da nike',
      price: 500,
      tipo: 'sapatos'
    });
    
  }
   postProducts = () => {
    return ({
      id: 2,
      name: 'tênis da didas',
      price: 800,
      tipo: 'sapatos'
    });
    
  }
   updateProducts = () => {
    return ({
      id: 1,
      name: 'tênis da nike',
      price: 400,
      tipo: 'sapatos'
    });
    
  }
   deleteProducts = () => {
    return ({
      id: 2
    });
    
  }

}

export const productController = new ProductController();