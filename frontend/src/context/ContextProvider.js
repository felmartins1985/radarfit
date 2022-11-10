import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import ProdutoContext from './produtoContext';
import PropTypes from 'prop-types';
function ContextProvider({ children }) {
  const [produtos, setProdutos] = useState([]);
  const [load, setLoad] = useState(true);

  const [addProdutos, setAddProdutos] = useState({
    produto: '',
    valor: '',
    descricao: '',
  });
  const [searchProduct, setSearchProduct] = useState('');
  const [details, setDetails] = useState(false);
  const [update, setUpdate] = useState(false);

  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    const getProducts = async () => {
      const url = 'http://localhost:3001/produtos';
      const response = await axios.get(url);
      setProdutos(response.data);
      setLoad(false);
    };
    getProducts();
  }, []);
  const contextValue = useMemo(() => ({
    produtos,
    setProdutos,
    load,
    setLoad,
    addProdutos,
    setAddProdutos,
    productDetails,
    setProductDetails,
    searchProduct,
    setSearchProduct,
    details,
    setDetails,
    update,
    setUpdate,
  }), [produtos, load, addProdutos, productDetails, searchProduct, details, update]);

  return (
    <ProdutoContext.Provider value={contextValue}>
      { children }
    </ProdutoContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
