import React, {useContext} from 'react';
import ProdutoContext from '../context/produtoContext';
import {postProducts} from '../services/request';
function AddProduct({title, setEdit}) {
  const { addProdutos,setAddProdutos } = useContext(ProdutoContext);
  const handleChange = ({ target: { value, name } }) => {
    setAddProdutos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
      <form>
        <h2> {title}</h2>
        <label htmlFor="produto">
          Produto
          <input
            name="produto"
            value={ addProdutos.produto }
            onChange={ handleChange }
            type="text"
            id="produto"
            placeholder="nome do produto"
          />
        </label>
        <label htmlFor="valor">
          <input
            name="valor"
            value={ addProdutos.valor }
            onChange={ handleChange }
            type="number"
            id="number"
            placeholder="Valor (R$)"

          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            name="descricao"
            value={ addProdutos.descricao }
            onChange={ handleChange }
            type="text"
            id="descricao"
          />
        </label>
          <button type='button' onClick={()=> postProducts(addProdutos)}>ADD</button>
          <button type='button' onClick={()=> setEdit(false)}>FECHAR</button>
      
      </form>
  );
}

export default AddProduct;