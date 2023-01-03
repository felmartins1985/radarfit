import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import ProdutoContext from '../context/produtoContext';
import { postProducts } from '../services/request';
import './addProductModal.css';

function AddProductModal() {
  const [show, setShow] = useState(false);
  const { addProdutos, setAddProdutos } = useContext(ProdutoContext);
  const handleChange = ({ target: { value, name } }) => {
    setAddProdutos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button type="button" className="buttonAddModal" onClick={handleShow}>
        +
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Novo Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="formProductModal">
            <label className="labelModal" htmlFor="produto">
              Produto
              <input
                name="produto"
                value={addProdutos.produto}
                onChange={handleChange}
                type="text"
                id="produto"
                placeholder="nome do produto"
              />
            </label>
            <label className="labelModal" htmlFor="valor">
              <input
                name="valor"
                value={addProdutos.valor}
                onChange={handleChange}
                type="number"
                id="number"
                placeholder="Valor (R$)"
              />
            </label>
            <label className="labelModalBlack" htmlFor="descricao">
              Descrição
              <input
                name="descricao"
                value={addProdutos.descricao}
                onChange={handleChange}
                type="text"
                id="descricao"
              />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-success" onClick={handleClose}>
            Fechar
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              postProducts(addProdutos);
              handleClose();
              window.location.reload();
            }}
          >
            Adicionar

          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddProductModal;
