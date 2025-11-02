// Form.js

import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import { navigate } from '../../utils/navigation';

function Form() {
  const { preferences, features, products } = useProducts();

  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { generateRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    generateRecommendations(formData);
    navigate('#recommendation-list');
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton
        disabled={
          formData.selectedFeatures.length === 0 &&
          formData.selectedPreferences.length === 0
        }
        text="Obter recomendação"
        title="Selecione Funcionalidades e/ou Preferências do seu interesse"
      />
    </form>
  );
}

export default Form;
