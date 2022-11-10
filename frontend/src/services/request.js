import axios from 'axios';

const requestProducts= async (produto) =>{
  const url=`https://radarfit-backend-production.up.railway.app/produtos/find?q=${produto}`
  const response = await axios.get(url);
  return response.data;
}

export const getProducts = async () =>{
  const url=`https://radarfit-backend-production.up.railway.app/produtos`
  const response = await axios.get(url);
  return response.data;
}

export const postProducts = async ({produto, valor, descricao}) =>{
  const url=`https://radarfit-backend-production.up.railway.app/produtos`
  const number = Number(valor)
  const payload= { produto, valor: number, descricao}
  try {
    const response = await axios.post(url,payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const patchProducts = async (id,{produto, valor, descricao}) =>{
  const url=`https://radarfit-backend-production.up.railway.app/produtos/${id}`
  const number = Number(valor)
  const payload= { produto, valor: number, descricao}
  try {
    const response = await axios.patch(url,payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default requestProducts;

