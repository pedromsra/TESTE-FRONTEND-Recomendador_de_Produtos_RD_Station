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

  const isSingleProduct = selectedRecommendationType === 'SingleProduct';

  if (isSingleProduct) {
    return filterAndRankByFeaturesOrPreferences(filterParams).slice(-1)
  } else {
    return filterByFeaturesOrPreferences(filterParams);
  }
};

const recommendationService = { getRecommendations };

export default recommendationService;
