import React, { useState, useContext } from 'react';
import EditProduct from './EditProduct';
import ProdutoContext from '../context/produtoContext';
import './detailsCard.css';
import white from '../images/white.jpeg';
import black from '../images/black.jpeg';

function DetailsCard({ produto, fav, handleFavorite }) {
  const { productDetails } = useContext(ProdutoContext);
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {productDetails ? (
        <aside className="asideDetails">
          <h1> Detalhes </h1>
          <p className="detailsCardp">{productDetails.produto}</p>
          <p className="detailsCardp">{`R$ ${productDetails.valor.toFixed(2)}`}</p>
          <p className="detailsCardp">{productDetails.descricao}</p>
          <div className="detailsCardButton">
            <button type="button" sclassName="editButton" onClick={() => setEdit(true)}> Editar </button>
            <input
              className="favoriteButton"
              src={fav.find(({ _id }) => _id === productDetails._id) ? black : white}
              type="image"
              alt="Botão de favorito"
              onClick={handleFavorite}
            />
          </div>
          {edit ? (
            <EditProduct produto={produto} produtoId={productDetails._id} title="Editar Produto" />
          ) : null}
        </aside>
      ) : null}
    </div>
  );
}

export default DetailsCard;
