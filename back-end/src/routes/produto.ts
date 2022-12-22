import { Router } from 'express';
import ProdutoController from '../controllers/Produto';
import ProdutoModel from '../models/Produto';
import ProdutoService from '../services/Produto';

const route = Router();

const produto = new ProdutoModel();
const produtoService = new ProdutoService(produto);
const produtoController = new ProdutoController(produtoService);

route.get('/find', (req, res) => produtoController.readOneByParams(req, res));
route.get('/:id', (req, res) => produtoController.readOne(req, res));
route.put('/:id', (req, res) => produtoController.update(req, res));
route.patch('/:id', (req, res) => produtoController.updatePartial(req, res));
route.delete('/:id', (req, res) => produtoController.delete(req, res));
route.post('/', (req, res) => produtoController.create(req, res));
route.get('/', (req, res) => produtoController.read(req, res));

export default route;