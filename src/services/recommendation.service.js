const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
  },
  products
) => {
  if (
    formData.selectedPreferences.length === 0 &&
    formData.selectedFeatures.length === 0
  ) {
    return [];
  }
  const filteredProducts = products.filter((product) => {
    const features = formData.selectedFeatures || [];
    const preferences = formData.selectedPreferences || [];
    if (features.length > 0 && preferences.length === 0) {
      const setFeatures = new Set(features);
      return product.features.some((feature) => setFeatures.has(feature));
    }
    if (preferences.length > 0 && features.length === 0) {
      const setPreferences = new Set(preferences);
      return product.preferences.some((preference) =>
        setPreferences.has(preference)
      );
    }
    if (features.length > 0 && preferences.length > 0) {
      const setFeatures = new Set(features);
      const setPreferences = new Set(preferences);
      const hasFeature = product.features.some((feature) =>
        setFeatures.has(feature)
      );
      const hasPreference = product.preferences.some((preference) =>
        setPreferences.has(preference)
      );
      return hasFeature || hasPreference;
    }
  });
  if (formData.selectedRecommendationType === 'SingleProduct') {
    return filteredProducts.slice(-1);
  } else {
    return filteredProducts;
  }
};

const recommendationService = { getRecommendations };

export default recommendationService;
