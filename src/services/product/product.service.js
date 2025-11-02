import { baseURL } from '..';


/*
* @param {object} httpClient - cliente HTTP para fazer requisições
* returns {Promise<Array>} - lista de produtos
*/
export const getProducts = async (httpClient) => {
  try {
    const response = await httpClient.get(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os produtos:', error);
    throw error;
  }
};
