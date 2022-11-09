import './header.css';
import { useContext } from 'react';
import ProdutoContext from '../context/produtoContext';
import requestProducts from '../services/request';
function Header() {
  const { searchProduct, setSearchProduct, setProdutos } = useContext(ProdutoContext);
  const handleChange = async ({ target: { value } }) => {
    const requestP = await requestProducts(value);
    setSearchProduct(value)
    setProdutos(requestP)

  };
  return (
    <header className='header'>
         <label htmlFor="produto">
          <input
            className='input-header'
            name="produto"
            value={ searchProduct }
            onChange={ handleChange }
            type="text"
            id="produto"
            placeholder="Buscar por um produto"
          />
        </label>
      
    </header>
  );
}

export default Header;