import { renderHook, waitFor } from '@testing-library/react';
import useProducts from '../hooks/useProducts';
import * as services from '../services';
import mockProducts from '../mocks/mockProducts';

jest.mock('../services', () => ({
  getProducts: jest.fn(),
}));

describe('useProducts hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Obtem lista de produtos da API e atualiza o estado', async () => {
    services.getProducts.mockResolvedValueOnce(mockProducts);

    const { result } = renderHook(() => useProducts());

    await waitFor(() => {
      expect(result.current.products).toEqual(mockProducts);
    });

    expect(services.getProducts).toHaveBeenCalledTimes(1);

    expect(result.current.products).toEqual(mockProducts);
    expect(result.current.preferences.length).toBeGreaterThan(0);
    expect(result.current.features.length).toBeGreaterThan(0);

    result.current.preferences.forEach((p) =>
      expect(mockProducts.flatMap((x) => x.preferences)).toContain(p)
    );
    result.current.features.forEach((f) =>
      expect(mockProducts.flatMap((x) => x.features)).toContain(f)
    );
  });

  it('Loga Erro em caso de falha na obtenção da lista de produtos com getProducts service', async () => {
    const mockError = new Error('Erro ao obter os produtos');
    services.getProducts.mockRejectedValueOnce(mockError);
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    renderHook(() => useProducts());

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Erro ao obter os produtos:', mockError);
    });

    consoleSpy.mockRestore();
  });
});
