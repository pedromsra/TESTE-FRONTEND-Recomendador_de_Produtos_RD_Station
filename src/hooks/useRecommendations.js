// useRecommendations.js

import { useContext } from 'react';
import recommendationService from '../services/recommendation/recommendation.service';
import { RecommendationContext } from '../store';
import { handleSetRecommendations } from '../store/actions';

function useRecommendations(products) {
  const {state, dispatch} = useContext(RecommendationContext);

  const setRecommendations = (newRecommendations) => {
    handleSetRecommendations(dispatch, newRecommendations);
  };

  const generateRecommendations = (formData) => {
    const recommendations = recommendationService.getRecommendations(formData, products);
    setRecommendations(recommendations);
    return recommendations;
  }

  return { recommendations: state, generateRecommendations, setRecommendations };
}

export default useRecommendations;
