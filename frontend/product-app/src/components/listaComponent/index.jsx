import React from 'react'
import '../listaComponent/lista.css';


const ListaComponent = props => (

        <div className="table-grid">
          <div className="table-row1">
                <th className="thead-row1">Produto</th>
                <th className="thead-row2">Preço</th>
                <th className="thead-row3">Tipo</th>
                <th className="thead-row4">Actions</th>
          </div>
          <div className="table-row2">

                {props.products.length > 0 ? (
                  props.products.map(products =>(
                    <div className="centro" key={products.id}>
                      <div className="tbody-row1">{products.nome}</div>
                      <div className="tbody-row2">{products.price}</div>
                      <div className="tbody-row3">{products.tipo}</div>
                      <div className="tbody-row4">
                        <div class="d-grid gap-2 d-md-block">
                          <button onClick={() => {props.editRow(products) }} class="btn btn-primary"><i class="fas fa-pen"></i> </button>
                          <button onClick={() => props.deleteProducts(products.id)} class="btn btn-danger" ><i class="fas fa-trash"></i></button>
                        </div>
                      </div>
                    </div>
                  )
                 )
                 ) : (
                  <tr>
                    <td colSpan={3}>No users</td>
                  </tr>
                )}
          </div>  
        </div>
)

export default ListaComponent;
