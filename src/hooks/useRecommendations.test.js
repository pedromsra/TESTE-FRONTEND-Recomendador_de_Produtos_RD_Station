import { useReducer } from 'react';
import * as services from '../services';
import { recommendationReducer } from '../store/reducer';
import { RecommendationContext } from '../store';
import { act, renderHook } from '@testing-library/react';
import useRecommendations from './useRecommendations';
import mockProducts from '../mocks/mockProducts';
import * as actions from '../store/actions';

jest.mock('../services', () => ({ getRecommendations: jest.fn() }));

beforeEach(() => {
  actions.handleSetRecommendations = jest.fn((dispatch, payload) => {
    dispatch({ type: 'SET_RECOMMENDATIONS', payload });
  });
});

const TestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recommendationReducer, []);
  return (
    <RecommendationContext.Provider value={{ state, dispatch }}>
      {children}
    </RecommendationContext.Provider>
  );
};

const mockFormData = {
  selectedPreferences: [
    'Integração fácil com ferramentas de e-mail',
    'Personalização de funis de vendas',
    'Automação de marketing',
  ],
  selectedFeatures: [
    'Rastreamento de interações com clientes',
    'Rastreamento de comportamento do usuário',
  ],
  selectedRecommendationType: 'MultipleProducts',
};

describe('useRecommendations hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Geração de Recomendações e Integração com o contexto - Atualização do estado quando generateRecommendations é chamado', async () => {
    services.getRecommendations.mockReturnValueOnce(mockProducts.slice(0, 2));

    const { result } = renderHook(() => useRecommendations(mockProducts), {
      wrapper: TestProvider,
    });

    await act(async () => {
      result.current.generateRecommendations(mockFormData);
    });

    expect(services.getRecommendations).toHaveBeenCalledTimes(1);
    expect(services.getRecommendations).toHaveBeenCalledWith(
      mockFormData,
      mockProducts
    );
    expect(actions.handleSetRecommendations).toHaveBeenCalledTimes(1);
    expect(
      result.current.recommendations.map(
        (recommendation) => recommendation.name
      )
    ).toEqual(['RD Station CRM', 'RD Station Marketing']);
  });
});
