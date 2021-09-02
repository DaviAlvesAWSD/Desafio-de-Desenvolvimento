import React, { useState } from 'react';

const FormularioCadastroComponent = () => {
  
  //Variaveis de captura de dados
  const InitialValues = {
    name: '',
    price:'',
    tipo: ''
  }
  
  let {product, setProduct} = useState(InitialValues);
  
  return (
    <h1>FormularioCadastro</h1>
  )
}

export default FormularioCadastroComponent;