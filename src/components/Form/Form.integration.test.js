import { fireEvent, render, screen } from '@testing-library/react';
import useRecommendations from '../../hooks/useRecommendations';
import Form from './Form';
import useProducts from '../../hooks/useProducts';
import { navigate } from '../../utils/navigation';

jest.mock('../../services', () => ({
  getProducts: jest.fn(),
}));

jest.mock('../../utils/navigation', () => ({
  navigate: jest.fn(), // cria mock do navigate
}));

jest.mock('../../hooks/useProducts');
jest.mock('../../hooks/useRecommendations.js');

describe('Form Component Tests', () => {
  const generateRecommendationsMock = jest.fn();

  beforeEach(async () => {
    generateRecommendationsMock.mockClear();

    useProducts.mockReturnValue({
      preferences: ['Pref 1', 'Pref 2'],
      features: ['Feature 1', 'Feature 2'],
      products: ['Prod 1', 'Prod 2'],
      loading: false,
    });

    useRecommendations.mockReturnValue({
      generateRecommendations: generateRecommendationsMock,
    });
  });

  it('Escolher Funcionalidade, Preferências, Tipo e Submeter formulário', () => {
    render(<Form />);

    const featureCheckBox = screen.getByLabelText('Feature 1');

    fireEvent.click(featureCheckBox);


    const preferenceCheckBox = screen.getByLabelText('Pref 2');

    fireEvent.click(preferenceCheckBox);


    const recommendationType = screen.getByLabelText('Múltiplos Produtos');

    fireEvent.click(recommendationType);

    const submitButton = screen.getByRole('button', {
      name: /Obter recomendação/i,
    });

    fireEvent.click(submitButton);

    expect(generateRecommendationsMock).toHaveBeenCalledWith({
      selectedFeatures: ['Feature 1'],
      selectedPreferences: ['Pref 2'],
      selectedRecommendationType: 'MultipleProducts',
    });

    expect(navigate).toHaveBeenCalledWith('#recommendation-list');
  });
});
