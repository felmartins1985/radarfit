import { model as mongooseCreateModel, Schema } from 'mongoose';
import MongoModel from './MongoModel';
import { IProduto } from '../interfaces/IProduto';

const produtoSchema = new Schema<IProduto>({
  produto: String,
  valor: Number,
  descricao: String,
}, { versionKey: false,
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated',
  } });
class Produto extends MongoModel<IProduto> {
  constructor(model = mongooseCreateModel('Produto', produtoSchema)) {
    super(model);
  }
} 
export default Produto;
