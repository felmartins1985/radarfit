import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;
  constructor(model:Model<T>) {
    this._model = model;
  }
  public async create(obj:T):Promise<T> {
    return this._model.create({ ...obj });
  }
  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.EntityNotFound);
    return this._model.findOne({ _id });
  }

  public async readOneByParams(obj:string):Promise<T[] | null> {
    const searchRegex = new RegExp(obj, "i");
    return this._model.find({ $or: [
      { produto: { $regex : searchRegex } },
      { descricao: { $regex : searchRegex } },
    ] });
  }
  public async update(_id:string, obj:T):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.EntityNotFound);
    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
  public async updatePartial(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.EntityNotFound);
    return this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
  public async read():Promise<T[]> {
    return this._model.find();
  }
  public async delete(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.EntityNotFound);
    return this._model.findByIdAndDelete({ _id });
  }
}
export default MongoModel;
