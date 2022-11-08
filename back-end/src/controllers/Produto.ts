import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IProduto } from '../interfaces/IProduto';

export default class ProdutoController {
  constructor(private _service: IService<IProduto>) { }
  public async create(
    req: Request,
    res: Response<IProduto>,
  ) {
    const results = await this._service.create(req.body);
    return res.status(201).json(results);
  }
  public async readOne(
    req: Request,
    res: Response<IProduto>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }
  public async read(
    _req: Request,
    res: Response<IProduto[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }
  public async readOneByParams(
    req: Request,
    res: Response<IProduto[]| null >,
  ) {
    const {query:{ q }}= req;
    const result = await this._service.readOneByParams(String(q));
    return res.status(200).json(result);
  }
  public async delete(
    req: Request,
    res: Response<IProduto>,
  ) {
    const result = await this._service.delete(req.params.id);
    return res.status(204).json(result);
  }
  public async update(
    req: Request,
    res: Response<IProduto>,
  ) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(200).json(result);
  }
  public async updatePartial(
    req: Request,
    res: Response<IProduto>,
  ) {
    const result = await this._service.updatePartial(req.params.id, req.body);
    return res.status(200).json(result);
  }
}
