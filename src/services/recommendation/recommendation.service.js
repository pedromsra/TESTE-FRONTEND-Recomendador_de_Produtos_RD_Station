import { multipleProductsRecommendation } from './multipleProductsRecommendation';
import { singleProductRecommendation } from './singleProductRecommendation';

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
    return singleProductRecommendation(filterParams).slice(-1)
  } else {
    return multipleProductsRecommendation(filterParams);
  }
};

const recommendationService = { getRecommendations };

export default recommendationService;
