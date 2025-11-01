import { filterByFeaturesOrPreferences } from '../utils/filterByFeaturesOrPreferences';
import { filterAndRankByFeaturesOrPreferences } from '../utils/filterAndRankByFeaturesOrPreferences';

const getRecommendations = (
  { selectedFeatures, selectedPreferences, selectedRecommendationType } = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: 'MultipleProducts',
  },
  products
) => {
  const filterParams = { products, selectedFeatures, selectedPreferences };
  const filteredProducts =
    selectedRecommendationType === 'SingleProduct'
      ? filterAndRankByFeaturesOrPreferences(filterParams).slice(-1)
      : filterByFeaturesOrPreferences(filterParams);

  return filteredProducts;
};

const recommendationService = { getRecommendations };

export default recommendationService;
