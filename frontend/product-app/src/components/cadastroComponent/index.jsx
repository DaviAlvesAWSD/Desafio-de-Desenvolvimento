import React, { useState } from 'react';
import FormularioCadastroComponent from '../formularioCadastroComponent';
import ListaComponent from '../listaComponent';
import './index.css';

const CadastroComponent = () => {
  // Data
  const productsData = [
    { id: 1, nome: 'tênis da nike', price: 200.00, tipo: 'roupas' },
    { id: 2, nome: 'chocolate', price: 10.5, tipo: 'consumiveis' },
    { id: 3, nome: 'televisão', price: 1500.00, tipo: 'Eletrôdomesticos' },
    { id: 4, nome: 'escova de dentes', price: 1.00, tipo: 'Higiene pessoal' },

  ]

    //Variaveis de captura de dados
    const InitialValues = {
      id: null,
      nome: '',
      price:'',
      tipo: ''
    }

   // Setting state
    const [products, setProducts] = useState(productsData);
    const [ currentProducts, setCurrentProducts ] = useState(InitialValues);
    const [ editing, setEditing ] = useState(false);

    // CRUD operations
    const addProducts = obj => {
      obj.id = products.length + 1;
      setProducts([ ...products, obj ]);
    }

    const deleteProducts = id => {
      setEditing(false)

      setProducts(products.filter(products => products.id !== id))
    }

    const updateProducts = (id, value) => {
      setEditing(false)
      console.log("chamei update");
      setProducts(products.map(product => (product.id === id ? value : product)))
    }

    const editRow = values => {
      setEditing(true)

      setCurrentProducts({ id: values.id, nome: values.nome, price: values.price, tipo: values.tipo });
    }

  return (
    <div className="corpo" >

      <div className="cadastro">
        <h1 className="display-4 text1">Produtos CRUD</h1>
      </div>
      <div className="formulario">
        <div className="text2">
          <FormularioCadastroComponent 
                            editing={editing}
                            setEditing={setEditing}
                            currentProducts={currentProducts}
                            updateProducts={updateProducts}
                            addProducts={addProducts}
          />
        </div>
      </div>
      <div className="lista">
        <div className="text2"><ListaComponent products={products} editRow={editRow} deleteProducts={deleteProducts} /></div>
      </div>

    </div>
  )
}

export default CadastroComponent;