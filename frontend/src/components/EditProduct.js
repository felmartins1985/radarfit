import { useState} from 'react';
import './editProduct.css';
import {patchProducts} from '../services/request';
function EditProduct({title, produtoId, produto}) {
  const [editProdutos, setEditProdutos] = useState({
    produto: produto.produto,
    valor: produto.valor,
    descricao: produto.descricao
  });
  const handleChange = ({ target: { value, name } }) => {
    setEditProdutos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
      <form className='formEditProduct'>
        <h2> {title}</h2>
        <label className='labelEditProduct'htmlFor="produto">
          Produto
          <input
            name="produto"
            value={ editProdutos.produto }
            onChange={ handleChange }
            type="text"
            id="produto"
            placeholder="nome do produto"
          />
        </label>
        <label className='labelEditProduct' htmlFor="valor"> Valor
          <input
            name="valor"
            value={ editProdutos.valor }
            onChange={ handleChange }
            type="number"
            id="number"
            placeholder="Valor (R$)"

          />
        </label>
        <label className='labelEditProduct' htmlFor="descricao">
          Descrição
          <input
            name="descricao"
            value={ editProdutos.descricao }
            onChange={ handleChange }
            type="text"
            id="descricao"
          />
        </label>
        <button className='editButton' type='button' onClick={()=> {
          patchProducts(produtoId,editProdutos)
          window.location.reload()
          }}>Atualizar</button>
        
      </form>

  );
}

export default EditProduct;