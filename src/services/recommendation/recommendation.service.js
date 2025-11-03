import { multipleProductsRecommendation } from './multipleProductsRecommendation';
import { singleProductRecommendation } from './singleProductRecommendation';

export const getRecommendations = (
  { selectedFeatures, selectedPreferences, selectedRecommendationType } = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: 'MultipleProducts',
  },
  products
) => {
  if (products.length === 0) {
    return [];
  }

  const filterParams = { products, selectedFeatures, selectedPreferences };

  const isSingleProduct = selectedRecommendationType === 'SingleProduct';

  if (isSingleProduct) {
    return singleProductRecommendation(filterParams);
  } else {
    return multipleProductsRecommendation(filterParams);
  }
};

const recommendationService = { getRecommendations };

export default recommendationService;
