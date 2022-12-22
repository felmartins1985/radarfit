import IService from '../interfaces/IService';
import { IProduto, ProdutoZodSchema } from '../interfaces/IProduto';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class ProdutosService implements IService<IProduto> {
  private _produto:IModel<IProduto>;
  constructor(model:IModel<IProduto>) {
    this._produto = model;
  }

  public async create(obj:unknown):Promise<IProduto> {
    const parsed = ProdutoZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._produto.create(parsed.data);
  }

  public async readOne(_id:string):Promise<IProduto> {
    const produto = await this._produto.readOne(_id);
    if (!produto) throw new Error(ErrorTypes.EntityNotFound);
    return produto;
  }
  public async readOneByParams(obj: string): Promise<IProduto[] | null> {
    const produto = await this._produto.readOneByParams(obj);
    return produto;
  }
  public async update(_id: string, obj: unknown): Promise<IProduto> {
    const parsed = ProdutoZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const updated = await this._produto.update(_id, parsed.data);
    if (!updated) {
      throw new Error(ErrorTypes.EntityNotFound);
    }
    return updated;
  }
  public async read():Promise<IProduto[]> {
    return this._produto.read();
  }
  public async delete(_id:string):Promise<IProduto> {
    const car = await this._produto.delete(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }
  public async updatePartial(_id: string, obj: Partial<IProduto>): Promise<IProduto> {
    const parsed = ProdutoZodSchema.partial().safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const updated = await this._produto.updatePartial(_id, parsed.data);
    console.log(updated, 'update');
    if (!updated) {
      throw new Error(ErrorTypes.EntityNotFound);
    }
    return updated;
  }
}      
export default ProdutosService;