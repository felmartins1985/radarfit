interface IService<T> {
  create(obj:unknown):Promise<T>,
  readOne(_id:string):Promise<T>,
  read():Promise<T[]>,
  readOneByParams(obj:string):Promise<T[] | null>,
  delete(_id:string):Promise<T>,
  update(_id:string, obj:unknown):Promise<T>,
  updatePartial(_id:string, obj: Partial<T>):Promise<T>,
}
export default IService;