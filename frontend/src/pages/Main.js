import { useContext, useState, useEffect } from 'react';
import Header from '../components/Header';
import ProdutoContext from '../context/produtoContext';
import ListProducts from '../components/ListProducts';
import DetailsCard from '../components/DetailsCard';

import './main.css';
import AddProductModal from '../components/AddProductsModal';
function Main() {
  const { produtos, load, details, productDetails } = useContext(ProdutoContext);
  const [fav, setFav] = useState([]);
  useEffect(() => {
    const favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts'));
    if (!favoriteProducts) {
      return;
    }
    setFav(favoriteProducts);
  }, []);
  const handleFavorite = () => {
    const findProduct = fav?.findIndex(
      ({ _id }) => _id === productDetails._id
    );
    if (findProduct >= 0) {
      const filterFavorites = fav.filter(
        ({ _id }) => _id !== productDetails._id
      );
      localStorage.setItem('favoriteProducts', JSON.stringify(filterFavorites));
      return setFav(filterFavorites);
    }
    localStorage.setItem(
      'favoriteProducts',
      JSON.stringify([...fav, productDetails])
    );
    return setFav([...fav, productDetails]);
  };
  return (
    <div>
      <Header />
      <div className='addProducts'>
      <h3>Produtos</h3>
      <AddProductModal />
      </div>
      <div className='listCard'>
      {load ? <p> Carregando...</p>:(
        <div className='listProducts'>
        <h1>Lista de Produtos</h1> 
           <ul>
           {produtos.map((produto, index) => (
             <ListProducts fav={fav} produto={produto} key={index}/>
           ))}
            </ul>
        </div>
      )}
      {details ? (
                <div className='detailsCard'>
                  <DetailsCard fav={fav} setFav={ setFav } handleFavorite={handleFavorite} produto={productDetails}/>
                  {/* <input
                    className='favoriteButton'
                    src={ fav.find(({ _id }) => _id === productDetails._id)? black: white}
                    type="image"
                    alt="Botão de favorito"
                    onClick={ handleFavorite }
                  /> */}
                </div>
                ) : null}
    </div>
    </div>
  )
}

export default Main;