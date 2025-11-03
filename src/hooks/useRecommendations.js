// useRecommendations.js

import { useContext } from 'react';
import { getRecommendations } from '../services';
import { RecommendationContext } from '../store';
import { handleSetRecommendations } from '../store/actions';

function useRecommendations(products) {
  const {state, dispatch} = useContext(RecommendationContext);

  const setRecommendations = (newRecommendations) => {
    handleSetRecommendations(dispatch, newRecommendations);
  };

  const generateRecommendations = (formData) => {
    const recommendations = getRecommendations(formData, products);
    setRecommendations(recommendations);
    return recommendations;
  }

  return { recommendations: state, generateRecommendations };
}

export default useRecommendations;
