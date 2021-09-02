import React from 'react';
import FormularioCadastroComponent from '../formularioCadastroComponent';
import './index.css';

const CadastroComponent = () => {
  return (
    <div className="corpo" >

      <div className="cadastro">
        <h1 className="display-4 text1">Produtos CRUD</h1>
      </div>
      <div className="formulario">
        <p className="text2"><FormularioCadastroComponent/></p>
      </div>
      <div className="lista">
        <h1 className="text2">lista de produtos</h1>
      </div>

    </div>
  )
}

export default CadastroComponent;