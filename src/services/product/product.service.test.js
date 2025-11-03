import {getProducts} from './product.service';
import mockProducts from '../../mocks/mockProducts';
const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

describe('getProducts service', () => {
  const mockHttpClient = {
    get: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('Deve retornar os produtos quando a requisição for bem sucedida', async () => {
    mockHttpClient.get.mockResolvedValueOnce({data: mockProducts});
    const result = await getProducts(mockHttpClient);

    expect(mockHttpClient.get).toHaveBeenCalledWith(`${baseURL}/products`);
    expect(result).toBe(mockProducts);
  })

  it('Deve logar um erro no console em caso de falha na requisição', async () => {
    const mockError = new Error('Erro ao obter os produtos');
    mockHttpClient.get.mockRejectedValueOnce(mockError);
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await expect(getProducts(mockHttpClient)).rejects.toThrow(mockError);
    expect(consoleSpy).toHaveBeenCalledWith('Erro ao obter os produtos:', mockError);

    consoleSpy.mockRestore();
  })
})
