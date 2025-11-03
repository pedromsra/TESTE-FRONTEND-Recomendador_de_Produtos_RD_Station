import { render, screen} from '@testing-library/react';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import Form from './Form';
import useProducts from '../../hooks/useProducts';

jest.mock('../../services', () => ({
  getProducts: jest.fn(),
}));

jest.mock('../../hooks/useProducts');
jest.mock('../../hooks/useForm.js');
jest.mock('../../hooks/useRecommendations.js');

describe('Form Component Tests', () => {
  beforeEach(async () => {

    useProducts.mockReturnValue({
      preferences: ['Pref 1', 'Pref 2'],
      features: ['Feature 1', 'Feature 2'],
      products: ['Prod 1', 'Prod 2'],
      loading: false,
    });

    useForm.mockReturnValue({
      formData: {
        selectedPreferences: [],
        selectedFeatures: [],
        selectedRecommendationType: '',
      },
      handleChange: jest.fn(),
    });

    useRecommendations.mockReturnValue({
      generateRecommendations: jest.fn(),
    });
  });

  it('Verificar se o formulário renderiza corretamente', () => {
    render(<Form />);

    expect(screen.getByText('Preferências:')).toBeInTheDocument();
    expect(screen.getByText('Funcionalidades:')).toBeInTheDocument();
    expect(screen.getByText('Tipo de Recomendação:')).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /Obter recomendação/i,
    })).toBeInTheDocument();
  });
});
