import useRecommendations from '../../hooks/useRecommendations';
import RecommendationList from './RecommendationList';
import { render, screen } from '@testing-library/react';

jest.mock('../../services', () => ({
  getProducts: jest.fn(),
}));

jest.mock('../../hooks/useRecommendations.js');

describe('Recommendations List Component', () => {
  it('Exibe mensagem quando não há recomendações', () => {
    useRecommendations.mockReturnValue({ recommendations: [] });

    render(<RecommendationList />);

    expect(
      screen.getByText(/Nenhuma recomendação encontrada./i)
    ).toBeInTheDocument();
  });
  it('Exibe a lista de recomendações quando existem', () => {
    useRecommendations.mockReturnValue({ recommendations: [{ name: 'Rec 1' }, { name: 'Rec 2' }] });

    render(<RecommendationList />)

    expect(screen.getByTestId('recommendations-list')).toBeInTheDocument();
    expect(screen.queryByText(/Nenhuma recomendação encontrada./i)).toBeNull();
  });
});
