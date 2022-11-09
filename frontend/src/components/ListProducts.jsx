/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import white from '../images/white.jpeg';
import black from '../images/black.jpeg';
import ProdutoContext from '../context/produtoContext';
import './listProduct.css';

function ListProducts({ produto, fav }) {
  const { setDetails, setProductDetails } = useContext(ProdutoContext);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="productAndFav"
      onClick={() => {
        setDetails(true);
        setProductDetails(produto);
      }}
    >
      <div>
        <p className="nameProduct">{produto.produto}</p>
        <p>{`R$ ${produto.valor.toFixed(2)}`}</p>
      </div>
      <input
        src={fav.find(({ _id }) => _id === produto._id) ? black : white}
        type="image"
        alt="Botão de favorito"
      />
    </div>
  );
}

export default ListProducts;
