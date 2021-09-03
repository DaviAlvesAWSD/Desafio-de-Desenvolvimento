import './index.css';
import React, { useEffect, useState } from 'react';

const FormularioCadastroComponent = (props) => {
  
  // form edite
  const [ editProduct, setEditProducts ] = useState(props.currentProducts)

  useEffect(() =>{
    setEditProducts(props.currentProducts)
  }, [props]);

  const handleInputChangeEdit = event => {
    const { name, value } = event.target;
    console.log(event)
    setEditProducts({ ...products, [name]: value });
  }

  //form cadastro
      //Variaveis de captura de dados
   const InitialValues = {
        id: null,
        nome: '',
        price: '',
        tipo: ''
      }
	const [ products, setProducts ] = useState(InitialValues)

	const handleInputChangeCreate = event => {
		const { name, value } = event.target;

		setProducts({ ...products, [name]: value });
	}

  return (
    <>
    {props.editing ? (

      <form autoComplete="off"
        onSubmit={event => {
          event.preventDefault()
          props.updateProducts(editProduct.id, editProduct)

        }}
       className="form-grid">
        <div  className="row1"><h1>Editar produto</h1></div>
        <div  className="row2">
          <div className="form-group input-group">
            <div className="input-group tamanho position">  
                  <span className="input-group-text" id="basic-addon1"><i className="fas fa-tag"></i></span>
                  <input className="form-control " placeholder="Produto" name="nome" value={editProduct.nome} onChange={handleInputChangeEdit} />
            </div>
          </div>
        </div>
        <div  className="row3">
          <div className="form-group input-group">
            <div className="input-group tamanho position">  
                  <span className="input-group-text" id="basic-addon1"><i className="fas fa-coins"></i></span>
                  <input className="form-control " placeholder="Preço" name="price" value={editProduct.price} onChange={handleInputChangeEdit} />
            </div>
          </div>
        </div>
        <div  className="row4">
          <div className="form-group input-group">
            <div className="input-group tamanho position"> 
            <span className="input-group-text" id="basic-addon1"><i className="fas fa-archive"></i></span>
              <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="calssificação do produto" name="tipo" value={editProduct.tipo} onChange={handleInputChangeEdit} />
                <datalist id="datalistOptions">
                  <option value="roupas" />
                  <option value="limpeza"/>
                  <option value="mobília"/>
                  <option value="consumíveis"/>
                  <option value="cosméticos"/>
                  <option value="higiene pessoal"/>
                  <option value="Eletrodomésticos"/>
                </datalist>         
          </div>
          </div>
        </div>
        <div  className="row5">
          <input type="submit" value="Save"  className="btn btn-primary btn-block config" />
          <input type="submit" value="Cancelar"  onClick={() => props.setEditing(false)} className="btn btn-primary btn-block config" />
        </div>
    </form>


    ) : (
      <form autoComplete="off" 
      onSubmit={event => {
        event.preventDefault()
          props.addProducts(products);
          setProducts(InitialValues);
        
       }}
      className="form-grid">
        <div  className="row1"><h1>Cadastrar produto</h1></div>
        <div  className="row2">
          <div className="form-group input-group">
            <div className="input-group tamanho position">  
                  <span className="input-group-text" id="basic-addon1"><i className="fas fa-tag"></i></span>
                  <input className="form-control " placeholder="Produto" name="nome" value={products.nome} onChange={handleInputChangeCreate} />
            </div>
          </div>
        </div>
        <div  className="row3">
          <div className="form-group input-group">
            <div className="input-group tamanho position">  
                  <span className="input-group-text" id="basic-addon1"><i className="fas fa-coins"></i></span>
                  <input className="form-control " placeholder="Preço" name="price" value={products.price} onChange={handleInputChangeCreate} />
            </div>
          </div>
        </div>
        <div  className="row4">
          <div className="form-group input-group">
            <div className="input-group tamanho position"> 
            <span className="input-group-text" id="basic-addon1"><i className="fas fa-archive"></i></span>
              <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="calssificação do produto" name="tipo" value={products.tipo} onChange={handleInputChangeCreate} />
                <datalist id="datalistOptions">
                  <option value="roupas" />
                  <option value="limpeza"/>
                  <option value="mobília"/>
                  <option value="consumíveis"/>
                  <option value="cosméticos"/>
                  <option value="higiene pessoal"/>
                  <option value="Eletrodomésticos"/>
                </datalist>         
          </div>
          </div>
        </div>
        <div  className="row5">
          <input type="submit" value="Enviar" className="btn btn-primary btn-block config" />
        </div>
    </form>

    )}
    
  </>
  )
}

export default FormularioCadastroComponent;


